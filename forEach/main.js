const animal = ["犬", "猫", "牛", "馬", "うさぎ", "亀"],
      animalList = document.getElementById("animal");
// for (let i = 0; i < animal.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = animal[i];
//   animalList.appendChild(li);
// }

// animal.forEach(function(value) {
//   console.log(value);
// })

animal.forEach((value, i, array) => {
  const li = document.createElement("li");
  li.textContent = `${i+1}番目の動物は${animal[i]}です`;
  animalList.appendChild(li);
  if (i + 1 === array.length) {
    const liElement = document.createElement("li");
    liElement.textContent = "ループ終了";
    animalList.appendChild(liElement);
  }
})