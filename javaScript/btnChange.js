const updateBTN = document.getElementById("textUp");
updateBTN.addEventListener("click", function updateText() {
  const h1Text = document.getElementById("textH1");
  h1Text.innerText = "upToDate This World";
});

// button diye name change kora

const SubBTN = document.getElementById("submitName");
SubBTN.addEventListener("click", function () {
  const inputFile = document.getElementById("input");
  const inputValue = inputFile.value;
  // console.log(inputValue);

  const nameH2 = document.getElementById("nameH2");
  nameH2.innerText = inputValue;
});
