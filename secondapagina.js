const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// window.onload = function () {};

// let timer = 30;
// let interval;

// function startTimer() {
//   interval = setInterval(function () {
//     timer--;
//     document.getElementById("timer-text").innerHTML = timer;

//     if (timer === 0) {
//       clearInterval(interval);
//       console.log("Timer scaduto!");
//     }
//   }, 1000);
// }

// startTimer();

function shuffle(array) {
  // Per mescolare l'array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let score = 0;
let arrayAnswer = [];
let currentQuestionIndex = 0;

function displayQuestion() {
  const question = questions[currentQuestionIndex];

  document.querySelector(".tit1").innerHTML = question.question;

  const answersElement = document.getElementById("answers");
  answersElement.innerHTML = "";

  // function shuffle(array) {
  //   // Per mescolare l'array
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1))
  //     ;[array[i], array[j]] = [array[j], array[i]]
  //   }
  //   return array
  // }

  const answers = shuffle([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);

  function punteggio() {
    let risposte = document.querySelectorAll(".risposte");
    risposte.forEach((answer) => {
      answer.addEventListener("click", (event) => {
        arrayAnswer.push(event.target.textContent);
        console.log(arrayAnswer);
      });
    });
  }

  for (const answer of answers) {
    const answerButton = document.createElement("button");
    answerButton.innerText = answer;
    answerButton.classList = "risposte";
    answersElement.appendChild(answerButton);
  }

  punteggio();
}

const nextBtn = document.querySelector(".nextBtn");
nextBtn.addEventListener("click", () => {
  document.getElementById("numeroDomanda").textContent =
    currentQuestionIndex + 2;
  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    // alert("Hai completato tutte le domande!");
    document.querySelector(".nextBtn").textContent = "Vai ai risultati";
    document.getElementById("numeroDomanda").textContent = "10";
  } else if (currentQuestionIndex > questions.length) {
    for (let y = 0; y < questions.length; y++) {
      if (questions[y].correct_answer === arrayAnswer[y]) {
        score++;
      }
    }
    console.log(score);
    location.href = `./pag3.html?risposteGiuste=${score}&max=${questions.length}`;
  } else {
    displayQuestion();
  }
});
displayQuestion();
