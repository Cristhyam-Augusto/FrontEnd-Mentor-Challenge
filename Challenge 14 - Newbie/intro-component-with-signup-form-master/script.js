let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
let flagPoles = CSSRulePlugin.getRule(".container-input");

tl.to(".container-text", {
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
    "=-1"
  )
  .to(
    "form",
    {
      "clip-path": "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
      opacity: 1,
      x: 0,
    },
    "=-1.5"
  );
