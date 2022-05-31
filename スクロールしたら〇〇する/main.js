window.addEventListener("scroll", function() {
  let scroll = document.documentElement.scrollTop;
  document.getElementById('scrollValue').textContent = scroll;
  console.log(scroll);

  if (scroll > 300) {
    document.querySelector("main").classList.add("test");
  } else {
    document.querySelector("main").classList.remove("test");
  };
});