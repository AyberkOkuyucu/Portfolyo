document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById("buton");
  const projeContainer = document.querySelector(".projects-container");
  
  toggleBtn.addEventListener("click", function() {
      projeContainer.classList.toggle("hidden");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("buton2");
  const body = document.body;
  
  if (localStorage.getItem("theme") === "light") {
      body.classList.add("light-mode");
  }
  
  toggleButton.addEventListener("click", function() {
      body.classList.toggle("light-mode");
      
      if (body.classList.contains("light-mode")) {
          localStorage.setItem("theme", "light");
      } else {
          localStorage.setItem("theme", "dark");
      }
  });

  const allTextElements = document.querySelectorAll("body, header, .about-section, .projects-container, footer, aside, .col-3, .box a, .project-title, .icon-box h3, aside ul li a");
  toggleButton.addEventListener("click", function() {
      allTextElements.forEach(el => {
          el.classList.toggle("light-mode-text");
      });
  });
});
