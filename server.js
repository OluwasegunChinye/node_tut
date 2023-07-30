// const http = require('http');

// const PORT = 3000;

// const server = http.createServer((req,res) => {
//   res.writeHead(200, {
//     // 'Content-Type' : 'text/plain',
//     'Content-Type' : 'application/json',
//   });
//   // res.end('Hello, lets get it started here!!!')
//   res.end(JSON.stringify({
//     id: 1,
//     name: 'Oluwasegun chinye'
//   }))
// })

// server.listen(PORT, () => {
//   console.log(`we are listening to ${PORT}....`)
// });



//EXPRESS TUT BELOW 👇🏼

const express  = require('express');

const app = express();

const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hello dear world, whats good?')
})
app.get('/messages', (req, res) => {
  res.send('<ul><li>How you doing today ?</li></ul>')
})
 
app.post('/messages', (req, res) => {
  console.log('Updating messages.....')
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}....`)
})