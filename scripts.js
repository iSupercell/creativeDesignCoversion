// Functional hamburger menu with JS
// Define and store class selectors for easy access 
const mobileIcon = document.querySelector('.menuIcon');
const mobileMenu = document.querySelector('.mobileNav');

// Create function to unhide mobileMenu on click
// Make use of the toggle css class "hide"
mobileIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('hide');
});