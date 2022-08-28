const lodeMeal = (meal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(res => res.json())
        .then(data => display(data.meals))
};
const display = (meals) => {
    const mealSection = document.getElementById('mealSection');
    mealSection.innerHTML = "";
    const detailsSection = document.getElementById('detailsSection');
    detailsSection.innerHTML = "";
    for (const meal of meals) {
        const mealDiv = document.createElement('div');
        mealDiv.classList = 'col'
        mealDiv.innerHTML = `
        <div onclick="foodId(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${meal.strMeal}</h3>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
       `;
        mealSection.appendChild(mealDiv);

    }
};
const searchBtn = () => {
    const searchField = document.getElementById('searchField');
    const search = searchField.value;
    lodeMeal(search);
    searchField.value = "";

};

const foodId = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => detailsMeal(data.meals[0]))
};
const detailsMeal = (meal) => {
    const detailsSection = document.getElementById('detailsSection');
    detailsSection.innerHTML = "";
    const mealDiv = document.createElement('div');
    mealDiv.classList = 'col'
    mealDiv.innerHTML = `
        <div onclick="foodId(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${meal.strMeal}</h3>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
       `;
    detailsSection.appendChild(mealDiv)
}

lodeMeal("");

