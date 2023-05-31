const express = require('express')
const app = express()
const port = 3010

app.post('/', (req, res) => {
    console.log(req.body,"working")
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})