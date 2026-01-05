//! 1 ----- import required modules -----
const http = require('http')
const url = require('url')
const PORT = 3000

//! 2 ----- define the handler -----
const requestHandler = (req, res) => {
    // pass URL
    const passedURL = url.parse(req.url, true)
    const queryParams = passedURL.query

    console.log("Query Params are:", queryParams)

    // send response
    res.writeHead(200, { "content-type": "text/plain" })
    res.end("Welcome, enter this in the URL: '?laptop=lenovo&model=2025'")
}

//! 3 ----- create server -----
const server = http.createServer(requestHandler)

//! 4 ----- run server -----
server.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
