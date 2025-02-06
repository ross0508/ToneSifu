const PORT = 8080

const express = require('express')
app = express()
app.use(express.json())

app.listen(PORT, () => {
    console.log('Running on localhost:' + PORT)
})

app.get('/words/cantonese', (req, res) => {
    res.status(200).send('jyut')
})