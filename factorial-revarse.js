function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
        // console.log(i);
    }
    return result;
}
const giveHere = 5;
const yourNumber = factorial(giveHere);
console.log('factorial of  ;', giveHere, yourNumber);