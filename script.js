     document.addEventListener('DOMContentLoaded', init);
      
      function init() {
          const txtElement = document.querySelector('.txt-type');
          const words = JSON.parse(txtElement.getAttribute('data-words'));
          const wait = txtElement.getAttribute('data-wait')
          new TypeWriter(txtElement, words, wait);
      }
      
      const darkModeToggle = document.getElementById('darkModeToggle');
      darkModeToggle.addEventListener('change', () => {
          document.body.classList.toggle('dark-mode');
          document.querySelector('.navbar').classList.toggle('navbar-dark-mode');
          document.querySelector('.navbar').classList.toggle('navbar-light-mode');
      });
  
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Prince", "Devloper", "Programmer", "Hacker"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});