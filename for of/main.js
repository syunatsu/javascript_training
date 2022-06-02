// for ofについて
// イテラブルなオブジェクト

const fruits = ["りんご", "バナナ", "みかん", "オレンジ"];
const list = document.getElementById("list");


for (value of fruits) {
// for (i = 0; i < fruits.length; i++) {
  const li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);
}

