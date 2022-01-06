var inputString="try new skills";
let processString = inputString.split(" ");
let capitalString = [];
(function(){
    for (let i in processString) {
        capitalString.push((processString[i] = processString[i][0].toUpperCase() + processString[i].slice(1)));
      }
     
console.log(inputString + " --- Converted to title --- " + capitalString);
console.log(capitalString.join(" "));
})(inputString)