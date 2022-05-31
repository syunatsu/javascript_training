//Number型
//String型

let input = document.getElementById("input").textContent;
console.log(typeof input);
// input = Number(input);
// console.log(typeof input);
document.getElementById("output").textContent = Number(input) + 1000 + "です";
