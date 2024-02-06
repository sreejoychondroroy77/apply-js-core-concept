function getSumOfArray(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(sum)
    }
    return sum;

}
const myNumbers = [12, 23, 34, 45, 56, 67, 78];
getSumOfArray(myNumbers);