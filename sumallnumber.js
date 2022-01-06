var numberList=[13,17,22,134,141];
var sum=0;
(function(){
for(var x of numberList){
    sum=sum+x
}
console.log(numberList + " Sum of all number is " + sum)
}(numberList))