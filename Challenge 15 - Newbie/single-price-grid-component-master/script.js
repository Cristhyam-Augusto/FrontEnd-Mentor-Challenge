let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
let flagPoles = CSSRulePlugin.getRule(".container-input");

gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  { opacity: 0, duration: 1.5, delay: 2, display: "none" }
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
    duration: 0.5,
  })
  .to(
    ".container-join",
    {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      y: 0,
    },
    "=-1"
  )
  .to(
    ".container-sub",
    {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      y: 0,
    },
    "=-1"
  )
  .to(
    ".container-main",
    {
      "box-shadow": "-1px 6px 27px 1px rgba(0, 0, 0, 0.18)",
    },
    "=-1"
  );
