const numbers = [10, 20, 40, 60, 100];
console.log(numbers)
// console.log(numbers.reduce((prev, current) => {
//   return prev + current
// }))

// console.log(numbers.reduceRight((prev, current) => {
//   return prev + current / numbers.length
// }))

const lang = ["html", "css", "js", "sass", "php"];
console.log(lang.reduce((prev, current) => {
  console.log('prev:', prev);
  console.log('current:', current);
  return `${prev}, ${current}`;
}))