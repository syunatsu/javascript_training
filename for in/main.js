const fruit = {
  apple: 200,
  orange: 100,
  strawberry: 150
}

let total = 0;
for (const key in fruit) {
  total += fruit[key];
}
console.log(total); 

Object.keys(fruit).forEach(key => console.log(key))