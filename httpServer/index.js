const http = require('http')

const hostname = 'localhost'

const port = 3000

const server = http.createServer((req, res) => {
    const { url } = req
    
    console.log(url)
    if (url === "/translations") {
        const favoriteHobbies = {1: 'BJJ', 2: 'guitar', 3: 'coding'}
        res.setHeader('Content-Type', "application/json")

        res.write(JSON.stringify(favoriteHobbies))
        console.log(http.METHODS)
    }

   

    res.end()

})

server.listen(port, hostname, () => {
    console.log(`Server listening at ${hostname}:${port}...`)
})

