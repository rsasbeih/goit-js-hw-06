const ingredients = [
        "Potatoes",
        "Mushrooms",
        "Garlic",
        "Tomatos",
        "Herbs",
        "Condiments",
];

const list = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
        let ingredientLi = document.createElement("li");
        ingredientLi.textContent = ingredient;
        list.append(ingredientLi);
}