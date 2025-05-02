const images = Array.from(document.querySelectorAll('.grid-item'));

images.forEach((el) => {
  el.style.filter = `hue-rotate(${(images.indexOf(el) + 1) * 30}deg)`;
});
