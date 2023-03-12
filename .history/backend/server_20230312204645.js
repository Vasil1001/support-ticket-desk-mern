const express = require('express')
const app = express()
const port = 5000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

console.log('Server...')