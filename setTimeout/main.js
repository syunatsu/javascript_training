// function test () {
//   console.log('test');
// }

// setTimeout(test, 3000);
// console.log('test2');


document.getElementById("test").addEventListener("click", function (){
  setTimeout(function (){
    document.getElementById("contents").style.display = "block";
  }, 3000);
});
 