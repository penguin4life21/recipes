var data = {
    "img":"./rec1.jpeg",
    "imgAlt": "Stack of Pancakes",
    "recipeInfo": {
        "recipeName": "Simple Pancakes",
        "recipeDesc": "A basic recipe for pancakes",
        "recipeTime": "15 Minutes",
        "recipeServings": "4"
    },
    "ingredients": [
        {
            "ingredientName": "Self Raising Flour",
            "ingredientAmount": "1 cup"
        },
        {
            "ingredientName": "Egg",
            "ingredientAmount": "1"
        },
        {
            "ingredientName": "Milk",
            "ingredientAmount": "1 cup"
        },
        {
          "ingredientName": "Sugar",
          "ingredientAmount": "2 Tablespoons"
        }
    ],
    "recipeSteps": [
        "Mix all ingredients together. Make sure to avoid overmixing no one wants a tough pancake",
        "Grease griddle with non stick cooking spray",
        "Use a measuring spoon to measure out batter and place on griddle",
        "Flip the pancakes once bubbles start appearing on the surface",
        "Finish cooking the pancakes on the second side of the griddle",
        "Repeat with remaining batter"
    ]
}

document.getElementById("recipeImg").src = data.img;
document.getElementById("recipeImg").width = "260";
document.getElementById("recipeImg").alt = data.imgAlt;
document.title = data.recipeInfo.recipeName;

document.getElementById("recipeName").innerHTML = data.recipeInfo.recipeName;
document.getElementById("recipeDesc").innerHTML = data.recipeInfo.recipeDesc;
document.getElementById("recipeTime").innerHTML = 'Time to make: ' + data.recipeInfo.recipeTime;
document.getElementById("recipeServ").innerHTML = 'Number of servers: ' + data.recipeInfo.recipeServings;

for (var i = 0; i < data.ingredients.length; i++) {
    document.getElementById('ingredientsList').innerHTML += ('<li class="ingredientItems")">'+data.ingredients[i].ingredientName+': '+data.ingredients[i].ingredientAmount+'</li>');
}

for (var i = 0; i < data.recipeSteps.length; i++) {
    document.getElementById('recipeStepsList').innerHTML += ('<li>'+data.recipeSteps[i]+'</li>');
}
