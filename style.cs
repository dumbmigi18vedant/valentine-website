body {
  background: linear-gradient(135deg, #ff758c, #ff7eb3);
  font-family: 'Segoe UI', sans-serif;
  color: white;
  height: 100vh;
  margin: 0;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

p, li {
  font-size: 1.2rem;
}

button {
  background: white;
  color: #ff4d6d;
  border: none;
  padding: 12px 25px;
  margin: 10px;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.1);
}

.reasons {
  list-style: none;
  padding: 0;
}

#message {
  font-size: 1.5rem;
  margin-top: 20px;
}

.music-btn {
  position: fixed;
  top: 15px;
  right: 15px;
  background: white;
  color: #ff4d6d;
}
/* Page transition */
body {
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
}

body.loaded {
  opacity: 1;
}

/* Floating hearts */
.heart {
  position: fixed;
  bottom: -20px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  animation: floatUp 6s linear forwards;
  pointer-events: none;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-110vh) scale(1.5);
    opacity: 0;
  }
}
