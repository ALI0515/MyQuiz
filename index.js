const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hypotext Markup Language",
        b: "Hypertext Markup Language",
        c: "Hypotext Makeup Language",
        d: "Hypotext Makeup Language",
        ans: "ans2"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets ",
        b: "Cascading Style sheep",
        c: "Cartoon Style Sheets",
        d: "none",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypotext transfer product",
        b: "Hypertext Transfer Product",
        c: "Hypertext Transfer Protocol",
        d: "Hypotext Transfer Protocol",
        ans: "ans3"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "Java Score",
        b: "Java Style",
        c: "Jaboc Script",
        d: "Java Script",
        ans: "ans4"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadquestion = () =>{
    question.innerHTML = quizDB[questionCount].question;
    option1.innerHTML = quizDB[questionCount].a;
    option2.innerHTML = quizDB[questionCount].b;
    option3.innerHTML = quizDB[questionCount].c;
    option4.innerHTML = quizDB[questionCount].d;
}

loadquestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked)
        answer = curAnsElem.id;

        
    });
     return answer;
}
const deselctAll = () => {
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    deselctAll();
      if(questionCount < quizDB.length)
      {
       loadquestion();   
      }
      else{
          showScore.innerHTML = `
              <h3> You scored ${score}/${quizDB.length}
              <button class = "btn" onclick = "location.reload()">Play Again</button>
          `;
          showScore.classList.remove('scoreArea');
      }
});