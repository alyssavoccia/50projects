const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// Determines what step the progress bar is on
let currentActive = 1;

// Event listener for the next button
next.addEventListener('click', () => {
  // Increments the current active variable by 1
  currentActive++;

  // Checks to see if the currentactive variable is greater than length of circles
  if(currentActive > circles.length) {
    // If it is greater, sets the length equal to the length of circles
    currentActive = circles.length;
  }

  // Calls function to update the DOM
  update();
});

// Event listener for the previous button
prev.addEventListener('click', () => {
  // Decrements the currentactive variable by 1
  currentActive--;

  // Checks to make sure that the variable doesn't go lower than 1
  if(currentActive < 1) {
    currentActive = 1;
  }

  // Calls function to update the DOM
  update();
});

// Function to update the DOM
function update() {
  // Loop through the circles to determine whether or not to add the active class
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Creates nodelist of all elements with the active class
  const actives = document.querySelectorAll('.active');
  // Updates the width property of the progress bar depending on the # of active circles
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // Determine whether or not to disable prev/next buttons
  // If the currentActive value is 1 - the prev button is disabled
  if (currentActive === 1) {
    prev.disabled = true;
    // If the currentActive value is equal to the circles length value, next is disabled
  } else if (currentActive === circles.length) {
    next.disabled = true;
    // If counter is in the middle, both buttons are active
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}