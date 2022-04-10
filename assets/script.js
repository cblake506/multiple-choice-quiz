var questionEl = $("#question");
var answerButton1 = $("#answer-1");
var answerButton2 = $("#answer-2");
var answerButton3 = $("#answer-3");
var answerButton4 = $("#answer-4");
var attemptNumber = 0;
var correctNum = 0;
var incorrectNum = 0;




var quizFields = [
    {
        question:"Commonly used datatypes do NOT include:",
        answer:[
            "<button class=\"correct\">alerts</button>", 
            "<button class=\"wrong\">booleans</button>", 
            "<button class=\"wrong\">strings</button>", 
            "<button class=\"wrong\">numbers</button>"]
    },
    {
        question:"The condition in an if/else statement is enclosed within:",
        answer:[
            "<button class=\"correct\">()</button>", 
            "<button class=\"wrong\">\"\"</button>", 
            "<button class=\"wrong\">{}</button>", 
            "<button class=\"wrong\">[]</button>"]
    },
    {
        question:"Arrays within javascript can be used to store:",
        answer:[
            "<button class=\"correct\">all of the above</button>", 
            "<button class=\"wrong\">other arrays</button>", 
            "<button class=\"wrong\">strings</button>", 
            "<button class=\"wrong\">numbers</button>"]
    },
    {
        question:"Strings in javascript can be enclosed inside ____:",
        answer:[
            "<button class=\"correct\">\"\"</button>", 
            "<button class=\"wrong\">()</button>", 
            "<button class=\"wrong\">{}</button>", 
            "<button class=\"wrong\">[]</button>"]
    }
];



function printQAndA(qNum){
    questionEl.append("<h1>" + quizFields[qNum].question + "</h1>");

    let arrNum = shuffle([0, 1, 2, 3]);

    answerButton1.append(quizFields[qNum].answer[arrNum[0]]); 
    answerButton2.append(quizFields[qNum].answer[arrNum[1]]);
    answerButton3.append(quizFields[qNum].answer[arrNum[2]]); 
    answerButton4.append(quizFields[qNum].answer[arrNum[3]]);
    
    attemptNumber++;
}

// Taken from Fischer-Yates array shuffle
function shuffle(arr) {
    let counter = arr.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }

    return arr;
}

function emptyButtons(){
    questionEl.contents().remove();
    answerButton1.contents().remove();
    answerButton2.contents().remove();
    answerButton3.contents().remove();
    answerButton4.contents().remove();
}

function startQuiz(){
    //clear out answer buttons
    emptyButtons();

    var correctEl = $(".correct");
    var incorrectEl = $(".wrong");
    if(attemptNumber < quizFields.length){
        printQAndA(questionNum[attemptNumber]);
        var correctEl = $(".correct");
        var incorrectEl = $(".wrong");

        correctEl.on('click', startQuizCorrect);
        incorrectEl.on('click', startQuizIncorrect);
    } else{
        emptyButtons();
        answerButton1.append("<div> Correct: " + correctNum + " Incorrect: " + incorrectNum + "</div>")
        return;
    }
}

function startQuizCorrect(){
    correctNum++;
    startQuiz();
}

function startQuizIncorrect(){
    incorrectNum++;
    startQuiz();
}

answerButton1.append("<button>Start</button>");

var questionNum = [];
// build an array of sequential indicies
for(let i = 0; i < quizFields.length; i++){
    questionNum.push(i);
}

// shuffle the order of the questions
questionNum = shuffle(questionNum);

answerButton1.contents().on('click', startQuiz);


