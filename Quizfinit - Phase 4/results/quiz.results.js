let currentQuestionIndex = 0; // Track the current question index
let selectedQuestions = []; // Array to store the questions
let userAnswers = {}; // Store the user's answers

// Function to get the quiz results data from local storage or session
function getQuizResults() {
    const storedQuestions = localStorage.getItem('selectedQuestions');
    const storedAnswers = localStorage.getItem('userAnswers');

    if (storedQuestions && storedAnswers) {
        selectedQuestions = JSON.parse(storedQuestions);
        userAnswers = JSON.parse(storedAnswers);
    } else {
        alert('No quiz results found!');
        window.location.href = '/Quizfinit - Phase 4/quiz.templates/calc.quiz.html';
    }
}

// Function to display the current question and answer
function displayQuestion(index) {
    const container = document.getElementById('quizContainer');
    container.innerHTML = ''; // Clear any existing content

    const question = selectedQuestions[index];
    const userAnswer = userAnswers[question.id];
    const isCorrect = userAnswer === question.correctAnswer;

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `
          <p>${question.text}</p>
        <label class="${userAnswer === 'a' ? 'user-answer' : ''}">
            <input type="radio" name="${question.id}" value="a" ${userAnswer === 'a' ? 'checked' : ''} disabled>
            ${question.options.a}
            ${userAnswer === 'a' ? (isCorrect ? '<span class="correct-answer"> (Correct)</span>' : '<span class="incorrect-answer"> (Incorrect)</span>') : ''}
        </label><br>
        <label class="${userAnswer === 'b' ? 'user-answer' : ''}">
            <input type="radio" name="${question.id}" value="b" ${userAnswer === 'b' ? 'checked' : ''} disabled>
            ${question.options.b}
            ${userAnswer === 'b' ? (isCorrect ? '<span class="correct-answer"> (Correct)</span>' : '<span class="incorrect-answer"> (Incorrect)</span>') : ''}
        </label><br>
        <label class="${userAnswer === 'c' ? 'user-answer' : ''}">
            <input type="radio" name="${question.id}" value="c" ${userAnswer === 'c' ? 'checked' : ''} disabled>
            ${question.options.c}
            ${userAnswer === 'c' ? (isCorrect ? '<span class="correct-answer"> (Correct)</span>' : '<span class="incorrect-answer"> (Incorrect)</span>') : ''}
        </label><br>
        <label class="${userAnswer === 'd' ? 'user-answer' : ''}">
            <input type="radio" name="${question.id}" value="d" ${userAnswer === 'd' ? 'checked' : ''} disabled>
            ${question.options.d}
            ${userAnswer === 'd' ? (isCorrect ? '<span class="correct-answer"> (Correct)</span>' : '<span class="incorrect-answer"> (Incorrect)</span>') : ''}
        </label>    
    `;
    container.appendChild(questionElement);
}

// Function to show the final score
function showScore() {
    const score = checkAnswers(selectedQuestions);
    document.getElementById('scoreDisplay').textContent = `You scored ${score} out of ${selectedQuestions.length}.`;
}

// Function to check the answers
function checkAnswers(questions) {
    let score = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.correctAnswer) {
            score++;
        }
    });
    return score;
}

// Main logic that runs on page load
document.addEventListener('DOMContentLoaded', function() {
    getQuizResults(); // Get the quiz results from local storage or session
    displayQuestion(currentQuestionIndex); // Display the first question
    showScore(); // Display the final score

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentQuestionIndex < selectedQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex); // Display the next question
        }
        // Hide the next button if this is the last question
        if (currentQuestionIndex === selectedQuestions.length - 1) {
            document.getElementById('nextBtn').style.display = 'none';
        }
        // Show the previous button if it's not the first question
        if (currentQuestionIndex > 0) {
            document.getElementById('previousBtn').style.display = 'inline';
        }
    });

    document.getElementById('previousBtn').addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex); // Display the previous question
        }
        // Show the next button again if it's not the last question
        if (currentQuestionIndex < selectedQuestions.length - 1) {
            document.getElementById('nextBtn').style.display = 'inline';
        }
        // Hide the previous button if it's the first question
        if (currentQuestionIndex === 0) {
            document.getElementById('previousBtn').style.display = 'none';
        }
    });

    document.getElementById('retakeBtn').addEventListener('click', () => {
            window.location.href = '/Quizfinit - Phase 4/modes/mathematics.html';
        
    });
});


