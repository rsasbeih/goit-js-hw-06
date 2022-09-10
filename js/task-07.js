const range = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

setOutput();

range.addEventListener("change", setOutput);

function setOutput() {
        const selectedOptionValue = range.value;
        console.log(selectedOptionValue);
        textOutput.style.fontSize = selectedOptionValue + 'px';
}