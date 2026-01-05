//! 1 ----- import required modules -----
const http = require('http')
const url = require('url')
const PORT = 3000

//! 2 ----- define the handler -----
// mimic database
const empDB = [
    { id: 1, name: "Ria" },
    { id: 2, name: "Ron" }
]

const requestHandler = (req, res) => {
    // split url & extract
    const { method, url } = req;
    const parts = url.split("/")
    console.log("PARTS:", parts)
    const route = parts[1]
    const empId = parts[2]

    //! home
    if (method === "GET" && url === "/") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end("Welcome to the Homepage.")
    }

    //! get all employees
    else if (method === "GET" && route === "employees" && !empId) {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(`All Employees: ${JSON.stringify(empDB)}`)
    }

    //! get single employee
    else if (method === "GET" && route === "employees" && empId) {
        // finding the employee
        const employee = empDB.find((emp) => emp.id == empId)

        // sending possible responses
        if (employee) {
            res.writeHead(200, { "content-type": "application/json" })
            res.end(`Employee : ${JSON.stringify(employee)}`)
        } else {
            res.writeHead(200, { "content-type": "text/plain" })
            res.end(`Employee not found with ID: ${empId}`)
        }
    }

    //! create a employee
    else if (method === "POST" && route === "employees") {
        let body = ""

        // listen to event
        req.on("data", (chunk) => body += chunk)

        // send req & res
        req.on("end", () => {
            let newEmp = JSON.parse(body)
            empDB.push(newEmp)

            res.writeHead(200, { "content-type":"application/json"})
            res.end(JSON.stringify(
                {
                    newEmployee: newEmp,
                    allEmployees: empDB
                }
            ))
        })
    }

    //! 404 error
    else if (method === "GET" && route !== "employees") {
        res.writeHead(200, { "content-type": "text/plain" })
        res.end("Page not Found...")
    }

}

//! 3 ----- create server -----
const server = http.createServer(requestHandler)

//! 4 ----- run server -----
server.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
