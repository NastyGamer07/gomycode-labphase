// Time settings slider
document.addEventListener('DOMContentLoaded', function() {
    const gaugeSlider = document.getElementById('gaugeSlider');
    const thumbValue = document.getElementById('thumbValue');
    
    if (gaugeSlider && thumbValue) {
        function updateSliderValue() {
            const value = parseInt(gaugeSlider.value, 10);
            thumbValue.textContent = value;
            // Calculate the thumb position percentage
            const percent = (value - gaugeSlider.min) / (gaugeSlider.max - gaugeSlider.min) * 100;
            // Adjust the thumbValue position relative to the slider
            thumbValue.style.left = `calc(${percent}% - 15px)`; // Adjust -15px for centering
        }
        // Initialize the slider value position
        updateSliderValue();
        // Update the thumb value dynamically when the slider is moved
        gaugeSlider.addEventListener('input', updateSliderValue);
    } else {
        console.error('Slider or value display element not found.');
    }
});

// Begin quiz button
document.addEventListener('DOMContentLoaded', function () {
    const beginQuizBtn = document.getElementById('begin_quiz');
    const form = document.getElementById('calc_ulations');

    beginQuizBtn.addEventListener('click', function(event) {
        // Prevent form submission
        event.preventDefault();

        const attemptName = document.getElementById('atmpname').value;
        const noQuestions = document.getElementById('no_questions').value;
        const difficulty = document.getElementById('difficultySlider').value; // Capture difficulty
        const timeLimit = document.getElementById('gaugeSlider').value; // Capture time limit

        if (noQuestions && difficulty && timeLimit && attemptName) {
            // Pass the data to the new page via query parameters
            window.location.href = `/Quizfinit - Phase 4/quiz.templates/calc.quiz.html?noQuestions=${noQuestions}&difficulty=${difficulty}&timeLimit=${timeLimit}`;
        } else {
            alert('Please fill in all required fields.');
        }
    });
});