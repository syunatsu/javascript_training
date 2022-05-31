//jsでcssを直接変更する

document.getElementById('box').style.opacity = '.8'

//タグに直接指定されているcssを消す

document.getElementById('box').style.width = '';

//複数指定

document.getElementById('box').style.cssText = 'width: 300px; font-size: 30px;'

// document.getElementById('box').style.cssText = '';

//タグに指定されているcssを取得する

console.log(document.getElementById('box').style.width)


console.log(window.getComputedStyle(document.getElementById('box')).display)
console.log(window.getComputedStyle(document.getElementById('box')).alignItems)
