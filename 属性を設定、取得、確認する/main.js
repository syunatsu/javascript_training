//JSで属性を設定

// 設定 setAttribute
// 取得 getAttribute
// 確認 hasAttribute

document.querySelectorAll("ul li a ").forEach(element => {
  if (element.getAttribute('href') !== '/') {
    element.setAttribute('target', '_blank')
  }
  // element.setAttribute('target', '_blank')
  // console.log(element.getAttribute('href'))
  // console.log(element.hasAttribute("class"))
})