function fetchData() {
    fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const recipes = data.recettes;
        const display = document.querySelector('#display');

        recipes.forEach(recipe => {
            const { nom, categorie, temps_preparation, ingredient } = recipe;
        });
    })
}