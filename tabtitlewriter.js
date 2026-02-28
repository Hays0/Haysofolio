document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Hays0 ",
    "Hi",
    "Portfolio, yeah..."
  ];

  let messageIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150;
  const deletingSpeed = 80;
  const delayBetween = 1000;

  function typeEffect() {
    const currentMessage = messages[messageIndex];
    const displayed = currentMessage.substring(0, charIndex);
    const cursor = (charIndex % 2 === 0) ? "|" : ""; // blinking cursor effect
    document.title = displayed + cursor;

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentMessage.length) {
      delay = delayBetween;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      messageIndex = (messageIndex + 1) % messages.length;
      delay = typingSpeed;
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();
});
