const PORT = 8080

const pool = require("./db")

const express = require('express')
app = express()
app.use(express.json())

app.listen(PORT, () => {
    console.log('Running on localhost:' + PORT)
})


// GET word by id

app.get('/words/cantonese/:id', async (req, res) => {
    const { id } = req.params
    const word = await pool.query("SELECT * FROM cantoneseword WHERE word_id = $1", [id])
    res.json(word.rows)
})

// GET n random words
app.get('/words/cantonese/random/:n', async (req, res) => {
    const { n } = req.params
    const words = await pool.query('SELECT * FROM cantoneseword ORDER BY RANDOM() LIMIT $1', [n]);
    res.json(words.rows)
})