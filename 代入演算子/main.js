let number = 10;
document.getElementById("button").addEventListener("click", function (){
  number+=3;
  document.getElementById("result").textContent = number;
});