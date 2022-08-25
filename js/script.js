// SELECTORS FROM HTML
console.log(this);

var beginButton = document.querySelector(".begin-btn");
var userQuiz = document.querySelector(".quiz");
var userQuestion = document.querySelector(".question");
var theAnswer = document.querySelector("#answer");
var userOption = document.querySelector("#option");
var optionOne = document.querySelector(".button-1");
var optionTwo = document.querySelector(".button-2");
var optionThree = document.querySelector(".button-3");
var optionFour = document.querySelector(".button-4");
var highScore = document.querySelector(".high-score")
var finalScore = document.querySelector("#userScore");
var list = document.querySelector("#list-score");
var userInput = document.querySelector(".initial-input");
var userTime = document.querySelector("#timer");
var userSave = document.querySelector(".save-btn");
var restartBtn = document.querySelector(".restart-btn")
var hideHeader = document.querySelector(".hide-header");
var userHighScore = document.querySelector(".score");

// GLOBAL
var timer = 40;
var userAnswer;
var currentQuestion = 0;
var nextQuestion;

// LOCAL STORAGE
//  = localStorage.getItem ("current-score")
//  = localStorage.getItem ("current-highscore");


// QUESTIONS OF ARRAYS

var theQuestions = [
    {question: "Arrays in Javascript can be used to store _______." ,
    optionA: "numbers and strings",
    optionB: "other arrays",
    optionC: "booleans",
    optionD: "all of the above",
    rightAnswer: "all of the above" },

    {question: "String values must be enclosed within ______ when being assigned to variables." ,
    optionA: "commas",
    optionB: "curly brackets", 
    optionC: "quotes", 
    optionD:"parenthesis",
    rightAnswer: "curly brackets" },

    {question: "A very useful took used during development and debugging for printing content to the debugger is:",
    optionA: "Javascript",
    optionB: "terminal/bash",
    optionC: "for loops",
    optionD: "console.log",
    rightAnswer: "for loops" },

    {question: "Commonly used data types DO not include:",
    optionA: "strings",
    optionB: "booleans",
    optionC: "alerts",
    optionD: "numbers",
    rightAnswer: "booleans" },

    {question: "The condition in an if / else statement is enclosed with _______.",
    optionA: "quotes",
    optionB: "curly brackets",
    optionC: "parenthesis",
    optionD: "square brackets",
    rightAnswer: "parenthesis",
}]
console.log(theQuestions);


// TIMER
function setTime () {
    var countDown = setInterval(function() {
        timer--
        userTime.textContent = timer;
            if (timer === 0) (
                clearInterval(countDown)
            )
          }, 1000);
}

// START GAME
beginButton.addEventListener("click" , startGame);
function startGame () {
    console.log ("started");
    beginButton.setAttribute("style" , "display: none");
    hideHeader.setAttribute("style" , "display: none");
    setTime();
    setNextQuestion ();
}

//  HIDE OPTIONS AND SCORE
userOption.setAttribute("style" , "display: none");
userInput.setAttribute("style" , "display: none");

// DISPLAY QUESTIONS AND OPTIONS
function setNextQuestion () {
    userQuiz.setAttribute("style" , "display: block");
    userOption.setAttribute("style" , "display: block");

    userQuestion.textContent=theQuestions[currentQuestion].question;
    optionOne.textContent=theQuestions[currentQuestion].optionA;
    optionTwo.textContent=theQuestions[currentQuestion].optionB;
    optionThree.textContent=theQuestions[currentQuestion].optionC;
    optionFour.textContent=theQuestions[currentQuestion].optionD;
}

// RIGHT ANSWER
userOption.addEventListener("click" , correctAnswer)
function correctAnswer(event) {
var currentCorrectAnswer = theQuestions[currentQuestion].rightAnswer;
    if (event.target.matches("button") ){
  
      if (event.target.textContent === currentCorrectAnswer){
        console.log("correct");
        theQuiz();
      } else {
        console.log("incorrect");
        timer = timer - 5;
        theQuiz();
      }
    }
  }

//  NEXT QUESTION
function theQuiz (){
    if (currentQuestion < 4){
        currentQuestion++;
        console.log("increase question count");
        setNextQuestion();
    }
    else {
        console.log("no more questions");
        endGame();
    }
}



function endGame () {
    userInput.setAttribute("style" , "display: flex");
    userQuiz.setAttribute("style" , "display: none");
    finalScore.textContent = timer;
}


function viewScore() {
    userInput.setAttribute("style" , "display: none");
    highScore.setAttribute("style" , "display: block");
    hideHeader.setAttribute("style" , "display: none");
    var userlist = localStorage.getItem ("timer");
    var userInitials = localStorage.getItem ("initials");
    var userList1 = document.createElement("li");
    var userInitials1 = document.createElement("li");
    userList1.textContent = userlist;
    userInitials1.textContent = userInitials;
    console.log(userlist);
    console.log(userInitials);

    list.appendChild(userList1);
    list.appendChild(userInitials1);
    console.log("score");
}
userHighScore.addEventListener("click" , viewScore);

userSave.addEventListener("click" , saveScore);

function saveScore (event){
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    localStorage.setItem ("initials" ,  initials);
    localStorage.setItem("timer" , timer);

    viewScore();

    console.log("help");
}

