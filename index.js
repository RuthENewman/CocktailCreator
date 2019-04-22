const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
const baseURLByID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007"
const displayCocktailDiv = document.querySelector('.displayCocktail');
const spiritForm = document.getElementById('textInput');


state = {
  drinks: []
}

let randomNumber;

function getCocktails(spirit) {
  displayCocktailDiv.innerHTML = '<p class="loadingMessage">Choosing a cocktail for you...</p>'
  fetch(`${baseURL}${spirit}`)
    .then(response => response.json())
    .then(data => {
      state.drinks = data.drinks;
      randomNumber = Math.floor(Math.random() * state.drinks.length - 1)
      randomDrink = state.drinks[randomNumber];
      displayCocktailDiv.innerHTML = `
      <div data-id=${randomDrink.idDrink}>
        <p id="cocktailID">${randomDrink.idDrink}</p>
        <p id="cocktailName">${randomDrink.strDrink}</p>
        <img src=${randomDrink.strDrinkThumb} alt=${randomDrink.strDrink} id="cocktailImage"/>
      </div>
      `;
    }
    )
}

function getCocktailById(cocktailID) {

}

spiritForm.addEventListener('submit', event => {
  event.stopPropogation();
  let selectedSpirit = event.target.value;
  console.log(selectedSpirit)
})
