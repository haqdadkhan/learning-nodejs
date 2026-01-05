//! 1 ----- import required modules -----
const http = require('http')
const url = require('url')
const PORT = 3000

//! 2 ----- define the handler -----
const requestHandler = (req, res) => {
    console.log("Requested Method:",req.method)
    console.log("Requested URL:", req.url)

    // requested url
    const requestedUrl = url.parse(req.url, true)

    // send response
    if (requestedUrl.pathname == "/" && req.method == "GET") {
        res.writeHead(200, {"content-type":"text/plain"})
        res.end("Hellow, welcome to the homepage.")
    } else if (requestedUrl.pathname == "/about" && req.method == "GET") {
        res.writeHead(200, {"content-type":"json"})
        res.end("{'about': 'Welcome to about page'}")
    } else {
        res.writeHead(200, {"content-type": "text/plain"})
        res.end("404. Not Found...")
    }
}

//! 3 ----- create server -----
const server = http.createServer(requestHandler)

//! 4 ----- run server -----
server.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
