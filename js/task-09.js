function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector(".change-color");
const coloredSpan = document.querySelector(".color");
// btnColor.addEventListener("click", getRandomHexColor);

const handleButtonClick = () => {
  let color = getRandomHexColor();
  console.log(color);
  coloredSpan.textContent = color;
  document.body.style.backgroundColor = color;
}

btnColor.addEventListener("click", handleButtonClick);