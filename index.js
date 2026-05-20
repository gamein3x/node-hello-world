const inputArray = process.argv;

let message = "";

/* 
if (inputArray.length > 3) {
    for (let i = 3; i < inputArray.length; i++) {
        const moreName = ` ${inputArray[i].toString()}`;
        message += moreName;
    }
} else if (inputArray.length === 3) {
    console.log(message)
} else if (inputArray.length < 3) {
    console.log('Ciao!')
}
*/

for (let i = 2; i < inputArray.length; i++) {
    const name = inputArray[i];

    if (i === 2) {
        message += `Ciao ${name}` ;
    } else {
        message += ` ${name}`
    }
}

console.log(`${message}!`);