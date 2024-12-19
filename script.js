
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("[data-animate='fade-in']");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-4");
          } else {
            entry.target.classList.add("opacity-0", "translate-y-4");
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    elements.forEach((el) => {
      observer.observe(el);
    });
  });
