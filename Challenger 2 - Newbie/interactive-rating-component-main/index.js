const ratingValues = document.getElementsByClassName("rate");
const writeRate = document.querySelector(".rate-value");
const btn = document.querySelector("#btn");
const containerMainSelect = document.querySelector(".main-container");
const ratingContainer = document.querySelector(".totank");

for (let i = 0; i < ratingValues.length; i++) {
  const rating = ratingValues[i];
  rating.addEventListener("click", () => {
    rating.classList.toggle("button_select");
    writeRate.innerText = `You selected ${rating.innerText} out of ${ratingValues.length}`;
  });
}

const handToggle = () => {
  containerMainSelect.classList.add("display-none");
  ratingContainer.classList.remove("display-none");
};

btn.addEventListener("click", handToggle);
