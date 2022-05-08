let questionIndex = 0


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
      answers: [
        "Node.js",
        "TypeScript",
        "npm",
        "vpn"
      ],
      correctAnswer: 2
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: [
        "Angular",
        "jQuery",
        "RequireJS",
        "ESLint"
      ],
      correctAnswer: 3
    }
  ];


const main = document.getElementById("main")
const intro = document.getElementById("Question-section")
const startButton = document.getElementById("startButton")
var Timervalue = 60

startButton.addEventListener("click",startGame)

function startGame(){
    console.log("hello")
    intro.remove();
    startTimer();
    renderQuestionSection();
    
}
function startTimer() {
  var timeInterval = setInterval(function () {
    if (Timervalue > 0) {
      console.log (Timervalue + ' seconds remaining');
      Timervalue--;
      const timee11 = document.getElementById("timer1");
      timee11.textContent = Timervalue
      
    }
        else {
    console.log("game Over") 
   clearInterval(timeInterval);
  }

  }, 1000);
    }


function renderQuestionSection() {

  console.log("renderquestion")

  const currentQuestion = questions[questionIndex];

 const questSec = document.createElement("section");
 questSec.setAttribute("class", "questionSec");
 questSec.setAttribute("id", "questionCon");
 


 const timersec = document.createElement("section");
 timersec.setAttribute("class","timerSection" );

  
 const timerTex = document.createElement("div");
 timerTex.setAttribute("class", "timeRtext");
 timerTex.textContent = "Time Remainig";

 const timerVal = document.createElement("div");
 timerVal.setAttribute("class", "timerbox");
 timerVal.setAttribute("id", "timer1");
 

 const qbox = document.createElement("section");
qbox.setAttribute("class","qbox" );

 
const questionB = document.createElement("div");
questionB.setAttribute("class","question" );
questionB.textContent = `${questionIndex + 1}. ${currentQuestion.question}`;

const ul = document.createElement("ul");
ul.setAttribute("class", "options");


const li1 = document.createElement("li");
li1.setAttribute("data-value", currentQuestion.answers[0]);
  li1.textContent = currentQuestion.answers[0];

const li2 = document.createElement("li");
li2.setAttribute("data-value", currentQuestion.answers[1]);
  li2.textContent = currentQuestion.answers[1]

const li3 = document.createElement("li");
li3.setAttribute("data-value", currentQuestion.answers[2]);
li3.textContent = currentQuestion.answers[2]

const li4 = document.createElement("li");
li4.setAttribute("data-value", currentQuestion.answers[3]);
li4.textContent = currentQuestion.answers[3]

ul.append(li1,li2,li3,li4);

timersec.append(timerTex,timerVal);


qbox.append(questionB,ul);

questSec.append(timersec,qbox);
questSec.addEventListener("click", handleoptionclick);
main.append(questSec)



console.log(Timervalue)
          
}



function handleoptionclick(event) {
  // console.log("clciked someher in sec")
  const target = event.target;
    
   if(target.tagName === "LI"){
     const value = target.getAttribute("data-value"); 
     console.log(value)   
    if (questionIndex < questions.length - 1){
       questionIndex +=1;
       document.getElementById("questionCon").remove();
       renderQuestionSection();
 
   } else{
    document.getElementById("questionCon").remove();
   // reder submission
   }}
};




