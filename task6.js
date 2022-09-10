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