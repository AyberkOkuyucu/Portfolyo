document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById("buton");
  const projeContainer = document.querySelector(".projects-container");
  
  toggleBtn.addEventListener("click", function() {
      projeContainer.classList.toggle("hidden");
  });
});
