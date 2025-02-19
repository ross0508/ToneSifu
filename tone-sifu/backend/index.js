const PORT = 8080
const cors = require('cors');
const pool = require("./db")

const express = require('express')
app = express()
app.use(cors());
app.use(express.json())

app.listen(PORT, () => {
    console.log('Running on localhost:' + PORT)
})




// MANDARIN

// GET word by id

app.get('/words/cmn/:id', async (req, res) => {
    const { id } = req.params
    const word = await pool.query("SELECT * FROM mandarinword WHERE word_id = $1", [id])
    res.json(word.rows)
})


// GET n random words

app.get('/words/cmn/random/:n', async (req, res) => {
    const { n } = req.params
    const toneArray = req.query.tones.map(Number) // Convert tones sent in params to array of numbers
    const words = await pool.query('SELECT * FROM mandarinword WHERE tone = ANY($1::int[]) ORDER BY RANDOM() LIMIT $2', [toneArray, n])
    res.json(words.rows)
})




// CANTONESE

// GET word by id

app.get('/words/yue/:id', async (req, res) => {
    const { id } = req.params
    const word = await pool.query("SELECT * FROM cantoneseword WHERE word_id = $1", [id])
    res.json(word.rows)
})


// GET n random words

app.get('/words/yue/random/:n', async (req, res) => {
    const { n } = req.params
    const toneArray = req.query.tones.map(Number) // Convert tones sent in params to array of numbers
    const words = await pool.query('SELECT * FROM cantoneseword WHERE tone = ANY($1::int[]) ORDER BY RANDOM() LIMIT $2', [toneArray, n])
    res.json(words.rows)
})




// USERS

// Create user

app.post('/users/:user_id', async (req, res) => {
    const { user_id } = req.params
    
    try {
        const userResult = await pool.query(
            'INSERT INTO users (user_id, exp) VALUES ($1, $2) RETURNING user_id, exp',
            [user_id, 0]
        );

        const { user_id: userId, exp } = userResult.rows[0]

        res.status(201).json({ user_id: userId, exp })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Database error' })
    }
});


// Add EXP

app.put('/users/:user_id', async (req, res) => {
    const { user_id } = req.params
    const { expAdded, language } =  req.body
    if (language == 'yue')
        try {
            const userResult = await pool.query(
                'UPDATE users SET exp = exp + $1, exp_yue = exp_yue + $1 WHERE user_id = $2 RETURNING user_id, exp',
                [expAdded, user_id]
            );

            const { user_id: userId, exp } = userResult.rows[0]

            res.status(201).json({ user_id: userId, exp })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Database error' })
        }
    if (language == 'cmn')
        try {
            const userResult = await pool.query(
                'UPDATE users SET exp = exp + $1, exp_cmn = exp_cmn + $1 WHERE user_id = $2 RETURNING user_id, exp',
                [expAdded, user_id]
            );

            const { user_id: userId, exp } = userResult.rows[0]

            res.status(201).json({ user_id: userId, exp })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Database error' })
        }
})


// Get EXP

app.get('/users/:user_id', async (req, res) => {
    const { user_id } = req.params

    try {
        const userResult = await pool.query(
            'SELECT exp, exp_yue, exp_cmn FROM users WHERE user_id = $1', [user_id]
        )
        res.json(userResult.rows)
    } catch {
        console.error(error)
        res.status(500).json({ error: 'Database error' })
    }
})




// PERFORMANCE LOGS


// Add performance log MANDARIN

app.post('/log/cmn/:user_id', async (req, res) => {
    const { user_id } = req.params
    const score = req.query.score.map(Number) // Convert scores sent in params to array of numbers
    const total = req.query.total.map(Number) // Same for total answered
    const date = new Date().toISOString().split('T')[0];

    try {
        const userResult = await pool.query(
            `INSERT INTO user_performance_cmn (total_correct, total_answered, date, user_id) VALUES ($1, $2, $3, $4) ON CONFLICT (user_id, date) 
    DO UPDATE SET 
    total_correct = array(
        SELECT unnest(user_performance_cmn.total_correct) + unnest(EXCLUDED.total_correct)
    ),
    total_answered = array(
        SELECT unnest(user_performance_cmn.total_answered) + unnest(EXCLUDED.total_answered)
    )`,
            [score, total, date, user_id]
        );
        res.status(201)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Database error' })
    }
})


// Add performance log CANTONESE

app.post('/log/yue/:user_id', async (req, res) => {
    const { user_id } = req.params;
    const score = req.query.score.map(Number); // Convert scores sent in params to array of numbers
    const total = req.query.total.map(Number); // Same for total answered
    const date = new Date().toISOString().split('T')[0];

    try {
        const userResult = await pool.query(
            `INSERT INTO user_performance_yue (total_correct, total_answered, date, user_id) 
            VALUES ($1, $2, $3, $4) 
            ON CONFLICT (user_id, date) 
            DO UPDATE SET 
                total_correct = array(
                    SELECT unnest(user_performance_yue.total_correct) + unnest(EXCLUDED.total_correct)
                ),
                total_answered = array(
                    SELECT unnest(user_performance_yue.total_answered) + unnest(EXCLUDED.total_answered)
                )`,
            [score, total, date, user_id]
        );
        res.status(201).send('User performance logged');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
});


// Get last 30 days MANDARIN

app.get('/log/cmn/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const result = await pool.query(
            `SELECT * 
             FROM user_performance_cmn 
             WHERE user_id = $1 
             AND TO_DATE(date, 'YYYY-MM-DD') >= CURRENT_DATE - INTERVAL '30 days' 
             ORDER BY date DESC`,
            [user_id]
        );
        
        res.json(result.rows); // Send the result back as JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
});


// Get last 30 days CANTONESE

app.get('/log/yue/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const result = await pool.query(
            `SELECT * 
             FROM user_performance_yue 
             WHERE user_id = $1 
             AND TO_DATE(date, 'YYYY-MM-DD') >= CURRENT_DATE - INTERVAL '30 days' 
             ORDER BY date DESC`,
            [user_id]
        );
        
        res.json(result.rows); // Send the result back as JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
});
