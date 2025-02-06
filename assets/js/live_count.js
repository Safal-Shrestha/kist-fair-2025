let currentCount = 0;
const targetCount = 250;
const visitorElement = document.querySelector('.live-count-number');

function animateVisitorCount() {
  if (currentCount <= targetCount) {
    visitorElement.textContent = currentCount;
    visitorElement.style.animation = 'increaseCount 0.5s ease-out';
    currentCount++;
    setTimeout(animateVisitorCount, 500);
  } else {
    visitorElement.textContent = targetCount;
  }
}

window.onload = function () {
  animateVisitorCount();
}