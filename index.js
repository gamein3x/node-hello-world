const inputArray = process.argv;

let message = `Ciao ${inputArray[2]}`;

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
