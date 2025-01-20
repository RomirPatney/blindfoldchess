// Simple JS to dynamically update the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Optional: If you want some simple fade-in animations on scroll, 
// uncomment the code below:

/*
const fadeElements = document.querySelectorAll('.feature-box, .preview-images img, .ratings-reviews, .cta-section');

window.addEventListener('scroll', () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

fadeElements.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});
*/
