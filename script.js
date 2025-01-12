const hero = document.querySelector(".hero");
const text = document.querySelector("h1");

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;

  let { offsetX: x, offsetY: y } = e;

  if (e.target !== hero) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const maxShadowX = 30;
  const maxShadowY = 20;

  const xMove = (x / width) * maxShadowX;
  const yMove = (y / height) * maxShadowY;

  text.style.textShadow = `
      ${xMove}px ${yMove}px rgba(169, 169, 121, 0.1)
    `;
}

hero.addEventListener("mousemove", shadow);

function copyText() {
  navigator.clipboard.writeText("Você é gay");
}
