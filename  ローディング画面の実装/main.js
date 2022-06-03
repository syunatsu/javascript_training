function load (time) {
  setTimeout(() => {
    document.getElementById('loading').classList.remove(('active'));
  }, time);
}

window.addEventListener("load", function() {
  load(2000);
})

load(5000);