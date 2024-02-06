function getsum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum)

    }
    return sum;
}


function getOddOfanArray(numbers) {
    const oddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumber.push(element)
        }

    }
    return oddNumber;
}

const mynumber = [12, 23, 34, 45, 56, 67]
// getsum(mynumber);
const oddNumbers = getOddOfanArray(mynumber);
