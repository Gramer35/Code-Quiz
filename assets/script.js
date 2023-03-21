// Targeting ID's within HTML
const something = document.getElementById("time");
const startButton = document.getElementById("startBtn");
const opening = document.getElementById("opening");
const quizOpts = document.getElementById('questions');
const question = document.getElementById('question');
const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const ans4 = document.getElementById('ans4');
const answerCheck = document.getElementById('checkAns');
const initials = document.getElementById('initial-score');
const timeLeft = document.getElementById('timeLeft');
const highScore = document.getElementById('highscore');
const pushScore = document.getElementById('pushScore');
const addInitial = document.getElementById('addInitial');
const listOfHighScores = document.getElementById('list-of-highscores');
const tryAgain = document.getElementById('tryAgain');
const clearScores = document.getElementById('clearScores');
const viewScores = document.querySelector('a');
const backToMain = document.getElementById('back-to-main');

let index = 0;
let timer = ""

// Questions that quiz will reference
const quizQ = [
    {
        Question: "What color is the sky?",
        Options: ["A. Blue", "B. Green", "C. Yellow", "D. Brown"],
        Answer: "A. Blue",

    },
    {
        Question: "Why did the chicken cross the road?",
        Options: ["A. Who knows", "B. To get to the other side", "C. To get home", "D. To go to the market"],
        Answer: "B. To get to the other side",

    },
    {
        Question: "Who let the dogs out?",
        Options: ["A. Mom", "B. Dad", "C. Baha Men", "D. Justin Beiber"],
        Answer: "C. C",

    },
    {
        Question: "Where in the world is Carmen San Diego?",
        Options: ["A. Canada", "B. Philippines", "C. Antartica", "D. California"],
        Answer: "D. California",

    },
    {
        Question: "What is Detroit's NFL team?",
        Options: ["A. Bears", "B. Tigers", "C. Lions", "D. Oh My"],
        Answer: "C. Lions",

    },

];

// Function to handle when the game is over
function gameOver() {
    console.log('DONE!');
    quizOpts.style.display = 'none';
    initials.style.display = "block";
    timeLeft.textContent = timer;
    something.textContent = "Good job!";
};


// When we press the submit button - this will start the game
function startGame() {
    console.log('woweee');
    timer = 60;
    opening.style.display = 'none';
    viewScores.style.display = 'none';
    answerCheck.style.display = 'none';

    countdown();
    beginQuestions();

};

// Starts pushing out questions
function beginQuestions() {
    quizOpts.style.display = 'block';

    question.textContent = quizQ[index].Question;
    ans1.textContent = quizQ[index].Options[0];
    ans2.textContent = quizQ[index].Options[1];
    ans3.textContent = quizQ[index].Options[2];
    ans4.textContent = quizQ[index].Options[3];

};

// When a question is answered by the user, this function will check if it is right or wrong
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

// Each button is a function which sets off the check answer's for it's index
function pick1() { checkAns(0) };
function pick2() { checkAns(1) };
function pick3() { checkAns(2) };
function pick4() { checkAns(3) };

// the timer countdown which will be seen on the top right
function countdown() {

    const timeInt = setInterval(function () {
        if (index >= quizQ.length) {
            clearInterval(timeInt)
        } else if (timer > 0) {
            something.textContent = 'Time: ' + timer;
            timer--;
        } else if (timer === 0) {
            gameOver();
        };


    }, 1000)

};


// when the quiz is over, user is prompted to enter initials
function addScores(event) {
    event.preventDefault();
    // debugger;
    console.log('hello');

    if (addInitial.value === "") {
        alert("Please enter your initials!");
        return;
    };

    initials.style.display = 'none';
    highScore.style.display = "block";
    tryAgain.style.display = "inline-block";
    clearScores.style.display = "inline-block";
    backToMain.style.display = 'none';



    let storedHighScores = localStorage.getItem('high scores');
    var scoresArray;
    if (storedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(storedHighScores)
    };

    let userScore = {
        initials: addInitial.value,
        score: timer
    };

    console.log(userScore);
    scoresArray.push(userScore);
    console.log(scoresArray)

    let scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem('high scores', scoresArrayString);

    pullHighScores();
};

// Pulls stored quiz answers from local storage
function pullHighScores() {

    const storedHighScores = localStorage.getItem('high scores');

    if (storedHighScores === null) {
        return;
    }

    const savedHighScores = JSON.parse(storedHighScores)

    listOfHighScores.innerHTML = "";

    for (let i = 0; i < savedHighScores.length; i++) {
        let addNewScore = document.createElement('p');
        addNewScore.innerHTML = savedHighScores[i].initials + ": " + savedHighScores[i].score;
        listOfHighScores.appendChild(addNewScore);
        
    }
}



// Button for after initials are entered to go back to the start of the quiz
function goBack() {
    highScore.style.display = 'none';
    opening.style.display = 'flex';
    viewScores.style.display = 'flex';

    index = 0;
    timer = "";

    addInitial.value = '';
}

// Button to remove the scores from the local storage
function removeScores() {
    window.localStorage.removeItem('high scores');
    listOfHighScores.innerHTML = '';
}

// At the home screen - ability to see current high scores
function dispScores() {
    highScore.style.display = 'block';
    listOfHighScores.style.display = 'block';
    opening.style.display = 'none';
    tryAgain.style.display = 'none';
    clearScores.style.display = 'none';
    backToMain.style.display = 'inline-block';

    pullHighScores();

}

// When you are viewing highscores from the home screen, this button allows you to go back to the main screen
function toMain() {
    highScore.style.display = 'none';
    opening.style.display = 'flex';
}


// event listeners for each button on this quiz
startButton.addEventListener("click", startGame);
ans1.addEventListener("click", pick1);
ans2.addEventListener("click", pick2);
ans3.addEventListener("click", pick3);
ans4.addEventListener("click", pick4);
pushScore.addEventListener('click', addScores);
tryAgain.addEventListener('click', goBack);
clearScores.addEventListener('click', removeScores);
viewScores.addEventListener('click', dispScores);
backToMain.addEventListener('click', toMain);