// children 子要素の取得
// firstElementChild 最初の子要素の取得
// lastElementChild 最後の子要素の取得

// nextElementSibling 次の兄弟要素の取得
// previousElementSibling 前の兄弟要素の取得

// parentNode 親要素の取得


const list = document.querySelector(".list li");

// console.log(list);
// console.log(list.children);
// for(i = 0; i < list.children.length; i ++) {
//   console.log(list.children[i]);
// }
// console.log(list.firstElementChild.nextElementSibling);
// console.log(list.lastElementChild.previousElementSibling);

console.log(list.parentNode.parentNode);