// Every meal = Object. All meals = Array of Objects.
// ingredients / instructions / tips = Array of String (count changes per meal)
// nutrition = Object with fixed keys (same keys in every meal)
const meals = [
  {
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
    prepTime: 15, cookTime: 20, servings: 4,
    difficulty: "Easy", category: "Italian",
    ratingsAverage: 4.8, ratingsQuantity: 234,
    ingredients: ["400g spaghetti pasta", "200g pancetta, diced", "4 large eggs", "100g Pecorino Romano, grated", "50g Parmesan, grated", "Freshly ground black pepper"],
    instructions: ["Boil the spaghetti in salted water until al dente.", "Cook the diced pancetta until crispy, 5-7 minutes.", "Whisk the eggs with the cheeses and plenty of black pepper.", "Reserve 1 cup of pasta water, then drain the pasta and add it to the pancetta.", "Off the heat, pour in the egg mixture while tossing, adding pasta water for creaminess.", "Serve immediately with extra cheese."],
    nutrition: { calories: "520 kcal", protein: "28g", carbs: "62g", fat: "18g", fiber: "3g", sodium: "680mg" },
    tips: ["Use room temperature eggs for a smoother sauce", "Work quickly to avoid scrambling the eggs", "Never add cream"]
  },
  {
    name: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    prepTime: 10, cookTime: 15, servings: 2,
    difficulty: "Easy", category: "Seafood",
    ratingsAverage: 4.9, ratingsQuantity: 187,
    ingredients: ["2 salmon fillets", "3 tbsp honey", "2 tbsp soy sauce", "4 garlic cloves, minced", "1 tbsp olive oil", "Sesame seeds", "Green onions"],
    instructions: ["Pat the salmon dry and season with salt and pepper.", "Whisk the honey, soy sauce and garlic.", "Sear the salmon in hot oil for 4-5 minutes.", "Flip, pour the sauce over and cook 4-5 more minutes.", "Garnish with sesame seeds and green onions."],
    nutrition: { calories: "380 kcal", protein: "35g", carbs: "28g", fat: "14g", fiber: "0g", sodium: "720mg" },
    tips: ["Do not overcook the salmon", "Let the sauce caramelize slightly", "Serve with steamed broccoli"]
  },
  {
    name: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
    prepTime: 15, cookTime: 25, servings: 4,
    difficulty: "Intermediate", category: "Asian",
    ratingsAverage: 4.7, ratingsQuantity: 312,
    ingredients: ["2 tbsp green curry paste", "400ml coconut milk", "300g chicken breast, sliced", "1 red bell pepper", "100g green beans", "1 eggplant, cubed", "2 tbsp fish sauce", "Fresh Thai basil"],
    instructions: ["Cook the curry paste in a hot wok for 1 minute.", "Add half the coconut milk and stir.", "Add the chicken and cook for 5 minutes.", "Add the rest of the coconut milk, vegetables and fish sauce.", "Simmer 15-20 minutes, then stir in the basil."],
    nutrition: { calories: "420 kcal", protein: "26g", carbs: "22g", fat: "26g", fiber: "5g", sodium: "890mg" },
    tips: ["Adjust the spice with more or less paste", "Use full-fat coconut milk", "Fresh Thai basil is essential"]
  },
  {
    name: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    prepTime: 15, cookTime: 20, servings: 4,
    difficulty: "Easy", category: "American",
    ratingsAverage: 4.6, ratingsQuantity: 421,
    ingredients: ["500g ground beef", "4 burger buns", "4 slices cheddar", "Lettuce", "Tomato slices", "Red onion", "Pickles"],
    instructions: ["Form 4 patties with a small dent in the center.", "Season both sides with salt and pepper.", "Cook 4-5 minutes per side over high heat.", "Add the cheese in the last minute.", "Toast the buns and assemble."],
    nutrition: { calories: "650 kcal", protein: "38g", carbs: "42g", fat: "35g", fiber: "2g", sodium: "920mg" },
    tips: ["Do not press down on the patties", "Rest the patties for 2-3 minutes", "Toast the buns for better texture"]
  },
  {
    name: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    prepTime: 20, cookTime: 35, servings: 2,
    difficulty: "Easy", category: "Mediterranean",
    ratingsAverage: 4.5, ratingsQuantity: 156,
    ingredients: ["1 cup quinoa", "Cherry tomatoes", "Cucumber, diced", "Red onion", "Kalamata olives", "Feta cheese", "Fresh parsley", "Tahini dressing"],
    instructions: ["Rinse the quinoa and cook it for about 15 minutes.", "Chop all the vegetables.", "Mix tahini, lemon juice, garlic and water for the dressing.", "Fluff the quinoa and let it cool slightly.", "Top with the vegetables, feta and parsley, then drizzle the dressing."],
    nutrition: { calories: "480 kcal", protein: "18g", carbs: "58g", fat: "20g", fiber: "10g", sodium: "540mg" },
    tips: ["Rinse the quinoa well to remove bitterness", "Add chickpeas for extra protein"]
  },
  {
    name: "Chicken Tikka Masala",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    prepTime: 20, cookTime: 30, servings: 4,
    difficulty: "Intermediate", category: "Asian",
    ratingsAverage: 4.7, ratingsQuantity: 389,
    ingredients: ["600g chicken breast, cubed", "1 cup plain yogurt", "2 tbsp tikka masala paste", "400ml coconut cream", "1 onion, diced", "4 garlic cloves", "2 tbsp ginger", "400g canned tomatoes"],
    instructions: ["Marinate the chicken in half the yogurt and paste for 30 minutes.", "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.", "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.", "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.", "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.", "Simmer for 15 minutes and garnish with cilantro."],
    nutrition: { calories: "450 kcal", protein: "38g", carbs: "24g", fat: "22g", fiber: "4g", sodium: "760mg" },
    tips: ["Marinate overnight for deeper flavor", "Serve with naan and basmati rice"]
  },
  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
    prepTime: 90, cookTime: 12, servings: 2,
    difficulty: "Intermediate", category: "Italian",
    ratingsAverage: 4.9, ratingsQuantity: 512,
    ingredients: ["300g pizza dough", "200g crushed tomatoes", "250g fresh mozzarella", "Fresh basil", "2 tbsp olive oil", "Parmesan"],
    instructions: ["Let the dough rest at room temperature for 1 hour.", "Preheat the oven to its maximum temperature.", "Mix the tomatoes with oil, garlic, salt and pepper.", "Roll out the dough, add sauce and torn mozzarella.", "Bake 10-12 minutes, then top with basil."],
    nutrition: { calories: "580 kcal", protein: "24g", carbs: "68g", fat: "22g", fiber: "4g", sodium: "920mg" },
    tips: ["A pizza stone gives a crispier crust", "Add the basil after baking", "Less topping is more"]
  },
  {
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    prepTime: 15, cookTime: 60, servings: 4,
    difficulty: "Intermediate", category: "Mediterranean",
    ratingsAverage: 4.7, ratingsQuantity: 267,
    ingredients: ["4 large onions, thinly sliced", "4 tablespoons butter", "1 liter beef broth", "1/2 cup white wine", "2 bay leaves", "Baguette slices", "200g Gruyère cheese"],
    instructions: ["Cook the onions in butter for 40 minutes until caramelized.", "Add the wine and scrape up the brown bits.", "Pour in the broth, add the bay leaves and simmer 20 minutes.", "Top bowls with toasted bread and cheese.", "Broil 3-5 minutes until bubbly."],
    nutrition: { calories: "380 kcal", protein: "18g", carbs: "36g", fat: "18g", fiber: "4g", sodium: "980mg" },
    tips: ["Do not rush the onions", "Watch carefully when broiling"]
  }
];

