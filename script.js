// Easter Egg Click Counter
let clickCount = 0;

const clickCountDisplay = document.getElementById('click-count');
const easterEggButton = document.getElementById('easter-egg-button');

easterEggButton.addEventListener('click', function() {
  clickCount++;
  clickCountDisplay.textContent = `You clicked ${clickCount} times`;
});
