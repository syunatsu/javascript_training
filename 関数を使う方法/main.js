const tax = 1.1;

function calculation(price) {
  return Math.floor(price * tax)
}

function insertText(itemPrice, element) {
  document.getElementById(element).textContent = itemPrice + "円の商品の税込み価格は" + calculation(itemPrice) + "円です";
}

insertText(100, "result");
insertText(200, "result2");