// Elements
const el = id => document.getElementById(id);

let lastIndex = -1;

// Nutrition information
const nutritionInfo = [
  { key: "calories", label: "Calories", icon: "fa-fire", bg: "#ffedd5", color: "#ea580c" },
  { key: "protein", label: "Protein", icon: "fa-dumbbell", bg: "#dbeafe", color: "#2563eb" },
  { key: "carbs", label: "Carbohydrates", icon: "fa-wheat-awn", bg: "#fef9c3", color: "#ca8a04" },
  { key: "fat", label: "Fat", icon: "fa-droplet", bg: "#fee2e2", color: "#dc2626" },
  { key: "fiber", label: "Fiber", icon: "fa-seedling", bg: "#dcfce7", color: "#16a34a" },
  { key: "sodium", label: "Sodium", icon: "fa-cube", bg: "#fce7f3", color: "#db2777" }
];

function displayMeal(meal) {

  // Recipe information
  el("recipe-image").src = meal.image;
  el("recipe-image").alt = meal.name;

  el("recipe-name").textContent = meal.name;
  el("recipe-description").textContent = meal.description;

  // Rating
  el("rating-average").textContent = meal.ratingsAverage;
  el("rating-quantity").textContent =
    `(${meal.ratingsQuantity} reviews)`;

  // Time and servings
  el("prep-time").textContent = meal.prepTime + " min";
  el("cook-time").textContent = meal.cookTime + " min";
  el("servings").textContent = meal.servings + " people";

  // Difficulty and category
  el("difficulty").textContent = meal.difficulty;
  el("category").textContent = meal.category;

  // Warning
  const totalTime = meal.prepTime + meal.cookTime;

  el("time-warning").classList.toggle(
    "d-none",
    totalTime <= 45
  );

  // Ingredients
  let ingredientsHTML = "";

  for (let i = 0; i < meal.ingredients.length; i++) {
    ingredientsHTML += `
      <li class="d-flex align-items-start mb-3">
        <div class="num-sm me-3">${i + 1}</div>
        <span class="text-secondary">
          ${meal.ingredients[i]}
        </span>
      </li>
    `;
  }

  el("ingredients-list").innerHTML = ingredientsHTML;

  // Instructions
  let instructionsHTML = "";

  for (let i = 0; i < meal.instructions.length; i++) {
    instructionsHTML += `
      <div class="d-flex align-items-start mb-4">
        <div class="num-lg me-3">${i + 1}</div>
        <p class="text-secondary pt-2 mb-0">
          ${meal.instructions[i]}
        </p>
      </div>
    `;
  }

  el("instructions-list").innerHTML = instructionsHTML;

  // Nutrition
  let nutritionHTML = "";

  for (let i = 0; i < nutritionInfo.length; i++) {

    const item = nutritionInfo[i];

    nutritionHTML += `
      <div class="col-12 col-md-6">
        <div class="nut-card d-flex align-items-center justify-content-between">

          <div class="d-flex align-items-center">
            <div class="nut-icon me-3"
              style="background:${item.bg}">
              <i class="fa-solid ${item.icon}"
                style="color:${item.color}">
              </i>
            </div>

            <span class="fw-medium small">
              ${item.label}
            </span>
          </div>

          <span class="fw-bold fs-5">
            ${meal.nutrition[item.key]}
          </span>

        </div>
      </div>
    `;
  }

  el("nutrition-list").innerHTML = nutritionHTML;

  // Chef's Tips
  let tipsHTML = "";

  for (let i = 0; i < meal.tips.length; i++) {
    tipsHTML += `
      <div class="tip-card d-flex align-items-start mb-3">
        <i class="fa-solid fa-circle-check text-warning fs-5 me-3 mt-1"></i>

        <p class="text-secondary mb-0">
          ${meal.tips[i]}
        </p>
      </div>
    `;
  }

  el("tips-list").innerHTML = tipsHTML;


  // Reset scroll
  document.querySelectorAll(".pane-box").forEach(pane => {
    pane.scrollTop = 0;
  });
}

// Get a random recipe
function showRandomMeal() {

  let index;

  do {
    index = Math.floor(Math.random() * meals.length);
  } while (index === lastIndex);

  lastIndex = index;

  displayMeal(meals[index]);
}

// Button event
el("try-another-btn").addEventListener(
  "click",
  showRandomMeal
);

// Display first random recipe
showRandomMeal();