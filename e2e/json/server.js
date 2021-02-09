// server.js
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

//custom handling
server.get('/time', (req, res) => {
  res.jsonp({
    current: new Date()
  })
})

server.get('/admin', (req, res) => {
  res.sendStatus(403);
})

//defaults
server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})
