setInterval(function () {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  changeColor = document.getElementById("change");
  changeColor.style.color = "#" + randomColor;
}, 1000);