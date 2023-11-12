const quizData = [
  {
    question: "What is SpongeBob's last name?",
    options: ["3abdlawi", "bourass", "lhaycha", "SquarePants"],
    answer: "SquarePants",
  },
  {
    question: "Who is SpongeBob's best friend?",
    options: ["Patrick Star", "Lmtalaj", "walid lharachi", "3abd9a"],
    answer: "Patrick Star",
  },
  {
    question: "What is the name of SpongeBob's pet snail?",
    options: ["Gary", "9adour", "Mourad", "Farouk"],
    answer: "Gary",
  },
  {
    question: " What instrument does Squidward play?",
    options: ["Drbouka", "Manini", "Zmara", "Clarinet"],
    answer: "Clarinet",
  },
  {
    question: "Where does SpongeBob work?",
    options: ["Bouma3ti", "Chrarba", "The Krusty Krab", "sah tchou hada"],
    answer: "The Krusty Krab",
  },
];

const questionContainer = document.getElementById("question-container");
const optionsList = document.querySelector(".options");
const submitButton = document.getElementById("submit-button");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];

  questionContainer.innerText = currentQuizData.question;
  optionsList.innerHTML = "";

  currentQuizData.options.forEach((option) => {
    const li = document.createElement("li");
    li.innerText = option;
    li.addEventListener("click", selectOption);
    optionsList.appendChild(li);
  });
}

function selectOption(event) {
  const selectedOption = event.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedOption.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.innerText = `You scored ${score} out of ${quizData.length}!`;
  optionsList.innerHTML = "";
  submitButton.style.display = "none";
}

loadQuestion();
