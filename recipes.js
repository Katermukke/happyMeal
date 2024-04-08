// function fetchData() {
//     fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//         const recipes = data.recettes;
//         const display = document.querySelector('#display');

//         recipes.forEach(recipe => {
//             display.innerHTML += `
//             <article class="recipe">
//                 <h2>${recipe.nom}</h2>
//                 <p>${recipe.categorie}</p>
//                 <p>Temps de préparation : ${recipe.temps_preparation}</p>
//                 <ul>
//                     ${recipe.ingredients.map(ingredient => `<li class="ingredient">${ingredient.nom}: ${ingredient.quantite}<button class
//                     ="addBtn">+</button></li>`).join('')}
//                 </ul>
//                 <ul class="steps">
//                     ${recipe.etapes.map(etape => `<li>${etape}</li><br>`).join('')}
//                 </ul>
//             </article>
//             `;

//         });
//     })
// }

// fetchData();

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
            <div class="animatedCard">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <article class="recipe">
                <h2>${recipe.nom}</h2>
                <p>${recipe.categorie}</p>
                <p>Temps de préparation : ${recipe.temps_preparation}</p>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li class="ingredient">${ingredient.nom}: ${ingredient.quantite}
                    <button class="addBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    +
                    </button></li>`).join('')}
                </ul>
                <ul class="steps">
                    ${recipe.etapes.map(etape => `<li>${etape}</li><br>`).join('')}
                </ul>
            </article>
            </div>
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
    <button class='paginationBtn' onclick="displayRecipes(1)">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Page 1
    </button>
    <button class='paginationBtn' onclick="displayRecipes(2)">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Page 2
    </button>
    `
    displayRecipes(1);
}

initPagination();