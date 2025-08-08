// matrix-rain.js
function createMatrixRain(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  // DO NOT force fixed positioning here — let CSS control layout
  // Size canvas to its CSS-defined box
  function setSize() {
    canvas.width = canvas.clientWidth;   // match 10vw (or whatever CSS says)
    canvas.height = canvas.clientHeight; // match 100vh
    resetDrops();
  }

  const chars = "01";
  const fontSize = 14;
  let drops = [];
  function resetDrops() {
    const columns = Math.max(1, Math.floor(canvas.width / fontSize));
    drops = Array(columns).fill(1);
  }

  function draw() {
    // subtle fading trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setSize();
  window.addEventListener("resize", setSize);
  setInterval(draw, 50);
}

document.addEventListener("DOMContentLoaded", () => {
  createMatrixRain("matrix-left");
  createMatrixRain("matrix-right");
});

