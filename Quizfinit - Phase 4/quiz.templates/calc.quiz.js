let timeLimit = 10; // Default time limit in minutes
let timeRemaining = timeLimit * 60; // Convert minutes to seconds
let currentQuestionIndex = 0; // Track the current question index
let selectedQuestions = [];
let userAnswers = {}; // Store the user's answers


// Function to start the timer
function startTimer() {
    const timerElement = document.getElementById('timerDisplay');
    
    const interval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            alert('Time is up! Submitting your quiz...');
            submitQuiz();
        }

        timeRemaining--;
    }, 1000); // Update every second
}

// All questions pool
const allQuestions = [
    { 
        id: 'qts1', 
        text: 'The total age of three kids in a family is 27 years. What will be the total of their ages after three years?', 
        options: {a: '30 years', b: '36 years', c: '81 years', d: '39 years'},
        correctAnswer: 'b'
    },
    { 
        id: 'qts2', 
        text: 'Find the product of all the numbers present on the calculator pad.', 
        options: {a: '55', b:  '0', c: '45', d: '362,880'},
        correctAnswer: 'b'
    },
    { 
        id: 'qts3', 
        text: 'Solve: 5 * 5 + 3', 
        options: {a: '28', b: '25', c: '33', d: '35'},
        correctAnswer: 'a'
    },
    { 
        id: 'qts4', 
        text: 'Find the average of numbers 87, 84, 86, 90, 82, 88, 78.', 
        options: {a: '84', b: '78', c: '82', d: '85'},
        correctAnswer: 'd'
    },
    { 
        id: 'qts5', 
        text: 'The average age of A, B and C was 25 years and that of B and C was 25 years. As present age is?', 
        options: {a: '25 years', b: '27 years', c: '30 years', d: '24 years'},
        correctAnswer: 'a' 
    },
    { 
        id: 'qts6', 
        text: 'The Pythagoras Theorem is most recognized in which formula?', 
        options: {a: 'c^2 = b^2 - a^2', b: 'a^2 + b^2 = c^2', c: 'All of the above.', d: 'None of the above.'},
        correctAnswer: 'b'
    },
    { 
        id: 'qts7', 
        text: 'Which number is equivalent to 3^(4)÷3^(2)', 
        options: {a: '27', b: '2', c: '9', d: '12'},
        correctAnswer: 'c'
    },
    { 
        id: 'qts8', 
        text: 'Add 8.563 and 4.8292.', 
        options: {a: '13.3923', b: '12', c: '12.967', d: '13.3922'},
        correctAnswer: 'd'
    },
    { 
        id: 'qts9', 
        text: 'Which 3 numbers have the same answer whether they’re added or multiplied together?', 
        options: {a: '2, 4, 8', b: '1, 2, 3', c: '3, 5, 7', d: '1, 3, 5'},
        correctAnswer: 'b'
    },
    { 
        id: 'qts10', 
        text: 'There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?', 
        options: {a: '141', b: '730', c: '413', d: '321'},
        correctAnswer: 'a'
    },
    { 
        id: 'qts11', 
        text: 'Which of the following numbers is divisible by three?', 
        options: {a: '7542', b: '3647', c: '1273', d: '8587'},
        correctAnswer: 'a' 
    },
    { 
        id: 'qts12', 
        text: 'What is the correct order of operations?', 
        options: {a: 'brackets, order, addition, subtraction, multiplication, division', b: 'multiplication, division, brackets, order, addition, subtraction', c: 'addition, subtraction, multiplication, division, brackets, order', d: 'brackets, order, division, multiplication, addition, subtraction'},
        correctAnswer: 'd'
    },
    { 
        id: 'qts13', 
        text: 'What does the "O" in BODMAS stand for?', 
        options: {a: 'Operand', b: 'Operation', c: 'Order', d: 'Object'},
        correctAnswer: 'c'
    },
    { 
        id: 'qts14', 
        text: 'Evaluate 7!', 
        options: {a: '7', b: '0', c: '720', d: '5040'},
        correctAnswer: 'd' 
    },
    { 
        id: 'qts15', 
        text: 'If 5x + 3 = 52 - 2x find the value of 13x + 23', 
        options: {a: '144', b: '114', c: '142', d: '113'},
        correctAnswer: 'b'
    },
    { 
        id: 'qts16', 
        text: 'If the radius of a circle is 13m find its perimeter. (Take pie approximated to two decimal points)', 
        options: {a: '81.64cm', b: '81.66cm', c: '81.71cm', d: '82.00cm'},
        correctAnswer: 'a'
    },
    { 
        id: 'qts17', 
        text: 'How many sides does a dodecagon have?', 
        options: {a: '10', b: '13', c: '12', d: '9'},
        correctAnswer: 'c'
    },
    { 
        id: 'qts18', 
        text: 'Evaluate 3log10', 
        options: {a: '30', b: '10', c: '0', d: '3'},
        correctAnswer: 'd'
    },
    { 
        id: 'qts19', 
        text: 'A man makes $32k a year. "Two-third of his salary was cut" implies that?', 
        options: {a: 'He now earns two-third of his original salary.', b: 'He now earns two-third of his original salary less.', c: 'He now earns twice his original salary.', d: 'He now earns three times less his original salary.'},
        correctAnswer: 'b'
    },
    { 
        id: 'qts20', 
        text: 'Find the median and mode of the following set of numbers; respectfully: 1, 4, 5, 3, 4, 2, 1, 1, 3, 5.', 
        options: {a: '4,4', b: '3,5', c: '2,3', d: '3, 1'},
        correctAnswer: 'd' 
    },
];

