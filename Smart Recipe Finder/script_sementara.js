// contains recipes.
const recipes = [
    // constains objects
    {
        name: "Nasi Goreng",
        // constains array
        ingredients: ["nasi", "minyak goreng", "bawang merah", "bawang putih", "telur", "kecap manis", "sayuran"],
        // constains array
        steps: [
            "Panaskan minyak goreng dalam wajan.",
            "Tumis bawang merah dan bawang putih hingga harum.",
            "Masukkan telur, aduk hingga matang.",
            "Tambahkan nasi putih, kecap manis, dan sayuran. Aduk rata.",
            "Beri garam dan merica secukupnya. Sajikan hangat."
        ]
    },
    {
        name: "Mie Goreng",
        ingredients: ["mie", "minyak goreng", "bawang merah", "bawang putih", "sayuran", "telur", "kecap manis"],
        steps: [
            "Rebus mie hingga matang, tiriskan.",
            "Panaskan minyak, tumis bawang merah dan bawang putih hingga harum.",
            "Masukkan sayuran dan telur, orak-arik hingga matang.",
            "Tambahkan mie, kecap manis, garam, dan merica. Aduk rata.",
            "Sajikan hangat."
        ]
    },
    {
        name: "Ayam Goreng",
        ingredients: ["ayam", "minyak goreng", "bawang putih", "garam", "merica", "ketumbar"],
        steps: [
            "Haluskan bawang putih, garam, merica, dan ketumbar.",
            "Marinasi ayam dengan bumbu halus selama 30 menit.",
            "Panaskan minyak, goreng ayam hingga kecokelatan dan matang.",
            "Sajikan dengan nasi hangat."
        ]
    },        
];

function getRecipes() {
    // take the element with #ingredients, then take the value, then change all the letters to all lowercase.
    const input = document.getElementById('ingredients').value.toLowerCase();
    // input.split(','): Imagine you are cutting your shopping list every time you encounter a comma. So, your long list is cut into several smaller pieces, like this: ["apples", "bananas", "oranges", "mangoes"].
    // .map(item => item.trim()): After truncating the list, you take each part (for example "apple") and remove any spaces that might be in front or behind it. So, "apple" becomes "apple". You do this for each item in the list.
    const ingredientList = input.split(',').map(item => item.trim());
    const resultDiv = document.getElementById('result');
    // Call the resultDiv variable and then fill it with an empty string.
    resultDiv.innerHTML = ''; // Clear previous results

    // recipes.filter(...): Imagine you have a lot of recipes, like a long list. This code will check each recipe in the list and select only the ones that match.
    // recipe: This means the code will check each recipe one by one.
    // const matchingRecipes = recipes.filter(recipe => {
    //     // recipe.ingredients.every(...): Imagine every recipe has a list of ingredients. This code checks each ingredient in the recipe.
    //     // Check if all ingredients of the recipe are available in the ingredient list
    //     // ingredient => ingredientList.includes(ingredient): Ini berarti setiap bahan dalam resep harus ada di daftar bahan yang kamu punya (ingredientList).
    //     return recipe.ingredients.every(ingredient => ingredientList.includes(ingredient));
    // });

    // recipes.filter(...): Imagine you have a lot of recipes, like a long list. This code will check each recipe in the list and select only the ones that match.
    // recipe: This means the code will check each recipe one by one.
    const matchingRecipes = recipes.filter(recipe => { 
        // recipe.ingredients: It's like a list of all the ingredients needed for a particular recipe.
        // .filter(...): Imagine you are checking one by one the ingredients in a recipe list. You will only choose the ingredients that are already in your kitchen.
        // ingredient => ingredientList.includes(ingredient):
        const matchedIngredients = recipe.ingredients.filter(ingredient => ingredientList.includes(ingredient)); 
        // matchedIngredients.length: This is the amount of ingredients you already have in your pantry. For example, you have 3 of the 5 ingredients in a recipe.
        // recipe.ingredients.length: Ini adalah jumlah total bahan dalam resep. Misalnya, resep membutuhkan 5 bahan.
        // matchedIngredients.length/ recipe.ingredients.length: This is a way to calculate what percentage of an ingredient you have compared to the total amount of ingredients in the recipe. For example, if you have 3 out of 5 ingredients, then the result is 3/5 or 0.6 (60%).
        return matchedIngredients.length / recipe.ingredients.length > 0.5; 
    });

    // Display the matching recipes
    // This means that if there are any matching recipes (the number is more than 0), then we will display those recipes.
    if (matchingRecipes.length > 0) {
        // This means we will look at each recipe one by one and do something with it.
        matchingRecipes.forEach(recipe => {
            const recipeHTML = `
                <h2>${recipe.name}</h2>
                <p>Bahan-bahan:</p>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <p>Langkah-langkah:</p>
                <ol>
                    ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            `;
            // call resultDiv then the HTML content will be added with the recipeHTML value content
            resultDiv.innerHTML += recipeHTML; // Append the recipe to the result div
        });
    } else {
        resultDiv.innerHTML = `<p>Maaf, tidak ada resep yang cocok dengan bahan yang Anda masukkan.</p>`;
    }
}