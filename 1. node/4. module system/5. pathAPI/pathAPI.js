const path = require('path')

const dirName = path.dirname('/user/test/file.txt')
console.log('Directory Name: ', dirName)
console.log("--------------------------")

const fileName = path.basename('/user/test/file.txt')
console.log('File Name: ', fileName)
console.log("--------------------------")

const extName = path.extname('/user/test/file.txt')
console.log('Extension Name: ', extName)
console.log("--------------------------")

const joinedPath = path.join('/user/', '/test/', 'file.txt')
console.log('Joined Paths: ', joinedPath)
console.log("--------------------------")

const relovedPath = path.resolve('user', 'test', 'file.txt')
console.log('Resolved Path: ', relovedPath)
console.log("--------------------------")

const isAbs = path.isAbsolute('/user/test')
console.log('is Absolute? ', isAbs)
console.log("--------------------------")

const parsedPath = path.parse('/user/test/file.txt')
console.log('Parsed Path: ', parsedPath)
console.log("--------------------------")
