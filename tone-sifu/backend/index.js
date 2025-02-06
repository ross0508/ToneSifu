const PORT = 8080

const pool = require("./db")

const express = require('express')
app = express()
app.use(express.json())

app.listen(PORT, () => {
    console.log('Running on localhost:' + PORT)
})

app.get('/words/cantonese/:id', async (req, res) => {
    const { id } = req.params
    const word = await pool.query("SELECT * FROM cantoneseword WHERE word_id = $1", [id])
    res.json(word.rows)
})