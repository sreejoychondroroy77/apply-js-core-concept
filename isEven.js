function odd_even(num) {
    const sum = num % 2;
    const final = sum == 0;
    return final;

}
const yourNum = odd_even(24);
console.log(yourNum);