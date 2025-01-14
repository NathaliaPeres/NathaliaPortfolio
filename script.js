const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const toast = document.querySelector(".toast");
const garra = document.querySelector(".garra");
const garraBase = document.querySelector(".garraBase");
const garraBarra = document.querySelector(".garraBarra");

const frames = [
  "./imagens/framesGarra/garraanim1.png",
  "./imagens/framesGarra/garraanim2.png",
  "./imagens/framesGarra/garraanim3.png",
  "./imagens/framesGarra/garraanim4.png",
  "./imagens/framesGarra/garraanim5.png",
  "./imagens/framesGarra/garraanim5.png",
  "./imagens/framesGarra/garraanim5.png",
  "./imagens/framesGarra/garraanim6.png",
  "./imagens/framesGarra/garraanim7.png",
  "./imagens/framesGarra/garraanim8.png",
  "./imagens/framesGarra/garraanim9.png",
];

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;

  const rect = hero.getBoundingClientRect();

  // Calcule a posição do mouse relativa ao 'hero'
  const x = e.clientX - rect.left; // Posição X relativa ao 'hero'
  const y = e.clientY - rect.top; // Posição Y relativa ao 'hero'

  const maxShadowX = 30;
  const maxShadowY = 20;

  const xMove = (x / width) * maxShadowX;
  const yMove = (y / height) * maxShadowY;

  text.style.textShadow = `
      ${xMove}px ${yMove}px rgba(169, 169, 121, 0.1)
    `;
  garra.style.right = `-${xMove}px`;
  garraBase.style.right = `-${xMove}px`;
  garraBarra.style.right = `-${xMove}px`;
}

hero.addEventListener("mousemove", shadow);
hero.addEventListener("click", playAnimation);

let currentFrame = 0;
function playAnimation() {
  if (currentFrame < frames.length) {
    garra.src = frames[currentFrame];
    currentFrame++;

    setTimeout(playAnimation, 40);
  } else {
    currentFrame = 0;
  }
}

function copyText() {
  navigator.clipboard.writeText("Você é gay");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const heroHeight = hero.offsetHeight;

  const maxOffset = heroHeight - garra.offsetHeight;
  const offset = Math.min(scrollY, maxOffset);

  garra.style.top = `${offset}px`;
  garraBarra.style.top = `${offset}px`;
});
