let currentQuestion = 1; // Current Question
let easyProgressBar = document.querySelector(".easyProgress"); //Progress bar for easy quiz
let mediumProgressBar = document.querySelector(".mediumProgress"); //Progress bar for medium quiz
let hardProgressBar = document.querySelector(".hardProgress"); //Progress bar for hard quiz
let easyUserName = document.querySelector(".easyUserName"); // User for easy quiz
let mediumUserName = document.querySelector(".mediumUserName"); //Username for medium quiz
let hardUserName = document.querySelector(".hardUserName"); //User for hard quiz
let finaLastName = document.querySelector('#userName1'); // Last Name
let leaderName =document.getElementById("#User"); // Leaderboard usename
let easyBtn = document.querySelector("#easyBtn"); //Easy quiz start
let mediumBtn = document.querySelector("#mediumBtn"); //Medium quiz start
let hardBtn = document.querySelector("#hardBtn"); //Hard quiz start
let restartBtn = document.querySelector("#restartBtn");

let easyQuestionText = document.querySelector("#easyQuestionText"); // Easy Quiz question
let easyChoice1 = document.querySelector("#easyFirstAnswer"); //  Answer 1
let easyChoice2 = document.querySelector("#easySecondAnswer"); // Answer 2
let easyChoice3 = document.querySelector("#easyThirdAnswer"); // Answer 3
let easyChoice4 = document.querySelector("#easyFourthAnswer"); // Answer 4

let easyChoicesArr = [easyChoice1,easyChoice2,easyChoice3,easyChoice4];

let mediumQuestionText = document.querySelector("#mediumQuestionText"); // Medium Quiz question
let mediumChoice1 = document.querySelector("#mediumFirstAnswer"); // Answer 1
let mediumChoice2 = document.querySelector("#mediumSecondAnswer"); // Answer 2
let mediumChoice3 = document.querySelector("#mediumThirdAnswer"); // Answer 3
let mediumChoice4 = document.querySelector("#mediumFourthAnswer"); // Answer 4

let mediumChoicesArr = [mediumChoice1,mediumChoice2,mediumChoice3,mediumChoice4];


let hardQuestionText = document.querySelector("#hardQuestionText"); // Hard Quiz question
let hardChoice1 = document.querySelector("#hardFirstAnswer"); // Answer 1
let hardChoice2 = document.querySelector("#hardSecondAnswer"); // Answer 2
let hardChoice3 = document.querySelector("#hardThirdAnswer"); // Answer 3
let hardChoice4 = document.querySelector("#hardFourthAnswer"); // Answer 4

let hardChoicesArr = [hardChoice1,hardChoice2,hardChoice3,hardChoice4];


// Easy quiz start function
easyBtn.addEventListener("click", function () {
  let firstName = document.getElementById("FirstName").value;
  let lastName = document.getElementById("LastName").value;
  localStorage.setItem('FirstName', firstName);
  localStorage.setItem('LastName', lastName);
  easyUserName.innerHTML = firstName + " " + lastName;
  finaLastName.innerHTML = firstName + " " + lastName;
  document.querySelector("#startArea").hidden = true;
  document.querySelector(".easyQuizContainer").hidden = false;
});

// Medium quiz start function
mediumBtn.addEventListener("click", function () {
  let firstName = document.getElementById("FirstName").value;
  let lastName = document.getElementById("LastName").value;
  localStorage.setItem('FirstName', firstName);
  localStorage.setItem('LastName', lastName);
  easyUserName.innerHTML = firstName + " " + lastName;
  finaLastName.innerHTML = firstName + " " + lastName;
  document.querySelector("#startArea").hidden = true;
  document.querySelector(".mediumQuizContainer").hidden = false;
});
// Hard quiz start function
hardBtn.addEventListener("click", function () {
  let firstName = document.getElementById("FirstName").value;
  let lastName = document.getElementById("LastName").value;
  localStorage.setItem('FirstName', firstName);
  localStorage.setItem('LastName', lastName);
  easyUserName.innerHTML = firstName + " " + lastName;
  finaLastName.innerHTML = firstName + " " + lastName;
  document.querySelector("#startArea").hidden = true;
  document.querySelector(".hardQuizContainer").hidden = false;
});

document.querySelector('#restartBtn').addEventListener('click', function(){
  window.location.reload();
  return false;
});



 // Easy quiz timer
var count = 60;
var interval = setInterval(function(){
  document.getElementById('easyQuizTimer').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('').innerHTML='Done';
  }
}, 1000);



