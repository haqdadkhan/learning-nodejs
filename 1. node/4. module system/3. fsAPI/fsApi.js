const fs = require('fs');

// //! 1 --- create/write file content ---
// fs.writeFile('./new.txt', "Some new content. ", (error) => {
//     if (error) {
//         console.error;
//         return;
//     } else {
//         console.log('content has been written')
//     }
// })


// //! 2 --- read file content ---
// // synchronus way
// const dataBuffer = fs.readFileSync('./sample.txt')
// const data = dataBuffer.toString()
// console.log(data)

// // asynchronus way
// fs.readFile('./sample.txt', 'utf-8', (error, content) => {
//     if (error) {
//         console.log("file doesn't exist", error)
//         return;
//     } else {
//         console.log(content)
//     }
// })


// //! 3 --- update/append file content ---
// fs.appendFile('./new.txt', "Appended content 2. ", (error) => {
//     if (error) {
//         console.error
//     } else {
//         console.log('content has been appended')
//     }
// })


// //! 4 --- check if file exists ---
// fs.access('new.txt', fs.constants.F_OK, (error) => {
//     if (error) {
//         console.log("file doesn't exist: ", error);
//         return;
//     } else {
//         console.log('file exists')
//     }
// })


// //! 5 --- delete/erase file content ---
// fs.unlink('./new.txt', (error) => {
//     if (error) {
//         console.log("file doesn't exist: ", error)
//         return;
//     } else {
//         console.log("file has been deleted")
//     }
// })



//! 6 --- using promises and async/await ---
const fs2 = require('fs/promises')
const readFileContent = async () => {
    try {
        const data = await fs2.readFile('./sample.txt', 'utf-8')
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}
readFileContent()
