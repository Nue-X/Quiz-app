const quizData = [
    {
        question: "What was Meta Platforms Inc formerly known as?",
        a: "Twitter",
        b: "Facebook",
        c: "Instagram",
        d: "Whatsapp",
        correct: "b"
    }, {
        question: "The logo for luxury car maker Porsche features which animal?",
        a: "Dog",
        b: "Lion",
        c: "Horse",
        d: "Panther",
        correct: "c"
    }, {
        question: "Which element is said to keep bones strong?",
        a: "Calcium",
        b: "Sodium",
        c: "Potassium",
        d: "Thorium",
        correct: "a"
    }, {
        question: "What does CIA stand for?",
        a: "Center for Iterns Agency",
        b: "Central Information Association",
        c: "Central Intelligence Agnecy",
        d: "Cry In Agony",
        correct: "c"
    }, {
        question: "Suriname is located on which continent?",
        a: "North America",
        b: "South America",
        c: "Asia",
        d: "Europe",
        correct: "b"
    }
]
const Answers = []

const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submit = document.getElementById('submit')
const options = document.querySelectorAll('input[name=options]')
const check = document.getElementById('check')
const theList = document.getElementById("the-list")



window.onload = function(){
    loadQuiz()
}

let checker = 0;
let score = 0
let answer;

submit.addEventListener('click', () => {
    answer = quizData[currentQuizData].correct
    checker++
    options.forEach((option)=>{
        if (option.checked){
            if (option.id === answer){
                score++
                console.log(score)
            }
            console.log(option.id)
            Answers.push(option.id)
            isSelected()     
        } 
    })
    if (checker != Answers.length){
        check.innerHTML = "Please select an option";
        checker--
    }
})
 
let currentQuizData = 0
 
function isSelected(){ 
    currentQuizData++;
    if (currentQuizData < quizData.length){
        loadQuiz();
    } else {
        submit.innerHTML = "Finished&check;"
        submit.style.cursor = "auto"
        check.innerHTML = "Click to view score&rarr;"
        check.style.cursor = "pointer"

        check.addEventListener('click', () => {
            scoreSheet()
        })
    }
}

function deselectAll(){
    options.forEach((option) => {
        option.checked = false
        check.innerHTML = ""
    })
}

function loadQuiz(){
    deselectAll()
    const getQuizData = quizData[currentQuizData]
    questionEl.innerHTML = getQuizData.question;
    a_text.innerHTML = getQuizData.a
    b_text.innerHTML = getQuizData.b
    c_text.innerHTML = getQuizData.c
    d_text.innerHTML = getQuizData.d
}

function scoreSheet(){
    options.forEach((option) => {
        option.style.display = "none" 
    })
    a_text.style.display = "none"
    b_text.style.display = "none"
    c_text.style.display = "none"
    d_text.style.display = "none"

    questionEl.innerHTML = `Score: ${score}`

    for (let i = 0; i < Answers.length; i++){
        if (Answers[i] === quizData[i].correct){
            theList.innerHTML += `<li> <span class = "correct">${Answers[i]}</span> ${quizData[i][Answers[i]]} <span class = "correct">&#x2714; </span> </li>`
            
        } else {
            theList.innerHTML += `<li> <span class = "wrong">${Answers[i]}</span> ${quizData[i][Answers[i]]} <span class = "wrong">&#x2718;</span> </li>`
        }
       
    }

    check.innerHTML = ""

    if (score > 4){
        submit.innerHTML = "Good Job!"
    } else if (score > 3){
        submit.innerHTML = "Great work"
    } else if (score >= 2){
        submit.innerHTML = "Try Harder"
    } else if (score >= 0){
        submit.innerHTML = "You can do better"
    }
}
