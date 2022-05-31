const item = {
  name: "パソコン",
  price: 100000,
  sale: true,
  parts: ["CPU", "メモリ", "HDD"],
  a: {
    b:"テスト"
  }
}

//書き換えるには
item["price"] = 200000;

document.getElementById("name").textContent = "商品名は" + item["name"] + "です";
document.getElementById("price").textContent = "値段は" + item.price + "円です";

//書き換えるには
item["sale"] = false;

if (item["sale"]) {
  document.getElementById("sale").textContent = item["name"] + "はセール中です";
}

let texts = '';
for (let i = 0; i < item.parts.length; i++) {
  texts += item.parts[i];
  if (i !== item.parts.length - 1) {
    texts += ".";
  }
}
document.getElementById("parts").textContent = "パソコンのパーツは" + texts + "です";

document.getElementById("test").textContent = item["a"]["b"];

console.table(item);