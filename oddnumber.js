var numberList=[13,17,22,134,141];
var oddNumbers=[];
(function(){
for (var x of numberList){
if(x%2==1){
    oddNumbers.push(x);
}
}
console.log(oddNumbers);
console.log(oddNumbers.join(" "));
})(numberList)

//Arrow Key functions

var oddNumber =(numberList)=> {
    var result = [];
    for (var i of numberList) {
        if (i%2==1) {
            result.push(i);
        }
    }
    return result;
}

console.log(numberList + " Odd number are " + oddNumber(numberList));
console.log(oddNumber([1,3,5,7,4,6,4,6,7]));