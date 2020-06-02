const http = require('http')

const hostname = 'localhost'

const port = 3000

const server = http.createServer((req, res) => {
    res.end('<h1>Welcome to Node!</h1>')
})

server.listen(port, hostname, () => {
    console.log(`Server listening at ${hostname}:${port}...`)
})

