// create variables to target id's
const something = document.getElementById("#time");
const startButton = document.getElementById('#startBtn');
const quizOptions = document.getElementById('#quiz');

let timer = ""

// Questions need to be in an array of objects or in HTML? - [0, 1, 2, 3, 4]
const quizQ = [
    {
        Question: "????",
        Options: ["A. Answer", "B. Answer", "C. Answer", "D. Answer"],
        Answer: "A. Answer",

    },
    {
        Question: "????",
        Options: ["A. Answer", "B. Answer", "C. Answer", "D. Answer"],
        Answer: "B. Answer",

    },
    {
        Question: "????",
        Options: ["A. Answer", "B. Answer", "C. Answer", "D. Answer"],
        Answer: "C. Answer",

    },
    {
        Question: "????",
        Options: ["A. Answer", "B. Answer", "C. Answer", "D. Answer"],
        Answer: "D. Answer",

    },
    {
        Question: "????",
        Options: ["A. Answer", "B. Answer", "C. Answer", "D. Answer"],
        Answer: "C. Answer",

    },

];

// Create function to handle highscores/local storage
function gameOver() {
    
};


// Create function when submit is selected - needs to start the timer along with push the first question out
function startGame(){
    console.log('woweee');
    // timer = 60;
    // countdown();
    // beginQuestions();

};

// Create function that will push the first question out and continue to move through questions when selection is made
function beginQuestions() {
    console.log('woweee');

};


// Create function that will handle the countdown - remove 10 second when answer is wrong - once count down hits 0, needs to determine what to do. Also handle what happens when answers are answered before countdown hits 0
function countdown() {

    const timeInt = setInterval(function () {
        if (timer > 0) {
            something.textContent = 'Time: ' + timer;
            timer--;
        } else if (timer === 0) {
            gameOver();
        }

    })

};


// Create a function that will keep track of score/right/wrong answers




// Create function to clear after quiz completed and highscore entered. Be able to reset back to the submit section. 


// Creating an event listener to start the game
startButton.addEventListener('click', startGame);