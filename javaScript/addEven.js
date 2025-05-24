

const btn1 = document.getElementById("btn-1");
btn1.addEventListener("click", function redArea() {
  document.body.style.backgroundColor = "red";
});
const btn2 = document.getElementById("btn-2");
btn2.addEventListener('mouseover', function greenArea() {
  document.body.style.backgroundColor = "green";
})
const btn3 = document.getElementById("btn-3");
btn3.addEventListener('mousemove', function navyArea() {
  document.body.style.backgroundColor = "navy";
})