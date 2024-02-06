const myInch = 12;
const myFeet = myInch / 12;
console.log(myFeet);

const dataInch = 144;
const dataFeet = dataInch / 12;
console.log('Data Feet', dataFeet)

function inchToFeet(inchs) {
    const feet = inchs / 12;
    return feet;
}
var yourFeet = inchToFeet(24);
console.log(yourFeet)

const nanaInch = 132;
const nanaFeet = inchToFeet(nanaInch);
console.log('nanas feet', nanaFeet)