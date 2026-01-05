//! it must require the file extension & will destruct if named
// import greet, { add, sub } from "./utills.js";

// //! 1 --- default export call ---
// console.log(greet('Agnes'));


// //! 2 --- named export call ---
// console.log(`Addition: ${add(2, 3)}, Substraction: ${sub(4, 7)}`)


//! 3 --- mixed export (default + named) call ---
// already done as importing number 1 & 2

//! 4 --- import everything call ---
import * as utills from "./utills.js"
console.log(utills.add(5, 9));
console.log(utills.sub(5, 9));