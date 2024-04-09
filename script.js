document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    document.querySelector(".slides").style.transform = `translateX(-${
      index * 100
    }%)`;
  }, 5000); // Changement d'arrière-plan toutes les 5 secondes
});
