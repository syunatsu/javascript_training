const today = new Date(),
      days = ["日", "月", "火", "水", "木", "金", "土"]

function outputDate(date) {
  let outputText = "「" + date.getFullYear() + "年";
  outputText += date.getMonth() + 1 + "月";
  outputText += date.getDate() + "日";
  outputText += date.getHours() + "時";
  outputText += date.getMinutes() + "分";
  outputText += date.getSeconds() + "秒";
  outputText += "(" + days[date.getDay()] + "曜日)";
  outputText += "」です";
  return outputText;
}


document.getElementById("date").textContent = "今は" + outputDate(today);

const targetDate = new Date(2023, 7, 23);
document.getElementById("countDown").textContent = 
"来年の7月23日まで" + Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24)) + "日";


today.setDate(today.getDate() + 1); //todayを再定義している
document.getElementById("tomorrow").textContent = "明日は" + outputDate(today);



