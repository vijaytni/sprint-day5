var inputString="try new skills mam";
let processString = inputString.split(" ");
let palindrome = [];
(function(){
  for (let i in processString) {
    if (processString[i].split("").reverse().join("") === processString[i]) {
      palindrome.push(processString[i]);
    }
  }
     
console.log(inputString + " --- palindrome --- " + palindrome);
console.log(palindrome.join(" "));
})(processString)