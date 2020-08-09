/*Lets say we are designing a new smart fridge.
The fridge knows all of the food stored inside of it,
and knows a number of recipes that can be used to make different meals.
A recipe consists of a number of ingredients that are used to create a meal.
For your part of the project you need to create the software for the fridge.
Your software needs to implement 3 functions:*/

/* // Must Implement
AddFood( food_name, amount, expire_date )
AddRecipe( recipe_name, ingredients ) <- m
CanCreateRecipe( recipe_name, current_date ) (returns bool) */

/* // Example Usage
AddRecipe( “spaghetti and meatballs”, {“meatball”:1, “tomato sauce”:1, “spaghetti”:1, “tomato”:1} )
AddFood( “meatball”, 1 )
AddFood( “spaghetti”, 1 )
AddFood( “tomato”, 4 )
CanCreateRecipe( “spaghetti and meatballs” ) —> False

AddRecipe( “tomato sauce”, {“tomato”: 3, “basil”: 1} )
AddFood( “basil”, 1 )
CanCreateRecipe( “tomato sauce” ) —> True
CanCreateRecipe( “spaghetti and meatballs” ) —> True
*/

class SmartFridge {
  constructor() {
    this.foods = {};
    this.recipes = {};
  }

  addFood(foodName, amount) {
    this.foods[foodName] = this.foods[foodName]
      ? this.foods[foodName] + amount
      : amount;
  }

  addRecipe(recipeName, recipe) {
    this.recipes[recipeName] = recipe;
  }

  canCreateRecipe(recipeName) {

    const _canCreateRecipe = (recipeName) => {
      const originalRecipe = this.recipes[recipeName];
      if (!originalRecipe) return null;

      const recipe = [...originalRecipe];
      const diff = {};

      const ingredients = Object.keys(recipe);
      for (let i = 0; i < ingredients.length; ++i) {
        const ingredient = ingredients[i];
        if (this.foods[ingredient] < recipe[ingredient]) {
          diff[ingredient] = recipe[ingredient] - this.foods[ingredient];
        }
      }

      // expand diff
      const missingIngredients = Object.keys(diff);
      for (let i = 0; i < missingIngredients.length; ++i) {
        const missing = missingIngredients[i];
        const missingAmount = diff[missing];

        const neededs = canCreateRecipe(missing);

        if (!neededs) return null;
        neededs.forEach((amount, ingredient) => {
          recipe[ingredient] = recipe[ingredient]
            ? recipe[ingredient] + amount * missingAmount
            : amount * missingAmount;
        });

        recipe[missing] -= missingA;
      }

      // Duplicate 49-55



      // "spaghetti & meatballs" => meatball x1, spaghetti x1, tomato_sauce x2
      // "tomato sauce" => tomato x2 basil x1

      // required:  meatball x1, spaghetti x1, tomato_sauce x2
      // given:     meatball x1, spaghetti x1, tomato_sauce x1, tomato x2, basil x1
      // diff:                                tomato_sauce x-1, tomato x2, basil x1

      // TODO:
      return recipe;
    }

    return !!_canCreateRecipe(recipeName);
  }
}
