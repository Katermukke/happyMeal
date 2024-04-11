document.addEventListener("DOMContentLoaded", function() {
    const dropdownMenu = document.querySelector("#dropdownMenu");
    const dropdownList = document.querySelector("#dropdownList");

    document.querySelector(".svgRight").addEventListener("click", function() {
  
      const ingredients = JSON.parse(localStorage.getItem("List")) || [];

      ingredients.forEach(function(ingredient) {
        const listIngredient = document.createElement("li");
        listIngredient.textContent = ingredient;
        dropdownList.appendChild(listIngredient);
      });
  
      dropdownMenu.classList.toggle("show");
    });
});

