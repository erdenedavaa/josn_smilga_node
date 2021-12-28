const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end('Welcome to our home page')
  }
  if (req.url === '/about') {
    return res.end('Here is about')
  }
  return res.end(`<h1>404</h1>`)
})

server.listen(9000)
