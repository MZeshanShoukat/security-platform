// Simple mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openBtn = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close");

  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add("show");
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});