// create variables to target id's
const something = document.getElementById("time");
const startButton = document.getElementById("startBtn");
const opening = document.getElementById("opening");
const quizOpts = document.getElementById('questions');
const question = document.getElementById('question');
const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const ans4 = document.getElementById('ans4');
let index = 0;
const answerCheck = document.getElementById('checkAns');

let timer = ""

// Questions need to be in an array of objects or in HTML? - [0, 1, 2, 3, 4]
const quizQ = [
    {
        Question: "What is A",
        Options: ["A. A", "B. B", "C. C", "D. D"],
        Answer: "A. A",

    },
    {
        Question: "What is B",
        Options: ["A. A", "B. B", "C. C", "D. D"],
        Answer: "B. B",

    },
    {
        Question: "What is C??",
        Options: ["A. A", "B. B", "C. C", "D. D"],
        Answer: "C. C",

    },
    {
        Question: "What is D",
        Options: ["A. A", "B. B", "C. C", "D. D"],
        Answer: "D. D",

    },
    {
        Question: "What is C again",
        Options: ["A. A", "B. B", "C. C", "D. D"],
        Answer: "C. C",

    },

];

// Create function to handle highscores/local storage
function gameOver() {

};


// Create function when submit is selected - needs to start the timer along with push the first question out
function startGame() {
    console.log('woweee');
    timer = 60;
    opening.style.display = 'none';

    countdown();
    beginQuestions();

};

// Create function that will push the first question out and continue to move through questions when selection is made
function beginQuestions() {
    quizOpts.style.display = 'block';

    question.textContent = quizQ[index].Question;
    ans1.textContent = quizQ[index].Options[0];
    ans2.textContent = quizQ[index].Options[1];
    ans3.textContent = quizQ[index].Options[2];
    ans4.textContent = quizQ[index].Options[3];

};

function checkAns(answer) {
    if (quizQ[index].Answer === quizQ[index].Options[answer]) {
        answerCheck.style.display = 'block';
        answerCheck.textContent = 'Correct!!'
    } else {
        timer -= 10;
        something.textContent = timer;
        answerCheck.style.display = 'block';
        answerCheck.textContent = 'Wrong! The correct answer was ' + quizQ[index].Answer;

    }

    index++;

    if (index < quizQ.length) {
        beginQuestions();
    } else {
        gameOver();
    }

};

function pick1() { checkAns(0) };
function pick2() { checkAns(1) };
function pick3() { checkAns(2) };
function pick4() { checkAns(3) };


// Create function that will handle the countdown - remove 10 second when answer is wrong - once count down hits 0, needs to determine what to do. Also handle what happens when answers are answered before countdown hits 0
function countdown() {

    const timeInt = setInterval(function () {
        if (timer > 0) {
            something.textContent = 'Time: ' + timer;
            timer--;
        } else if (timer === 0) {
            gameOver();
        }

    }, 1000)

};


// Create a function that will keep track of score/right/wrong answers




// Create function to clear after quiz completed and highscore entered. Be able to reset back to the submit section. 


// Creating event listeners for things clicked
startButton.addEventListener("click", startGame);
ans1.addEventListener("click", pick1);
ans2.addEventListener("click", pick2);
ans3.addEventListener("click", pick3);
ans4.addEventListener("click", pick4);