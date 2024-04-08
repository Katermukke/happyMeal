function fetchData() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const recipes = data.recettes;
        const display = document.querySelector('#display');

        recipes.forEach(recipe => {
            display.innerHTML += `
            <article class="recipe">
                <h2>${recipe.nom}</h2>
                <p>${recipe.categorie}</p>
                <p>Temps de préparation : ${recipe.temps_preparation}</p>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient.nom}: ${ingredient.quantite}<button>+</button></li>`).join('')}
                </ul>
                <ul>
                    ${recipe.etapes.map(etape => `<li>${etape}</li>`).join('')}
                </ul>
            </article>
            `;

        });
    })
}

fetchData();