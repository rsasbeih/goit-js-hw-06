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
