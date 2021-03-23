// Functional hamburger menu with JS
// Define and store class selectors for easy access 
const mobileIcon = document.querySelector(`.menuIcon`);
const mobileMenu = document.querySelector(`.mobileNav`);

// Create function to unhide mobileMenu on click
// Make use of the toggle css class "hide"
mobileIcon.addEventListener(`click`, function() {
    mobileMenu.classList.toggle(`hide`);
});

// ----------------------------------

// Functional slideshow on Home page
// Define and store class selectors for easy access
const slides = document.getElementsByClassName(`homeImg2`);
const bullets = document.getElementsByClassName(`bullet`);
const previous = document.querySelector(`.arrowLeft`);
const next = document.querySelector(`.arrowRight`);

// Store the slide index into a variable
let slideNumber = 0;
const totalSlide = slides.length;

// When changing from one slide to the other,
// the current slide will become hidden and
// the active bullet will lose the "active" class
// The next slide will toggle the hidden property off
// and the next bullet will gain the "active" class
const focusSlide = () => {
    for (let slide of slides) {
        slide.classList.remove(`show`);
        slide.classList.add(`hide`);
    }
    for (let bullet of bullets) {
        bullet.classList.remove(`active`);
    }
    slides[slideNumber].classList.toggle(`hide`);
    bullets[slideNumber].classList.toggle(`active`);
}

// *NOTE TO SELF: totalSlide will console.log the number 3
// HOWEVER, slides is an array with index starting at 0

// Function to change slides backward and forward
// Backward: If slideNumber is less than 0
// slideNumber will become the last index of the slides
// Else, slideNumber will decrement by 1
const back = () => {
    if (slideNumber == 0) {
        slideNumber = totalSlide - 1;
    } else {
        slideNumber--;
    }
    focusSlide();
};

// Forward: If slideNumber is larger than totalSlide - 1 (= 2)
// Remember that it's array index that we are looking for
// slideNumber will be reset to 0 to restart the carousel
// Else, slideNumber will increment by 1
const forward = () => {
    if (slideNumber == totalSlide - 1) {
        slideNumber = 0;
    } else {
        slideNumber++;
    }
    focusSlide();
};

// Clicking on left & right arrows will change slide
// Also add the functions created above to this click event
previous.addEventListener(`click`, () => {
    back();
});
next.addEventListener(`click`, () => {
    forward();
});

// CREDITS: Making this carousel work involved A LOT of
// googling!!! But I think I should give the credits to
// this YTube video for the very easy to understand tutorial
// https://youtu.be/gor5BvT2z88