let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
let flagPoles = CSSRulePlugin.getRule(".container-input");

gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  { opacity: 0, duration: 1.5, delay: 2 }
);

tl.fromTo(
  ".logo-name",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 2.5, delay: 0 }
)
  .to(".container-text", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 2,
  })
  .to(
    ".container-input",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
    },
    "=-2"
  )
  .to(
    "form",
    {
      "clip-path": "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
      opacity: 1,
      x: 0,
    },
    "=-1"
  );

function validateForm(e) {
  e.preventDefault();
  const inputs = Array.from(e.target.querySelectorAll("input"));
  console.log(inputs.length);
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      input.classList.add("erro");
      let message;

      if (input.validity.typeMismatch) {
        message = `Looks like this is not an ${input.type}`;
      }
      if (input.validity.valueMissing) {
        message = `${input.placeholder} cannot be empty`;
      }
      input.nextSibling.nextSibling.textContent = message;
      input.nextSibling.nextSibling.classList.add("visible");
    }
    input.addEventListener("input", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("erro")) {
        e.target.classList.remove("erro");
        e.target.nextSibling.nextSibling.classList.remove("visible");
      }
    });
  });
}

const form = document.querySelector(".form");
form.noValidate = true;
form.addEventListener("submit", validateForm);
