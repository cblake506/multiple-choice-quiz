var questionEl = $("#question");
var answerButton1 = $("#answer-1");
var answerButton2 = $("#answer-2");
var answerButton3 = $("#answer-3");
var answerButton4 = $("#answer-4");
var attemptNumber = 0;




var quizFields = [
    {
        question:"What does HTML stand for?",
        answer:[
            "<button id=\"correct\">correct</button>", 
            "<button id=\"wrong\">incorrect1</button>", 
            "<button id=\"wrong\">incorrect2</button>", 
            "<button id=\"wrong\">incorrect3</button>"]
    },
    {
        question:"Question2",
        answer:[
            "<button id=\"correct\">correct</button>", 
            "<button id=\"wrong\">incorrect1</button>", 
            "<button id=\"wrong\">incorrect2</button>", 
            "<button id=\"wrong\">incorrect3</button>"]
    }];



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

    let questionNum = [];
    //build an array of sequential indicies
    for(let i = 0; i < quizFields.length; i++){
        questionNum.push(i);
    }

    //shuffle the order of the questions
    questionNum = shuffle(questionNum);

    
    printQAndA(questionNum[attemptNumber]);

    var correctEl = $("#correct");
    var incorrectEl = $("#wrong");
    if(attemptNumber < quizFields.length){
        correctEl.on('click', startQuiz);
        incorrectEl.on('click', startQuiz);
    } else{
        return;
    }
}

answerButton1.append("<button>Start</button>");

answerButton1.contents().on('click', startQuiz);


