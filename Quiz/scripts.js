//create questions database
const questions = [
    {
        question: "How many lessons are there in JS & JQuery book?",
        options: ["12", "13", "14"],
        answer: "13"
    },
    {
        question: "What is the ASCII code of 'a'?",
        options: ["00110001", "01000001", "01100001", "01100010"],
        answer: "01100001"
    },
    {
        question: "What is the Keycode of Enter key?",
        options: ["12", "13", "14", "15"],
        answer: "13"
    },
    {
        question: "How many events in FORM EVENTS?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "How many event types in Javascrpt?",
        options: ["6", "7", "8", "9"],
        answer: "6"
    },
    {
        question: "What type of loop will always execute at least once?",
        options: ["for", "while", "do while"],
        answer: "do while"
    },
    {
        question: "Which of the following HTTP status codes means 'Not Found'?",
        options: ["200", "403", "404", "500"],
        answer: "404"
    },
    {
        question: "Javascript object can have its own in ",
        options: ["Properties & variable", "function & Method & Events", "Properties & Events & Methods", "type & constanst static"],
        answer: "Properties & Events & Methods"
    },
    {
        question: "How many ways to create an object in Javascript ",
        options: ["2", "3", "4","5"],
        answer: "2"
    },
    {
        question: "Anonymous Functions  can call before implementation in Javascript ",
        options: ["Yes, can", "No, can't", "can since ES5", "can but ES6"],
        answer: "No, can't"
    },
    {
        question: "return from multiple elements selectors is  ",
        options: ["Element", "NodeList", "NodeMethod", "Id"],
        answer: "NodeList"
    },
    {
        question: "How many type of NodeList?  ",
        options: ["2", "3", "4", "5"],
        answer: "2"
    },
    {
        question: "How many ways to bind an event to an element?  ",
        options: ["2", "3", "7", "5"], 
        answer: "3"
    },
    {
        question: "Event listeners were introduced in  ",
        options: ["DOM", "DOM level2", "DOM level5", "DOM Level6"], 				
        answer: "DOM level2"
    },
    {
        question: "When users move out of the text input, it loses focus. This is called what event  ",
        options: ["change", "submit", "blur", "keyup"], 							
        answer: "blur"
    },
    {
        question: "If content come from any untrusted sources, what way should use to add html.  ",
        options: ["document.write()", "element.innerHTML", "element.textContent", "console.log()"], 											
        answer: "element.textContent"
    },
];

// initialize variables
let question_number = 0;
let correct = 0;
let frequency = 3;

//start questionary when document load
document.addEventListener("DOMContentLoaded", () => {
    restart();
});

function restart() {
    question_number = 0;
    correct = 0;
    originText=document.querySelector("#qTitle").innerHTML;
    document.querySelector("#qTitle").innerHTML=originText + '<span style="color: red;">  * </span>'  ;
    update_score_display();
    shuffleArray(questions);
    questions.forEach( question => {
        shuffleArray(question.options);
    });
    load_question();
}

function update_score_display() {
    document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;
}

//every after game, shuffle all questions & their choices
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//when restart question, reduce the frequency and show question & their options
function load_question() {
    if (question_number >= questions.length) {
        frequency--;
        prompt_restart();
        return;
    }
    
    //ask the question
    qNum=question_number+1;
    questionText='<h2>' + qNum + '.   '+ questions[question_number].question+ '</h2> ' ;
    document.querySelector("#question").innerHTML =questionText ;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
       
    }

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            if (option.innerHTML === questions[question_number].answer) {
                document.querySelector("#ansImg").innerHTML = '<img src="t.png"></img>';
                correct++;
            }else{
                document.querySelector("#ansImg").innerHTML = '<img src="f.png"></img>';
            }
            question_number++;

            update_score_display();

            load_question();
        }
    });
}
//finish one round, test the frequency and  if not full frequency, restart button appear. If full,  show Congratulations message.
function prompt_restart() {
    document.querySelector("#question").innerHTML = "Quiz done!";
    const options = document.querySelector("#options");
    if(frequency) {
        options.innerHTML = `<button onclick="restart()">Restart</button>`;
    } else {
        document.querySelectorAll("div")[1].innerHTML = `<h2>Thank you.</h2>`;
        options.innerHTML = `<h1>Congratulation!</h1>`;
    }
}


// shuffle questions and options each question


