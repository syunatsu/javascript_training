const score = Math.floor(Math.random() * 20);
document.getElementById("score").textContent = score
//if文

if (score === 19) {
  document.getElementById("test").textContent = "スコアは20です"
} else if (score === 10) {
  document.getElementById("test").textContent = "スコアは10です"
} else {
  document.getElementById("test").textContent = "スコアは10でも20でもないです"
}