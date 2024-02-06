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
// getSumOfArray(myNumbers);

function getOddNumbersFromArray(numbers) {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            // console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 23, 34, 45, 56, 67, 78];
const oddNumbers = getOddNumbersFromArray(myNumbers);
console.log(oddNumbers);

const oddNumberSum = getSumOfArray(oddNumbers);
console.log('odd sum', oddNumberSum);

