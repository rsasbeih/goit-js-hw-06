
const categories = document.querySelectorAll("ul#categories li.item");
console.log("Number of categories: " + categories.length);
categories.forEach((category) => {
        console.log("Category: " + category.querySelector("h2").textContent);
        console.log("Elements: " + category.querySelectorAll("ul > li").length);
});

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

const images = [
        {
                url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
                alt: "White and Black Long Fur Cat",
        },
        {
                url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
                alt: "Orange and White Koi Fish Near Yellow Koi Fish",
        },
        {
                url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
                alt: "Group of Horses Running",
        },
];

const listImg = document.querySelector(".gallery");
const markup = images
        .map((image) => `<li><img src="${image.url}" alt="${image.alt} width="100" height="100""></li>`)
        .join("");
listImg.insertAdjacentHTML("beforebegin", markup);


const button1 = document.querySelector('button[data-action="increment"]');
const button2 = document.querySelector('button[data-action="decrement"]');
let i = 0;
const incrementByOne = () => {
        document.getElementById("value").value = ++i;
        document.querySelector("#value").textContent = i;
};
const decrementByOne = () => {
        document.getElementById("value").value = --i;
        document.querySelector("#value").textContent = i;
};

button1.addEventListener("click", incrementByOne);
button2.addEventListener("click", decrementByOne);


const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
        // if (output.value = "")
        output.textContent = event.currentTarget.value;
        // else
        // output.textContent = "Anonymous";
});


const validationTextInput = document.querySelector("#validation-input");
const validTextLength = document.querySelector('input[data-length="6"]');
console.log(validTextLength.dataset.length);

validationTextInput.addEventListener("blur", () => {
        if (validationTextInput.value.length === 6) {
                validationTextInput.classList.remove("invalid");
                validationTextInput.classList.add("valid");
        }
        else {
                validationTextInput.classList.remove("valid");
                validationTextInput.classList.add("invalid");
        }
});