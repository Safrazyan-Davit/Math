let questionElem = document.getElementById("question");
let answerInput = document.getElementById("answerInput");
let resultElem = document.getElementById("result");
let correctCountElem = document.getElementById("correctCount");
let wrongCountElem = document.getElementById("wrongCount");
let submitBtn = document.getElementById("submitBtn");

let correctCount = 0;
let wrongCount = 0;
let questionCount = 0;
let num1, num2, correctAnswer;
const maxQuestions = 10;

function generateQuestion() {
    if (questionCount < maxQuestions) {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.ceil(Math.random() * 10) ;
        correctAnswer = num1 + num2;
        questionElem.textContent = `${num1} + ${num2} = ?`;
        answerInput.value = "";
    } else {
        endGame();
    }
}

function endGame() {
    questionElem.textContent = "Խաղն ավարտված է!";
    answerInput.style.display = "none";
    submitBtn.textContent = "Նոր խաղ";
    submitBtn.onclick = resetGame;
}

function checkAnswer() {
    let userAnswer = answerInput.value.trim(); // Убираем пробелы

    if (userAnswer === "" || isNaN(userAnswer)) {
        resultElem.textContent = "Խնդրում ենք մուտքագրել թիվ։";
        resultElem.style.color = "orange";
        return;
    }

    userAnswer = Number(userAnswer);

    if (userAnswer === correctAnswer) {
        resultElem.textContent = "Ճիշտ է ✅";
        resultElem.style.color = "green";
        correctCount++;
    } else {
        resultElem.textContent = "Սխալ ❌";
        resultElem.style.color = "red";
        wrongCount++;
    }

    correctCountElem.textContent = correctCount;
    wrongCountElem.textContent = wrongCount;
    questionCount++;

    setTimeout(generateQuestion, 1000);
}

function resetGame() {
    correctCount = 0;
    wrongCount = 0;
    questionCount = 0;
    correctCountElem.textContent = "0";
    wrongCountElem.textContent = "0";
    resultElem.textContent = "";
    answerInput.style.display = "block";
    submitBtn.textContent = "Ստուգել";
    submitBtn.onclick = checkAnswer;
    generateQuestion();
}

submitBtn.onclick = checkAnswer;
generateQuestion();
