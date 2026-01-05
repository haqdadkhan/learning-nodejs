// console.log(process)

// ----- Accessing ENV -----
const appEnv = process.env.NODE_ENV || "Development";
console.log("App ENV is:", appEnv)

console.log("--------------------------")

// ----- .exit() -----
if (appEnv !== "Production") {
    console.log("It must run in Production!");

    // process.exit();
}

console.log("--------------------------")

// ----- Printing and Changing 'CWD' -----
console.log("Current Working Directory is:", process.cwd());

try {
    // changing CWD
    console.log("Changing CWD to:", process.chdir('/temp'));
    // printing CWD
    console.log("Changed CWD:", process.cwd());
} catch (error) {
    console.log(`Something bad happened: ${error}`);
}

console.log("--------------------------")
