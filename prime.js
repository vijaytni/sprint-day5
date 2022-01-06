var numberList=[13,17,22,134,141];
var primeNumber = [];
var primes=(function(){
    for(var x of numberList){
        for(let i = 2, s = Math.sqrt(x); i <= s; i++)
            if(x % i === 0) return false; 
            primeNumber.push(x);
    }
 }(numberList))
console.log(primeNumber);
 