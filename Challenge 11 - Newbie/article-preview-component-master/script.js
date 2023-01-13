const active = document.querySelector(".container-share");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  active.classList.toggle("none");
});
