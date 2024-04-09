let currentPage = 1;
const recipesPerPage = 9;

function displayRecipes(page) {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const recipes = data.recettes;
        const display = document.querySelector('#display');
        
        display.innerHTML = '';

        const start = (page - 1) * recipesPerPage;
        const end = page * recipesPerPage;
        const paginatedRecipes = recipes.slice(start, end);
        
        paginatedRecipes.forEach(recipe => {
            display.innerHTML += `
            <article class="recipe">
                <div class="recipe-banner">
                    <img class="recipe-image" src="${recipe.image}">
                    <div class="recipe-info">
                        <h2>${recipe.nom}</h2>
                        <p>${recipe.categorie}</p>
                        <p>Temps de préparation : ${recipe.temps_preparation}</p>
                        <ul>
                            ${recipe.ingredients.map(ingredient => `<li class="ingredient">${ingredient.nom}: ${ingredient.quantite}
                            <button class="addBtn">+</button></li>`).join('')}
                        </ul>
                    </div>
                </div>
                <ul class="steps">
                    ${recipe.etapes.map(etape => `<li>${etape}</li><br>`).join('')}
                </ul>
                <button class="addFav"><img src=""></button>
            </article>
            `;
        });

        if (page === 1) {
            currentPage = 2;
        }
    })
    .then(() => {
        if (currentPage === 2) {
            recipesPerPage = 5;
        }
    });
}

function initPagination() {
    const paginationControls = document.querySelector('#pagination-controls');
    paginationControls.innerHTML = `
    <button class='paginationBtn' onclick="displayRecipes(1)">Page 1</button>
    <button class='paginationBtn' onclick="displayRecipes(2)">Page 2</button>
    `
    displayRecipes(1);
}

initPagination();