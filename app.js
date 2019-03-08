const express = require('express')
const app = express()
const path = require('path')

const hostname = '0.0.0.0'    // allows access from remote computers
const port = 3002
app.use(express.static(path.join(__dirname, './scripts')))

app.get('/', function (req, res) {
  //res.send('Welcome home!')
  res.sendFile(path.join(__dirname, '/scripts/function.html'))

})

app.get('/hi', (req, res) => {
  res.send('Hello!')
})

app.get('/big',  (req, res) =>{
  res.send('<h1>Hello World!</h1>')
})

app.get('/greeting/:id',  (req, res) =>{
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

