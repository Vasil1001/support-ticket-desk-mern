const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) =>)
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

console.log('Server...')