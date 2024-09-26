var typed = new Typed("#element", {
  strings: ["Food Api", "Dress Api"],
  typeSpeed: 50,
  loop: true,
});
let generatedJSON = "";

// Arrays of possible values for the food items
const foodNames = [
  "Pizza",
  "Burger",
  "Pasta",
  "Salad",
  "Sushi",
  "Tacos",
  "Sandwich",
  "Soup",
  "Steak",
  "Curry",
];
const cuisines = [
  "Italian",
  "American",
  "Mexican",
  "Japanese",
  "Indian",
  "French",
  "Chinese",
  "Thai",
];
const categories = ["Main Course", "Appetizer", "Dessert", "Snack", "Beverage"];
const ingredients = [
  "Cheese",
  "Tomato",
  "Chicken",
  "Beef",
  "Rice",
  "Potato",
  "Lettuce",
  "Onion",
  "Pepper",
  "Garlic",
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate fake food data
function generateFakeAPI() {
  let fakeFoods = [];
  for (let i = 1; i <= 100; i++) {
    let food = {
      id: i,
      name: getRandomElement(foodNames),
      cuisine: getRandomElement(cuisines),
      category: getRandomElement(categories),
      price: (Math.random() * 50 + 5).toFixed(2), // Random price between $5 and $55
      ingredients: Array.from({ length: 4 }, () =>
        getRandomElement(ingredients)
      ),
      available: Math.random() > 0.5, // Random availability
    };
    fakeFoods.push(food);
  }

  // Convert the data into JSON format
  generatedJSON = JSON.stringify(fakeFoods, null, 2);
  const jsonDisplay = document.getElementById("jsonDisplay");
  jsonDisplay.style.display = "block";
  jsonDisplay.textContent = generatedJSON;

  // Show the download button
  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.style.display = "inline-block";
}

// Function to download the generated API as a .json file
function downloadFakeAPI() {
  const blob = new Blob([generatedJSON], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  // Create a temporary download link and trigger a click
  const a = document.createElement("a");
  a.href = url;
  a.download = "fake_food_api.json";
  a.click();

  // Revoke the object URL after the download
  URL.revokeObjectURL(url);
}
