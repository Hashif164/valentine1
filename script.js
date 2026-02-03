const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const finalMessage = document.getElementById("finalMessage");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }

  for (let i = 0; i < 20; i++) {
    createHeart();
  }

  document.querySelector(".container").style.display = "none";
  finalMessage.style.display = "block";
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}
