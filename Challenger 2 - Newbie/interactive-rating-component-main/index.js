const ratingValues = document.getElementsByClassName("rate");
const writeRate = document.querySelector(".rate-value");
const btn = document.querySelector("#btn");
const containerMainSelect = document.querySelector(".main-container");
const ratingContainer = document.querySelector(".totank");

for (let i = 0; i < ratingValues.length; i++) {
  const rating = ratingValues[i];
  rating.addEventListener("click", () => {
    for (let w = 0; w < ratingValues.length; w++) {
      const ratingW = ratingValues[w];
      ratingW.classList.remove("button-select");
    }
    rating.classList.toggle("button-select");
    writeRate.innerText = `You selected ${rating.innerText} out of ${ratingValues.length}`;
    btn.addEventListener("click", handToggle);
  });
}

const handToggle = () => {
  containerMainSelect.classList.add("display-none");
  ratingContainer.classList.remove("display-none");
};
