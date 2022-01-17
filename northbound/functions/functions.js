//using selectors inside the element
const questions = document.querySelectorAll(".list");

questions.forEach(function (question) {
  const btn = question.querySelector(".list-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});