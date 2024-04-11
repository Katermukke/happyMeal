document.addEventListener("DOMContentLoaded", function() {
    const dropdownMenu = document.querySelector("#dropdownMenu");
    const dropdownList = document.querySelector("#dropdownList");

    document.querySelector(".svgRight").addEventListener("click", function() {
  
      const ingredients = JSON.parse(localStorage.getItem("List", "nom", "quantite")) || [];

      dropdownList.innerHTML = "";

      ingredients.forEach(function(ingredient) {
        const listIngredient = document.createElement("li");
        listIngredient.innerHTML = `<li>${ingredient.nom} ${ingredient.quantite}</li>`;
        dropdownList.appendChild(listIngredient);
      });
  
      dropdownMenu.classList.toggle("show");
    });
});
