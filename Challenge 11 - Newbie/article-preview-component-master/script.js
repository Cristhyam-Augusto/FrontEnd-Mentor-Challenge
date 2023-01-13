const none = document.querySelector(".container-share");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  none.classList.toggle("none");
  btn.classList.toggle("active");
});
