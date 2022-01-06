var numberList=[13,17,22,134,141];
var k =0;
var rotatedValues = (function(numberList,k){
     if (numberList.length <= k) {
        return;
    } 
    for (var i = 0; i < k; i++) {
        numberList.unshift(numberList.pop());
    }
     
console.log("Shifted "  + k + " Times " + numberList);
console.log(numberList.join(" "));
})

rotatedValues(numberList,k);
rotatedValues(numberList,k+1);
rotatedValues(numberList,k+2);
rotatedValues(numberList,k+3);
rotatedValues(numberList,k+4);
rotatedValues(numberList,k+5);

//Arrow Key functions

var rotateValues = (numbers,k)=>{
    if (numbers.length <= k) {
       return;
   } 
   for (var i = 0; i < k; i++) {
    numbers.unshift(numbers.pop());
   }
    return numbers;
 }

console.log("Shifted using arrow key "  + k + " Times " + rotateValues(numberList,k+2));


// rotatedValues(numberList,k+1);
// rotatedValues(numberList,k+2);
// rotatedValues(numberList,k+3);
// rotatedValues(numberList,k+4);
// rotatedValues(numberList,k+5);

 
