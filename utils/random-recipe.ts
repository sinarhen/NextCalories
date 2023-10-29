const recipeCategories: string[] = ["Pasta", "Salad", "Soup", "Stir-Fry", "Sandwich", "Burger", "Pizza", "Omelette", "Smoothie", "Dessert", "Taco", "Sushi", "Grilled", "Roast", "Curry", "Fajita", "Casserole", "Sausage", "BBQ", "Rice Bowl", "Wrap", "Crepes", "Pancakes", "Waffles", "Scramble", "Quiche", "Muffins", "Cobbler", "Ratatouille", "Pilaf", "Calzone", "Potatoes", "Ceviche", "Lobster", "Crab", "Jambalaya", "Goulash", "Paella", "Gnocchi", "Empanada", "Lasagna", "Cannelloni", "Gyros", "Tostada", "Pierogi", "Samosa", "Meatloaf", "Sorbet", "Sundae", "Trifle", "Pudding", "Biscuits", "Chowder", "Mousse", "Cheesecake", "Sorbet", "Gazpacho", "Gratin", "Souffle", "Pesto", "Popsicles", "Eggnog", "Guacamole", "Enchiladas", "Donuts", "Falafel", "Milkshake", "Nachos", "Tofu", "Ramen", "Tempura", "Schnitzel", "Frittata", "Eggs Benedict", "Mashed Potatoes", "Stew", "Fondue", "Kebabs", "Sambal", "Tamales", "Linguini", "Coleslaw", "Tempura", "Fettuccine", "Sashimi", "Peking Duck", "Hummus", "Gumbo", "Samosa", "Bouillabaisse", "Poke Bowl", "Couscous", "Moussaka", "Risotto", "Sorbet", "Fudge", "Sundae", "Truffle", "Scones", "Brownies", "Pretzels", "Breadsticks", "Mojito", "Margarita", "Sangria", "Mimosa", "Martini", "Irish Coffee", "Sazerac", "Mule", "Spritz", "Sours", "Negroni", "Bellini", "Cosmopolitan", "Sidecar", "Kamikaze", "Gin Fizz", "Aviation", "Penicillin", "Zombie", "Mai Tai", "Mojito", "Paloma", "Pisco Sour", "White Russian", "Mint Julep", "Pina Colada", "Tom Collins", "Singapore Sling", "Bramble", "French 75", "Black Russian", "Screwdriver", "Tequila Sunrise", "Whiskey Sour", "Caipirinha", "Daiquiri", "Whiskey Smash", "Penicillin", "Mule", "Spritz", "Sours", "Negroni", "Bellini", "Cosmopolitan", "Sidecar", "Kamikaze", "Gin Fizz", "Aviation", "Margarita", "Bloody Mary", "Old Fashioned", "Manhattan", "Mint Julep", "Sazerac", /* Repeat as needed */];

function getRandomRecipeCategory(): string {
  const randomIndex = Math.floor(Math.random() * recipeCategories.length);
  return recipeCategories[randomIndex];
}
function getRandomRecipesNames(length = 1): string[] {
  let arr = []
  for (let i = 0; i < length; i++){
    arr.push(getRandomRecipeCategory())
  }
  return arr
}

const productNames: string[] = [
  "Apple", "Banana", "Carrot", "Lettuce", "Tomato", "Broccoli", "Potato", "Onion", "Garlic", "Strawberry", "Blueberry", "Grapes", "Pineapple", "Mango", "Cucumber", "Bell Pepper", "Eggplant", "Zucchini", "Orange", "Lemon",
  "Avocado", "Peach", "Plum", "Pear", "Cherry", "Watermelon", "Cantaloupe", "Kiwi", "Pomegranate", "Papaya", "Raspberry", "Blackberry", "Cauliflower", "Spinach", "Kale", "Cabbage", "Mushroom", "Peas", "Corn", "Asparagus",
  "Sweet Potato", "Celery", "Cilantro", "Basil", "Oregano", "Thyme", "Rosemary", "Sage", "Parsley", "Mint", "Cinnamon", "Vanilla", "Nutmeg", "Ginger", "Turmeric", "Cumin", "Coriander", "Cloves", "Mustard", "Soy Sauce",
  "Honey", "Olive Oil", "Coconut Oil", "Butter", "Sugar", "Flour", "Milk", "Eggs", "Cheese", "Yogurt", "Peanut Butter", "Almonds", "Walnuts", "Cashews", "Pecans", "Sunflower Seeds", "Quinoa", "Rice", "Pasta", "Bread", "Chicken",
  "Beef", "Pork", "Fish", "Shrimp", "Tofu", "Bacon", "Sausage", "Ham", "Turkey", "Salmon", "Tuna", "Lobster", "Crab", "Scallops", "Shrimp", "Clams", "Mussels", "Oysters", "Steak", "Ground Beef", "Ground Turkey", "Ground Chicken",
  "Ground Pork", "Ground Lamb", "Ground Bison", "Ground Elk", "Ground Venison", "Bison", "Elk", "Venison", "Duck", "Goose", "Quail", "Rabbit", "Lamb", "Veal", "Squid", "Octopus", "Grouper", "Snapper", "Catfish", "Swordfish", "Halibut",
  "Trout", "Mackerel", "Haddock", "Caviar", "Sardines", "Anchovies"
];

function getRandomProductsName(length = 1): string[] {
  let arr = []
  for (let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * productNames.length);
    arr.push(productNames[randomIndex]);
  }
  return arr;
}

export { getRandomRecipesNames, getRandomProductsName };