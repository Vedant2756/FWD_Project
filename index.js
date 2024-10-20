const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const vedantmiddleware = (req,res, next)=>{
  console.log(req)
  next()
}
app.use(express.static(path.join(__dirname, "tut")))
// app.use(vedantmiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + " " + req.params.name)
})
app.get('/about', (req, res) => {
  // res.send('about!')
  // res.sendFile(__dirname + '/about.html')
  // res.status(500)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})