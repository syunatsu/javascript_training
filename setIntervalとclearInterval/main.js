let elapsedTime = 5;

function writeTime(){
  document.getElementById("time").textContent = "残り" + elapsedTime + "秒です";
}

const timerId = setInterval(function (){
  elapsedTime --;
  writeTime();
  if (elapsedTime === 0) {
    alert("時間です！");
    clearInterval(timerId);
  }
}, 1000);