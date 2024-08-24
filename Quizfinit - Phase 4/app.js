// Signup Form
document.addEventListener('DOMContentLoaded', function() {
    const signUpBtn = document.getElementById('btn_signup');
    const signupForm = document.getElementById('signup_form');
    const closeSignUpBtn = document.querySelector('.close_signup');
    const signUpForm = document.getElementById('sign_up')

    // Toggling sign up form
    signUpBtn.onclick = function() {
        signupForm.style.display = 'block';
    };
    closeSignUpBtn.onclick = function() {
        signupForm.style.display = 'none';
    };

    // Sign up submission
    signUpForm.addEventListener('submit_signup', function (event) {
        // Getting user form
        const userName = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confPassword = document.getElementById('password').value;

        const user = {
            username: userName,
            email: email,
            password: password,
            confPassword: confPassword,
        };

        // Saving form
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        // Save the updated users array to localStorage
        modal.style.display = 'none';
        mainContent.style.display = 'block';
    })
})

// // Login Form
// document.addEventListener('DOMContentLoaded', function() {
//     const loginBtn = document.getElementById('btn_login');
//     const logInForm = document.getElementById('login_form');
//     const closeLoginBtn = document.querySelector('.close_login');
//     const loginForm = document.getElementById('loginForm');
//     const loggedInContent = document.getElementById('loggedInContent');


//     // Toggling login form.
//     loginBtn.onclick = function () {
//         logInForm.style.display = 'block';
//     };
//     closeLoginBtn.onclick = function () {
//         logInForm.style.display = 'none';
//     };

//     // Login retrieval
//     loginForm.addEventListener('submit_login', function (event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Get login form values
//         const loginUsername = document.getElementById('loginUsername').value;
//         const loginPassword = document.getElementById('loginPassword').value;

//         // Retrieve users from localStorage
//         const users = JSON.parse(localStorage.getItem('users')) || [];

//         // Check if the entered credentials match any saved user
//         const matchedUser = users.find(user => user.username === loginUsername && user.password === loginPassword);

//         if (matchedUser) {
//             // Successful login
//             alert(`Welcome back, ${matchedUser.username}!`);
//             loginModal.style.display = 'none';
//             loggedInContent.style.display = 'block';
//         } else {
//             // Failed login
//             alert('Invalid username or password. Please try again.');
//         }
//     });
// })

// Login Form
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('btn_login');
    const logInForm = document.getElementById('login_form');
    const closeLoginBtn = document.querySelector('.close_login');
    const loginForm = document.getElementById('loginForm');
    const loggedInContent = document.getElementById('loggedInContent');

    // Toggling login form
    loginBtn.onclick = function () {
        logInForm.style.display = 'block';
    };
    closeLoginBtn.onclick = function () {
        logInForm.style.display = 'none';
    };

    // Login retrieval
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get login form values
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the entered credentials match any saved user
        const matchedUser = users.find(user => user.username === loginUsername && user.password === loginPassword);

        if (matchedUser) {
            // Successful login
            alert(`Welcome back, ${matchedUser.username}!`);
            localStorage.setItem('currentUser', matchedUser.username); // Store username
            logInForm.style.display = 'none';
            loggedInContent.style.display = 'block';
        } else {
            // Failed login
            alert('Invalid username or password. Please try again.');
        }
    });
});

// Navbar Links
document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('#abtLink')
    const abtSection = document.querySelector(".about_section")
    const homeLink = document.querySelector('#homeLink')
    const homeSection = document.querySelector(".section")
    const dashboardLink = document.querySelector('#dashboardLink')
    const dashboardSection = document.querySelector(".empty")
    const contactLink = document.querySelector('#contactLink')
    const contactSection = document.querySelector(".contact_section")

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        abtSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    });
  
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        homeSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    });

    dashboardLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        dashboardSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    });
  
    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    });
    const calcBtn = document.querySelector('.card_btn')
    calcBtn.onclick = function() {
        window.location.href = "/Quizfinit - Phase 4/modes/mathematics.html"
    }
})

// Scoreboard (Non-function for now)
// document.addEventListener('DOMContentLoaded', function() {
//     const user = ''; // Replace this with the actual logged-in user ID
//     const userResults = JSON.parse(localStorage.getItem('userResults')) || {};
//     const results = userResults[user] || [];

//     // Sort results by score in descending order
//     results.sort((a, b) => b.score - a.score);

//     const container = document.querySelector('.dash_card_container');
//     const personalDashCard = document.getElementById('personal_dash_card');
    
//     // Clear existing content
//     personalDashCard.innerHTML = `
//         <h1 class="card_title">Personal Standing</h1>
//         <ol class="dash_card_standings">
//             ${results.map(result => `
//                 <li>${result.name} [ ${result.timeTaken} ] [ ${result.score} ]</li>
//             `).join('')}
//         </ol>
//     `;
// });