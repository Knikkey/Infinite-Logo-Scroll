const logoSection = document.querySelector(".logo-section");
const logoBox = document.querySelector(".logo-box");
const logos = document.querySelectorAll(".logos");

logos.forEach((logo, i) => {
  const observer = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) logos[logos.length - 1].append(logo);
  }, {});
  observer.observe(logo);
});
