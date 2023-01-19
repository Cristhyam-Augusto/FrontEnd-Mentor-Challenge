let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
let flagPoles = CSSRulePlugin.getRule(".card:before");

tl.to("h1", {
  "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  opacity: 1,
  y: 0,
  duration: 3,
})
  .to(
    "p",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
    },
    "-=1.5"
  )
  .to(
    "form",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
    },
    "-=1.5"
  )
  .to(
    ".logo",
    {
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      y: 0,
    },
    "-=4"
  )
  .to(
    ".logo2",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
    },
    "-=4"
  )
  .to(
    ".container-img-hero",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
    },
    "-=1"
  );
tl.to(".container-img-hero", { filter: "blur(0px)", duration: 1 });

//Regex email validation

function validate() {
  const mail = document.getElementById("email").value;
  let regx =
    /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/;
  const alertt = document.querySelector(".regex-alert");

  if (regx.test(mail)) {
    alertt.classList.remove("active");
    return true;
  } else {
    alertt.classList.add("active");
    return false;
  }
}

btn.addEventListener("click", validate);
