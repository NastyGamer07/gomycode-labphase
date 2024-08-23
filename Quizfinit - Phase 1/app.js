
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
        window.location.href = "/Quizfinit - Phase 1/quiz.templates/calc.quiz.html"
    }
})

