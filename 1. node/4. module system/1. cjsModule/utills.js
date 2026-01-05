// exporting in Common JS (CJS)

//! 1 --- single function export ---
//! 2 --- object export ---
//! 3 --- named function export ---
//! 4 --- using export shorthand ---


// //! 1 --- single function export ---
// const greet = (name) => `Hello! ${name}, How are u doing?`;
// module.exports = greet;


// //! 2 --- object export ---
// const obj = {
//     add: function add(a, b) { return a + b },
//     substract: function sub(a, b) { return a - b },
// }
// module.exports = obj;


// //! 3 --- multiple named function export ---
// module.exports.sayHi = (name) => `Hi ${name}`
// module.exports.sayBye = (name) => `Goodbye ${name}`


//! 4 --- shorthand export ---
exports.Hi = (name) => `Hi ${name}`
exports.Bye = (name) => `Goodbye ${name}`