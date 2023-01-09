const activeClass = "active";
const accordionList = document.querySelectorAll("dt");

accordionList[1].classList.add(activeClass);
accordionList[1].nextElementSibling.classList.add(activeClass);

function activeAccordion() {
  this.classList.toggle(activeClass);
  this.nextElementSibling.classList.toggle(activeClass);
}

accordionList.forEach((item) =>
  item.addEventListener("click", activeAccordion)
);
