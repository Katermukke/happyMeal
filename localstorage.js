function attachFavEvent() {
    let addFavBtn = document.querySelectorAll('.addFav');
    addFavBtn.forEach(button => {
        button.addEventListener('click', function() {

            const parentRecipes = this.parentNode;
            const recipeId = parentRecipes.querySelector('.recipeId').value;
            const idJson = {
                id : recipeId
            };

            let existingFavList = localStorage.getItem('favRecipes');
            if (!existingFavList) {
                existingFavList = [];
            } else {
                existingFavList = JSON.parse(existingFavList);
            }

            const existingRecipeIndex = existingFavList.findIndex(item => item.id === recipeId);

            if (existingRecipeIndex === -1) {
                existingFavList.push(idJson);
                this.classList.add('colored');
            } else {
                existingFavList.splice(existingRecipeIndex, 1);
                this.classList.remove('colored');
                
            }

            localStorage.setItem('favRecipes', JSON.stringify(existingFavList));
        });
    });
}
