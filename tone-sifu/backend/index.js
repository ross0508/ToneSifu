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
    const toneArray = req.query.tones.map(Number); // Convert tones sent in params to array of numbers
    const words = await pool.query('SELECT * FROM mandarinword WHERE tone = ANY($1::int[]) ORDER BY RANDOM() LIMIT $2', [toneArray, n]);
    res.json(words.rows)
    console.log(words.rows)
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
    const toneArray = req.query.tones.map(Number); // Convert tones sent in params to array of numbers
    const words = await pool.query('SELECT * FROM cantoneseword WHERE tone = ANY($1::int[]) ORDER BY RANDOM() LIMIT $2', [toneArray, n]);
    res.json(words.rows)
})