//Easy Questions
let easyQuestions = [
  {
    question:
      "what is x?",
    choices: ["&", "%", "$", "/"],
    correctAnswer: 3,
  },
  {
    question: "What color is an orange?",
    choices: [
      "Purple",
      "Orange",
      "An orange has no color. It's transparent.",
      "Don't know",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
    choices: [
      "Eight",
      "Three",
      "Two",
      "Six",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which racer holds the record for the most Grand Prix wins?",
    choices: [
      "Michael Schumacher",
      "Ralp Schumacher",
      "Lewis Hamilton",
      "Alain Prost",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What year was the very first model of the iPhone released",
    choices: [
      "2006",
      "2007",
      "2008",
      "2009",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "What was Twitter’s original name?",
    choices: [
      "twitty",
      "twitte",
      "twit",
      "twitter",
    ],
    correctAnswer: 3,
  },
];

 //Medium Questions
let mediumQuestions = [
  {
    question:
      "what is x?",
    choices: ["&", "%", "$", "/"],
    correctAnswer: 3,
  },
  {
    question: "What color is an orange?",
    choices: [
      "Purple",
      "Orange",
      "An orange has no color. It's transparent.",
      "Don't know",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
    choices: [
      "Eight",
      "Three",
      "Two",
      "Six",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which racer holds the record for the most Grand Prix wins?",
    choices: [
      "Michael Schumacher",
      "Ralp Schumacher",
      "Lewis Hamilton",
      "Alain Prost",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What year was the very first model of the iPhone released",
    choices: [
      "2006",
      "2007",
      "2008",
      "2009",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "What was Twitter’s original name?",
    choices: [
      "twitty",
      "twitte",
      "twit",
      "twitter",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "What is meteorology the study of",
    choices: [
      "Water",
      "Soil",
      "weather",
      "Space",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which natural disaster is measured with a Richter scale",
    choices: [
      "Tsunami",
      "Earthquake",
      "Landslide",
      "Hurricane",
    ],
    correctAnswer: 1,
  },
];

 //Hard Questions
 let hardQuestions = [
  {
    question:
      "what is x?",
    choices: ["&", "%", "$", "/"],
    correctAnswer: 3,
  },
  {
    question: "What color is an orange?",
    choices: [
      "Purple",
      "Orange",
      "An orange has no color. It's transparent.",
      "Don't know",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
    choices: [
      "Eight",
      "Three",
      "Two",
      "Six",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which racer holds the record for the most Grand Prix wins?",
    choices: [
      "Michael Schumacher",
      "Ralp Schumacher",
      "Lewis Hamilton",
      "Alain Prost",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What year was the very first model of the iPhone released",
    choices: [
      "2006",
      "2007",
      "2008",
      "2009",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "What was Twitter’s original name?",
    choices: [
      "twitty",
      "twitte",
      "twit",
      "twitter",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "What is meteorology the study of",
    choices: [
      "Water",
      "Soil",
      "weather",
      "Space",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which natural disaster is measured with a Richter scale",
    choices: [
      "Tsunami",
      "Earthquake",
      "Landslide",
      "Hurricane",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which planet has the most gravity",
    choices: [
      "Mars",
      "Saturn",
      "Jupiter",
      "Earth",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which animal can be seen on the Porsche logo",
    choices: [
      "Zebra",
      "Horse",
      "Dog",
      "Rhino",
    ],
    correctAnswer: 1,
  },
];
let index =0;

// Easy Question Chioices
easyQuestionText.innerHTML = easyQuestions[index]["question"];
easyChoice1.innerHTML = easyQuestions[index]["choices"][0];
easyChoice2.innerHTML = easyQuestions[index]["choices"][1];
easyChoice3.innerHTML = easyQuestions[index]["choices"][2];
easyChoice4.innerHTML = easyQuestions[index]["choices"][3];

let correctChoice = 0;
let wrongChoice = 0;

// Medium Question Chioices
mediumQuestionText.innerHTML = mediumQuestions[index]["question"];
mediumChoice1.innerHTML = mediumQuestions[index]["choices"][0];
mediumChoice2.innerHTML = mediumQuestions[index]["choices"][1];
mediumChoice3.innerHTML = mediumQuestions[index]["choices"][2];
mediumChoice4.innerHTML = mediumQuestions[index]["choices"][3];


// Hard Question Chioices
hardQuestionText.innerHTML = hardQuestions[index]["question"];
hardChoice1.innerHTML = hardQuestions[index]["choices"][0];
hardChoice2.innerHTML = hardQuestions[index]["choices"][1];
hardChoice3.innerHTML = hardQuestions[index]["choices"][2];
hardChoice4.innerHTML = hardQuestions[index]["choices"][3];





//Easy Quiz Next
let easyNextBtn = document.querySelector("#easyNextBtn");
easyNextBtn.addEventListener("click", function () {

  document.getElementById("Difficulty").innerHTML = "Easy";
  document.getElementById("Group").innerHTML = "Alpha";
  let firstName = document.start.firstName.value;
  let lastName = document.start.lastName.value;
  document.getElementById("User").innerHTML = firstName + " " +lastName;

  var easyChosenAnswer = document.getElementsByName('answer');
  for (var i = 0, length = easyChosenAnswer.length; i < length; i++) {
    if ( easyChosenAnswer[i].checked ) {
      console.log(easyChosenAnswer[i].value, easyQuestions[index]["correctAnswer"],);
      if( easyChosenAnswer[i].value == easyQuestions[index]["correctAnswer"] ) {
        correctChoice += 1;
        console.log("Correct Answer");
      }
      break;
    }
  }

  if (currentQuestion == 5) {
    document.querySelector(".easyQuizContainer").hidden = true;
    return showResult(correctChoice);
  } else if (currentQuestion == 4) {
    easyNextBtn.innerHTML = "Result";
  }
  currentQuestion += 1;
  index += 1;

  if (easyProgressBar != null) {
    easyProgressBar.value += 20;
  }

  document.getElementById ("easyQuestionNumber").innerHTML = "Question" + currentQuestion;

  easyQuestionText.innerHTML = easyQuestions[index]["question"];
  for (let i = 0; i < easyChoicesArr.length; i++) {
    easyChoicesArr[i].innerHTML = easyQuestions[index]["choices"][i];
  }
  
});


//Medium Quiz Next
let mediumNextBtn = document.querySelector("#mediumNextBtn");
mediumNextBtn.addEventListener("click", function () {


  document.getElementById("Difficulty").innerHTML = "Medium";
  document.getElementById("Group").innerHTML = "Beta";
  let firstName = document.start.firstName.value;
  let lastName = document.start.lastName.value;
  document.getElementById("User").innerHTML = firstName + " " +lastName;

  var mediumChosenAnswer = document.getElementsByName('answer');
  for (var i = 0, length = mediumChosenAnswer.length; i < length; i++) {
    if ( mediumChosenAnswer[i].checked ) {
      console.log(mediumChosenAnswer[i].value, mediumQuestions[index]["correctAnswer"],);
      if( mediumChosenAnswer[i].value == mediumQuestions[index]["correctAnswer"] ) {
        correctChoice += 2;
        console.log("Correct Answer");
      }
      break;
    }
  }

  if (currentQuestion == 8) {
    document.querySelector(".mediumQuizContainer").hidden = true;
    return showResult(correctChoice);
  } else if (currentQuestion == 7) {
    mediumNextBtn.innerHTML = "Result";
  }

  currentQuestion += 1;
  index += 1;

  if (mediumProgressBar != null) {
    mediumProgressBar.value += 12;
  }

  document.getElementById ("mediumQuestionNumber").innerHTML = "Question" + currentQuestion;

  mediumQuestionText.innerHTML = mediumQuestions[index]["question"];
  for (let i = 0; i < mediumChoicesArr.length; i++) {
    mediumChoicesArr[i].innerHTML = mediumQuestions[index]["choices"][i];
  }
});



//Hard Quiz Next
let hardNextBtn = document.querySelector("#hardNextBtn");
hardNextBtn.addEventListener("click", function () {

  document.getElementById("Difficulty").innerHTML = "Hard";
  document.getElementById("Group").innerHTML = "Gamma";
  let firstName = document.start.firstName.value;
  let lastName = document.start.lastName.value;
  document.getElementById("User").innerHTML = firstName + " " +lastName;

  var hardChosenAnswer = document.getElementsByName('answer');
  for (var i = 0, length = hardChosenAnswer.length; i < length; i++) {
    if ( hardChosenAnswer[i].checked ) {
      console.log(hardChosenAnswer[i].value, hardQuestions[index]["correctAnswer"],);
      if( hardChosenAnswer[i].value == hardQuestions[index]["correctAnswer"] ) {
        correctChoice += 3;
        console.log("Correct Answer");
      } else {
        wrongChoice += 1;
        correctChoice -= 1;
        console.log("Incorrect Answer");
      }
      break;
    }
  }

  if (currentQuestion == 10) {
    document.querySelector(".hardQuizContainer").hidden = true;
    return showResult(correctChoice);
  } else if (currentQuestion == 9) {
    hardNextBtn.innerHTML = "Result";
  }
  currentQuestion += 1;
  index += 1;

  if (hardProgressBar != null) {
    hardProgressBar.value += 10;
  }
  document.getElementById ("hardQuestionNumber").innerHTML = "Question" + currentQuestion;

  hardQuestionText.innerHTML = hardQuestions[index]["question"];
  for (let i = 0; i < hardChoicesArr.length; i++) {
    hardChoicesArr[i].innerHTML = hardQuestions[index]["choices"][i];
  }
});

let globaLastName = easyUserName.getAttribute("innerHTML");

//Result
function showResult(result) {
  document.getElementById("resultArea").hidden = false;
  document.getElementById("totalScore").innerHTML =
     " You Obtained " + result + " Points! Congratulations";
     document.getElementById("Points").innerHTML = 
     result;
}

//Leader Board
function leaderBoard() {
  document.getElementById("resultArea").hidden = true;
  document.getElementById("leaderBoard").hidden = false;
  let FirstName = localStorage.getItem('FirstName');
  let LastName = localStorage.getItem('LastName');
  document.getElementById("User").innerHTML = FirstName + " " + LastName;
}
