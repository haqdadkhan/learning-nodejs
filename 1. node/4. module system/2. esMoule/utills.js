// exporting in EcmaScript JS (ESM)

//! 1 --- default export ---
//! 2 --- named export ---
//! 3 --- mixed export (default + named) ---
//! 4 --- export everything ---


//! 1 --- default export ---
export default function greet(name) {
    return `Hi ${name}`
}


//! 2 --- named export ---
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;


//! 3 --- mixed export (default + named) ---
// already done as exporting number 1 & 2


//! 4 --- export everything ---
// no need, just `import * as NAME from "./path"