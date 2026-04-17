const elements = document.querySelectorAll('.fade-in');

function reveal() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', reveal);

// Run once on load
reveal();