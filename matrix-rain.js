function createMatrixRain(canvasId, side) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = 100; // narrow ribbon
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style[side] = "0";
  canvas.style.zIndex = "0";

  const chars = "01";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i] = drops[i] * fontSize > canvas.height || Math.random() > 0.975
        ? 0
        : drops[i] + 1;
    }
  }

  setInterval(draw, 50);
}

createMatrixRain("matrix-left", "left");
createMatrixRain("matrix-right", "right");
