var questionEl = $("#question");
var answerButton1 = $("#answer-1");
var answerButton2 = $("#answer-2");
var answerButton3 = $("#answer-3");
var answerButton4 = $("#answer-4");



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


printQAndA(0);
