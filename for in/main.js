const fruit = {
  apple: 200,
  orange: 100,
  strawberry: 150
}

let total = 0;
for (const key in fruit) {
  console.log(`${key}の値段は${fruit[key]}です`);
  total += fruit[key];
}
console.log(total);