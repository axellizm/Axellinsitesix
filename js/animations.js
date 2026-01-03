const canvas = document.getElementById("fx-canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const hearts = [];

function spawnHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 16 + 12,
    speed: Math.random() * 2 + 1,
    life: 1
  });
}

function animateFX() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  hearts.forEach((h,i)=>{
    h.y -= h.speed;
    h.life -= 0.008;

    ctx.fillStyle = `rgba(255,45,85,${h.life})`;
    ctx.font = `${h.size}px serif`;
    ctx.fillText("❤", h.x, h.y);

    if (h.life <= 0) hearts.splice(i,1);
  });

  requestAnimationFrame(animateFX);
}

animateFX();

document.getElementById("magicHeart").onclick = () => {
  for(let i=0;i<25;i++) setTimeout(spawnHeart, i*40);
};
