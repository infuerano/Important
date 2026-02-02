const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");
const question = document.getElementById("question");
const buttons = document.getElementById("buttons");
const celebration = document.getElementById("celebration");
const icon = document.getElementById("icon");

noBtn.addEventListener("mouseenter", () => {
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 20;
  const maxY = cardRect.height - btnRect.height - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  question.innerText = "Maria, My Love will you be my Valentine? YAY! 🎉";
  buttons.classList.add("hidden");
  celebration.classList.remove("hidden");
  icon.innerText = "🥰";
  startConfetti();
});

/* Confetti Animation */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 20 + 10,
      color: `hsl(${Math.random() * 360}, 70%, 70%)`,
      tilt: Math.random() * 10
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.r, p.r);
  });

  updateConfetti();
  requestAnimationFrame(animateConfetti);
}

function updateConfetti() {
  confettiPieces.forEach(p => {
    p.y += Math.cos(p.d) + 2;
    p.x += Math.sin(p.d);
    if (p.y > canvas.height) {
      p.y = -10;
    }
  });
}
