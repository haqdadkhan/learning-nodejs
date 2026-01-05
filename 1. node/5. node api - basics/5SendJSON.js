//! 1 ----- import required modules -----
const http = require('http')
const url = require('url')
const PORT = 3000

//! 2 ----- define the handler -----
const requestHandler = (req, res) => {
    // dummy data
    const data = {
        id: 123,
        name: "Ria",
        email: "ria@gmail.com"
    }

    // set header & send response
    res.setHeader("Content-Type", "application/json")
    res.end(`User: ${JSON.stringify(data)}`)

}

//! 3 ----- create server -----
const server = http.createServer(requestHandler)

//! 4 ----- run server -----
server.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
