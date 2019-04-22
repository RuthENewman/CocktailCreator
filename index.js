const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
const baseURLByID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const displayCocktailDiv = document.querySelector('.displayCocktail');
const spiritForm = document.getElementById('textInput');
const submitButton = document.getElementById('submitButton');


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
      if (data.drinks.length > 0) {
      randomNumber = Math.floor(Math.random() * state.drinks.length - 1)
      randomDrink = state.drinks[randomNumber];
      displayCocktailDiv.innerHTML = `
      <div data-id=${randomDrink.idDrink}>
        <p id="cocktailID">${randomDrink.idDrink}</p>
        <p id="cocktailName">${randomDrink.strDrink}</p>
        <img src=${randomDrink.strDrinkThumb} alt=${randomDrink.strDrink} id="cocktailImage"/>
      </div>
      `;
      getCocktailById(`${randomDrink.idDrink}`);
    } else {
      displayCocktailDiv.innerHTML = "<p>Sorry, couldn't find anything. Try another spirit.</p>";
    }

    })
}

function getCocktailById(cocktailID) {
  displayCocktailDiv.innerHTML = '<p class"loadingMessage">Finding instructions</p>';
  fetch(`${baseURLByID}${cocktailID}`)
    .then(response => response.json())
    .then(drinksArray => {
      selectedDrink = drinksArray.drinks[0];
      selectedDrinkName = selectedDrink.strDrink;
      selectedDrinkImage = selectedDrink.strDrinkThumb;
      selectedDrinkInstructions = selectedDrink.strInstructions;
      displayCocktailDiv.innerHTML = `
      <div class="dispayCocktail">
        <img src=${selectedDrinkImage} alt=${selectedDrinkName} id="cocktailImage"/>
        <p id="cocktailName">${selectedDrinkName}</p>
        <div class="ingredients">
          <span id="measurement1">${selectedDrink.strMeasure1}</span>
          <span id="ingredient1">${selectedDrink.strIngredient1}</span>
          <span id="measurement2">${selectedDrink.strMeasure2}</span>
          <span id="ingredient2">${selectedDrink.strIngredient2}</span>
          <span id="measurement3">${selectedDrink.strMeasure3}</span>
          <span id="ingredient3">${selectedDrink.strIngredient3}</span>
          <span id="measurement4">${selectedDrink.strMeasure4}</span>
          <span id="ingredient4">${selectedDrink.strIngredient4}</span>
          <span id="measurement5">${selectedDrink.strMeasure5}</span>
          <span id="ingredient5">${selectedDrink.strIngredient5}</span>
          <span id="measurement6">${selectedDrink.strMeasure6}</span>
          <span id="ingredient6">${selectedDrink.strIngredient6}</span>
          <span id="measurement7">${selectedDrink.strMeasure7}</span>
          <span id="ingredient7">${selectedDrink.strIngredient7}</span>
          <span id="measurement8">${selectedDrink.strMeasure8}</span>
          <span id="ingredient8">${selectedDrink.strIngredient8}</span>
          <span id="measurement9">${selectedDrink.strMeasure9}</span>
          <span id="ingredient9">${selectedDrink.strIngredient9}</span>
          <span id="measurement10">${selectedDrink.strMeasure10}</span>
          <span id="ingredient11">${selectedDrink.strIngredient11}</span>
          <span id="measurement12">${selectedDrink.strMeasure12}</span>
          <span id="ingredient12">${selectedDrink.strIngredient12}</span>
          <span id="measurement13">${selectedDrink.strMeasure13}</span>
          <span id="ingredient13">${selectedDrink.strIngredient13}</span>
          <span id="measurement14">${selectedDrink.strMeasure14}</span>
          <span id="ingredient14">${selectedDrink.strIngredient14}</span>
          <span id="measurement15">${selectedDrink.strMeasure15}</span>
          <span id="ingredient15">${selectedDrink.strIngredient15}</span>
        </div>
        <p id="cocktailInstructions">${selectedDrinkInstructions}</p>
      </div>
      `;
    })
}

submitButton.addEventListener('click', event => {
  event.preventDefault();
  let selectedSpirit = textInput.value;
  getCocktails(selectedSpirit);
})
