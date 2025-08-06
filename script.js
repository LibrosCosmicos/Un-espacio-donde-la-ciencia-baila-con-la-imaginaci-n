// Fondo de estrellas animadas
const canvas = document.getElementById("estrellas");
const ctx = canvas.getContext("2d");
let w, h;
let estrellas = [];

function redimensionar() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
redimensionar();
window.addEventListener("resize", redimensionar);

function crearEstrellas() {
  estrellas = [];
  for (let i = 0; i < 100; i++) {
    estrellas.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5,
      d: Math.random() * 0.5 + 0.2
    });
  }
}

function animarEstrellas() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "white";
  for (let estrella of estrellas) {
    ctx.beginPath();
    ctx.arc(estrella.x, estrella.y, estrella.r, 0, Math.PI * 2);
    ctx.fill();
    estrella.y += estrella.d;
    if (estrella.y > h) estrella.y = 0;
  }
  requestAnimationFrame(animarEstrellas);
}

crearEstrellas();
animarEstrellas();

// Fade in al hacer scroll
const sections = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

sections.forEach(section => {
  observer.observe(section);
});
// Guardar mensaje del lector (en localStorage)
function guardarMensaje() {
  const mensaje = document.getElementById("mensaje").value;
  if (mensaje.trim() === "") {
    document.getElementById("confirmacion").textContent = "🌠 Por favor, escribe algo.";
    return;
  }

  localStorage.setItem("mensajeCosmico", mensaje);
  document.getElementById("confirmacion").textContent = "✅ ¡Tu idea ha sido guardada en tu universo personal!";
}
