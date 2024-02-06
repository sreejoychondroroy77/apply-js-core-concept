function multiplicationOfNumber(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum = sum * i;

    }
    return sum;
}

const yourNumber = multiplicationOfNumber(9);
console.log(yourNumber)