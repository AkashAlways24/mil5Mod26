function redArea() {
  document.body.style.backgroundColor = "red";
}
function greenArea() {
  document.body.style.backgroundColor = "green";
}
function navyArea() {
  document.body.style.backgroundColor = "navy";
}

const btn1 = document.getElementById("btn-1");
btn1.onclick = redArea;

const btn2 = document.getElementById("btn-2");
btn2.onclick = greenArea;

const btn3 = document.getElementById("btn-3");
btn3.onclick = navyArea;
