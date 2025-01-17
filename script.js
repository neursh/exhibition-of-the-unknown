const { animate, hover } = Motion;

const works = [
  document.getElementById("primordial-chaos"),
  document.getElementById("two-african-hairstyles"),
  document.getElementById("the-lovers-boat"),
  document.getElementById("deathbed-photo"),
  document.getElementById("the-adventures-of-prince-achmed"),
];

const binds = [
  document.getElementById("binds-primordial-chaos"),
  document.getElementById("binds-two-african-hairstyles"),
  document.getElementById("binds-the-lovers-boat"),
  document.getElementById("binds-deathbed-photo"),
  document.getElementById("binds-the-adventures-of-prince-achmed"),
];

works.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    animate(element, { opacity: 1 }, { duration: 0.5 });
    binds.forEach((bind, bindsIndex) => {
      if (index === bindsIndex) {
        bind.style.opacity = 1;
      } else {
        bind.style.opacity = 0;
      }
    });
  });
  element.addEventListener("mouseout", () => {
    animate(element, { opacity: 0 }, { duration: 0.5 });
  });
});
