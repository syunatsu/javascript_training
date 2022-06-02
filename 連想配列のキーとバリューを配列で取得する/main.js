const fruit = {
  apple: 100,
  orange: 200,
  strawberry: 150
}

//キーを取り出す
Object.keys(fruit).forEach((key) => {
  console.log(key);
})

//バリューを取り出す
Object.values(fruit).forEach(value => console.log(value))

//配列の中に配列を入れて返す
Object.entries(fruit).forEach(([key, value]) => console.log(key, value));