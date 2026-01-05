//! 1 ----- import required modules -----
const http = require('http')
const url = require('url')
const PORT = 3000

//! 2 ----- define the handler -----
const requestHandler = (req, res) => {
    // pass the url
    const passedURL = url.parse(req.url, true)
    const pathname = passedURL.pathname

    // splitting and defining
    const pathComponent = pathname.split("/").filter(Boolean)
    console.log(pathComponent)

    const prodName = pathComponent[0]
    const prodID = pathComponent[1]

    // home route
    if (pathname == "/") {
        res.writeHead(200, { "content-type": "text/plain" })
        res.end("Welcome to HomePage...")
    }
    // products route
    else if (prodName && prodID) {
        res.writeHead(200, { "content-type": "text/plain" })
        res.end(`${prodName} ID: ${prodID}`)
    } else {
        res.writeHead(200, { "content-type": "text/plain" })
        res.end("Post not found...")
    }
}

//! 3 ----- create server -----
const server = http.createServer(requestHandler)

//! 4 ----- run server -----
server.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
