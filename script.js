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

const contents = [
  document.getElementById("content-primordial-chaos"),
  document.getElementById("content-two-african-hairstyles"),
  document.getElementById("content-the-lovers-boat"),
  document.getElementById("content-deathbed-photo"),
  document.getElementById("content-the-adventures-of-prince-achmed"),
];

let lastMouseOnContent = -1;

works.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    element.style.opacity = 1;
    binds.forEach((bind, bindsIndex) => {
      if (index === bindsIndex) {
        bind.style.opacity = 1;
      } else {
        bind.style.opacity = 0;
      }
    });

    contents.forEach((content, contentIndex) => {
      if (index === contentIndex) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
  element.addEventListener("mouseout", () => {
    element.style.opacity = 0;
  });
});
