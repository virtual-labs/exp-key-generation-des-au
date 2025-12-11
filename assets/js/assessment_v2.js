"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const difficultyLevels = ["beginner", "intermediate", "advanced"];

  let difficulty = [];
  let questions = { all: myQuestions };

  const addEventListener_explanations = () => {
    let accordions = document.getElementsByClassName("accordion");
    Array.from(accordions).forEach((accordion) => {
      accordion.addEventListener("click", function () {
        accordion.classList.toggle("active");

        let panel = accordion.parentElement.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    });
  };

  const addEventListener_checkbox = () => {
    difficulty.forEach((diff) => {
      let cBox = document.getElementById(diff);
      if (!cBox) return;
      cBox.addEventListener("change", function () {
        if (cBox.checked) {
          if (difficulty.indexOf(diff) === -1) difficulty.push(diff);
        } else {
          difficulty.splice(difficulty.indexOf(diff), 1);
        }
        updateQuestions();
      });
    });
  };

  const populateQuestions = () => {
    let num = 0;
    myQuestions.forEach((currentQuestion) => {
      if (difficultyLevels.indexOf(currentQuestion.difficulty) === -1) {
        currentQuestion.difficulty = "beginner";
      }
      if (!(currentQuestion.difficulty in questions)) {
        questions[currentQuestion.difficulty] = [];
      }
      questions[currentQuestion.difficulty].push(currentQuestion);

      currentQuestion.num = num;
      num += 1;
    });

    if (Object.keys(questions).length > 2) {
      const dl = document.getElementById("difficulty-label");
      if (dl) dl.style.display = "flex";
      difficultyLevels.forEach((diff) => {
        if (!(diff in questions)) {
          return;
        }
        difficulty.push(diff);
        let checkbox = document.getElementById(diff);
        if (checkbox) {
          checkbox.checked = true;
          if (checkbox.parentElement) checkbox.parentElement.style.display = "flex";
        }
      });
    } else {
      difficultyLevels.forEach((diff) => {
        if (!(diff in questions)) {
          return;
        }
        difficulty.push(diff);
      });
    }
  };

  const checkDifficulties = (classlist) => {
    if (difficulty.length === Object.keys(questions).length - 1) return true;
    for (let i in difficulty) {
      if (classlist.contains(difficulty[i])) return true;
    }
    for (let i in difficultyLevels) {
      if (classlist.contains(difficultyLevels[i])) return false;
    }
    if (difficulty.indexOf("beginner") > -1) {
      return true;
    }
  };

  function updateQuestions() {
    const quiz = document.getElementById("quiz");
    if (!quiz) return;
    const qquestions = quiz.getElementsByClassName("question");
    for (let i = 0; i < qquestions.length; i += 1) {
      if (!checkDifficulties(qquestions[i].classList)) {
        qquestions[i].style.display = "none";
        if (qquestions[i].nextElementSibling)
          qquestions[i].nextElementSibling.style.display = "none";
      } else {
        qquestions[i].style.display = "block";
        if (qquestions[i].nextElementSibling)
          qquestions[i].nextElementSibling.style.display = "flex";
      }
    }
  }

  function showResults() {
    if (!quizContainer) return;
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;
    let totalNum = 0;

    myQuestions.forEach((currentQuestion) => {
      if (
        difficulty.indexOf(currentQuestion.difficulty) === -1 &&
        difficulty.length !== Object.keys(questions).length - 1
      )
        return;
      let questionNumber = currentQuestion.num;
      const answerContainer = answerContainers[questionNumber];
      if (!answerContainer) return;
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      totalNum++;

      if (userAnswer === currentQuestion.correctAnswer) {
        const correctAnswerElement = document.getElementById(
          "answer" + questionNumber.toString() + userAnswer
        );
        if (correctAnswerElement) correctAnswerElement.style.color = "lightgreen";

        numCorrect++;

        if (currentQuestion.explanations) {
          for (let answer in currentQuestion.answers) {
            let explanation = currentQuestion.explanations[answer];
            let explanationButton = document.getElementById(
              "explanation" + questionNumber.toString() + answer
            );
            if (explanationButton) {
              if (explanation) {
                if (explanationButton.parentElement && explanationButton.parentElement.nextElementSibling)
                  explanationButton.parentElement.nextElementSibling.innerHTML = explanation;
                explanationButton.style.display = "inline-block";
              } else {
                explanationButton.style.display = "none";
              }
            }
          }
        }
      } else if (userAnswer) {
        const wrongEl = document.getElementById(
          "answer" + questionNumber.toString() + userAnswer
        );
        if (wrongEl) wrongEl.style.color = "red";

        if (currentQuestion.explanations && userAnswer) {
          let explanation = currentQuestion.explanations[userAnswer];
          let explanationButton = document.getElementById(
            "explanation" + questionNumber.toString() + userAnswer
          );
          if (explanationButton) {
            if (explanationButton.parentElement && explanationButton.parentElement.nextElementSibling)
              explanationButton.parentElement.nextElementSibling.innerHTML = explanation;
            if (explanation) {
              explanationButton.style.display = "inline-block";
            } else {
              explanationButton.style.display = "none";
            }
          }
        }
      }
    });

    if (resultsContainer) resultsContainer.innerHTML = `Score: ${numCorrect} out of ${totalNum}`;
  }

  populateQuestions();
  addEventListener_explanations();
  addEventListener_checkbox();
  if (submitButton) submitButton.addEventListener("click", showResults);
});