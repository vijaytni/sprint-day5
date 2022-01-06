var numberList=[13,17,4,7,22,134,17,7,8,22,141];
var oddNumbers=[];
(function (numbers) {
    let uniqueNumbers = [];
    for (let i in numbers) {
        if (uniqueNumbers.indexOf(numbers[i]) === -1) {
            uniqueNumbers.push(numbers[i]);
        }
    }
    console.log(uniqueNumbers);
    // console.log(uniqueNumbers.reverse());
    // console.log(uniqueNumbers.sort().join(" "));


})(numberList)


var uniqueNumber = (numbers) => {
    let uniqueNumbers1 = [];
    for (let j in numbers) {
        if (uniqueNumbers1.indexOf(numbers[j]) === -1) {
            uniqueNumbers1.push(numbers[j]);
        }
    }
        return uniqueNumbers1;
}

console.log(numberList + " Unique numbers are " + uniqueNumber(numberList));
console.log(uniqueNumber([1,3,5,7,4,6,4,6,7]));