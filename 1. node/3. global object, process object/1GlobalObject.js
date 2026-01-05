// console.log(global)

console.log("This is DIR_NAME:", __dirname)
console.log("This is FILE_NAME:", __filename)

console.log("--------------------------")

// ----- using "setInterval" and "clearInterval" -----
let count = 0;

const selfInterval = setInterval(() => {
    count++;
    console.log("Count is:", count)

    if (count === 3) {
        clearInterval(selfInterval);
    }
}, 1500)

selfInterval;

console.log("--------------------------")