// Function to parse URL query parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        // attemptName : parseInt(params.get('attemptName'), 10),
        noQuestions: parseInt(params.get('noQuestions'), 10),
        difficulty: params.get('difficulty'),
        timeLimit: parseInt(params.get('timeLimit'), 10)
    };
}

// Function to get a random selection of questions
function getRandomQuestions(num) {
    // Shuffle the questions
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    // Return only the first `num` questions
    return shuffled.slice(0, num);
}

// Function to display the current question
function displayQuestion(index) {
    const container = document.getElementById('quizContainer');
    container.innerHTML = ''; // Clear any existing content

    const question = selectedQuestions[index];
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `
        <p>${question.text}</p>
        <label><input type="radio" name="${question.id}" value="a" ${userAnswers[question.id] === 'a' ? 'checked' : ''}> ${question.options.a}</label><br>
        <label><input type="radio" name="${question.id}" value="b" ${userAnswers[question.id] === 'b' ? 'checked' : ''}> ${question.options.b}</label><br>
        <label><input type="radio" name="${question.id}" value="c" ${userAnswers[question.id] === 'c' ? 'checked' : ''}> ${question.options.c}</label><br>
        <label><input type="radio" name="${question.id}" value="d" ${userAnswers[question.id] === 'd' ? 'checked' : ''}> ${question.options.d}</label>
    `;
    container.appendChild(questionElement);
}

// Function to store the current answer
function storeAnswer() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const selectedOption = document.querySelector(`input[name="${currentQuestion.id}"]:checked`);
    if (selectedOption) {
        userAnswers[currentQuestion.id] = selectedOption.value;
    }
}

// Save the quiz results to local storage before redirection
function saveQuizResults() {
    localStorage.setItem('selectedQuestions', JSON.stringify(selectedQuestions));
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
}

// Function to handle quiz submission
function submitQuiz() {
    storeAnswer(); // Store the last answer before submission
    saveQuizResults(); // Save the quiz results
    const score = checkAnswers(selectedQuestions);
    const confirmation = confirm('Are you sure? Submission is final!');

    const results = {
        score: score,
        timeTaken: `${timeLimit - Math.floor(timeRemaining / 60)}:${60 - (timeRemaining % 60)}`
    };
   
    if (confirmation) {
        alert(`You scored ${score} out of ${selectedQuestions.length}. Time Taken: ${timeLimit - Math.floor(timeRemaining / 60)}:${60 - (timeRemaining % 60)}`);
        window.location.href = '/Quizfinit - Phase 4/results/quiz.results.html';
    }
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
    const params = getQueryParams();
    timeLimit = params.timeLimit || 10; // Set time limit from query params
    selectedQuestions = getRandomQuestions(params.noQuestions || 10); // Get questions based on settings
    timeRemaining = timeLimit * 60; // Reset timer with new limit

    startTimer();
    displayQuestion(currentQuestionIndex); // Display the first question

    document.getElementById('nextBtn').addEventListener('click', () => {
        storeAnswer(); // Save the current answer
        if (currentQuestionIndex < selectedQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex); // Display the next question
        }
        // Hide the next button if this is the last question
        if (currentQuestionIndex === selectedQuestions.length - 1) {
            document.getElementById('nextBtn').style.display = 'none';
        }
    });

    document.getElementById('previousBtn').addEventListener('click', () => {
        storeAnswer(); // Save the current answer
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex); // Display the previous question
        }
        // Show the next button again if it's not the last question
        if (currentQuestionIndex < selectedQuestions.length - 1) {
            document.getElementById('nextBtn').style.display = 'inline';
        }
    });

    document.getElementById('submitBtn').addEventListener('click', submitQuiz);
});