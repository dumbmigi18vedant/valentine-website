const music = document.getElementById("bg-music");

// Fade in on load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const savedTime = localStorage.getItem("musicTime");
  const wasPlaying = localStorage.getItem("musicPlaying");

  if (savedTime) {
    music.currentTime = parseFloat(savedTime);
  }

  if (wasPlaying === "true") {
    music.play();
  }
});

// Save music time
setInterval(() => {
  if (!music.paused) {
    localStorage.setItem("musicTime", music.currentTime);
    localStorage.setItem("musicPlaying", "true");
  }
}, 500);

// Start music on first click
document.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    localStorage.setItem("musicPlaying", "true");
  }
}, { once: true });

// 🔥 Page transition navigation
function goToLove() {
  fadeAndGo("love.html");
}

function goToSurprise() {
  fadeAndGo("surprise.html");
}

function fadeAndGo(page) {
  document.body.classList.remove("loaded");
  setTimeout(() => {
    window.location.href = page;
  }, 600); // match CSS transition time
}

// Valentine buttons
function yes() {
  document.getElementById("message").innerText =
    "YAYYY 💖 You just made me the happiest person alive 🥰";
}

function no() {
  document.getElementById("message").innerText =
    "Nice try 😏 You don't have a choice 💘";
}

// Music toggle
function toggleMusic() {
  if (music.paused) {
    music.play();
    localStorage.setItem("musicPlaying", "true");
  } else {
    music.pause();
    localStorage.setItem("musicPlaying", "false");
  }
}
// 💖 Floating heart particles
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Create hearts continuously
setInterval(createHeart, 500);
