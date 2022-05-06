const questions = [
    {
      question: "Who invented JavaScript?",
      answers: [
         "Douglas Crockford",
        "Sheryl Sandberg",
        "Brendan Eich",
        "Sandberg Douglas"
      ],
      correctAnswer: 2
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: ""
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];
var Timervalue = 10

const main = document.getElementById("main")
const startButton = document.getElementById("startButton")


var timeRemainingsection = document.createElement("div");
timeRemainingsection.setAttribute("style", "display:flex;");

var timeRemaining = document.createElement("div");
timeRemaining.textContent = "Time Remaining : ";
timeRemaining.setAttribute("style", "font-size: xx-large; text-align:left;");

var timeRemainingvalue = document.createElement("div");
timeRemainingvalue.setAttribute("style", "font-size: xx-large; text-align:left;");

var Qandmain = document.createElement ("div")
//Qandmain.textContent = qheading optionList
//var qheading = document.createElement("h2")
//var optionList = document.createElement("ul")




startButton.addEventListener("click",startGame)

function startGame(){
    console.log("hello")
    renderQuestionSection();
    startTimer();
}

function renderQuestionSection() {

  console.log("renderquestion")

  const main2 = document.createElement("main")
  main2.setAttribute("class", "questionSec")

 const timsec = document.createElement("section")
 timsec.setAttribute("class","timerSection" )

 
            
}


function startTimer() {
    main.remove();
    helloHeading.remove();
    rules.remove();
    startButton.remove();
    QuestionSection.appendChild(timeRemaining);
    QuestionSection.appendChild(timeRemainingvalue);
    //qheading.appendChild("hello");
    //QuestionSection.createElement("h1");
    //QuestionSection.textContent("title for question")



    var timeInterval = setInterval(function () {
      if (Timervalue > 0) {
        console.log (Timervalue + ' seconds remaining');
        Timervalue--;
        timeRemainingvalue.innerHTML= Timervalue ;}
          else {
      console.log("game Over") 
     clearInterval(timeInterval);
    }

    }, 1000);
      }


