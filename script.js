/* ============ SLIDER ============ */
let current = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dots span");

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.remove("active");
    dots[i].style.opacity = "0.5";
  });
  slides[index].classList.add("active");
  dots[index].style.opacity = "1";
  current = index;
}
function nextSlide() {
  showSlide((current + 1) % slides.length);
}
function prevSlide() {
  showSlide((current - 1 + slides.length) % slides.length);
}
function setSlide(i) {
  showSlide(i);
}
showSlide(0);

/* ============ SISTEMA DE SEGREDOS ============ */
function addSecret(id, action) {
  const el = document.getElementById(id);
  if (el) el.addEventListener("click", action);
}

/* segredo 1: glitch rápido, sem redirecionar */
addSecret("secret1", () => {
  document.body.style.filter = "invert(1)";
  setTimeout(() => (document.body.style.filter = "none"), 250);
  console.log("%cTHEY ARE WATCHING", "color:red; font-size:20px;");
});

/* segredo 2: vai pro vídeo */
addSecret("secret2", () => {
  window.location.href = "video.html";
});

/* segredo 3: vai pro mural de evidências */
addSecret("secret3", () => {
  window.location.href = "evidence.html";
});

/* segredo 4: vai pro dossiê corrompido */
addSecret("secret4", () => {
  window.location.href = "classified.html";
});

/* segredo 5: clicar 5x rápido na logo → mural de evidências */
let logoClicks = 0;
let logoTimer = null;
document.getElementById("logoSecret").addEventListener("click", () => {
  logoClicks++;
  if (logoClicks >= 5) {
    logoClicks = 0;
    window.location.href = "evidence.html";
    return;
  }
  clearTimeout(logoTimer);
  logoTimer = setTimeout(() => (logoClicks = 0), 1500);
});

/* segredo 6: digitar "omega" → dossiê corrompido */
let typed = "";
const codeWord = "omega";
document.addEventListener("keydown", (e) => {
  typed += e.key.toLowerCase();
  if (typed.length > codeWord.length) {
    typed = typed.slice(-codeWord.length);
  }
  if (typed === codeWord) {
    window.location.href = "classified.html";
  }
});