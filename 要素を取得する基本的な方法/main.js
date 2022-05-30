// console.log(document.getElementById("test"));

// console.log(document.querySelector(".list li a"));

listElements = document.querySelectorAll(".list li a");

// document.querySelector(".list li a").textContent = "テスト";

for (i = 0; i < listElements.length; i ++) {
  listElements[i].textContent = `テスト${i + 1}`;
}

console.log(document.documentElement);

console.log(document.head);

console.log(document.body);