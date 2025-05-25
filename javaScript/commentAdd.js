const submitBTN = document.getElementById("submit");
submitBTN.addEventListener("click", function () {
  const inputFil = document.getElementById("textInpu");
  const inputFilText = inputFil.value;

  const comments = document.getElementById("comments");
  const newComment = document.createElement("p");
  newComment.classList.add("comment");
  newComment.innerText = inputFilText;


  comments.appendChild(newComment);
  // ai khane innerTest set kora jabe na karon aita ekta value 
  inputFil.value ='' ;
});
