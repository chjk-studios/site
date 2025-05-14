const jockey = document.getElementById("jockey");
const obstacle = document.getElementById("obstacle");

function jump() {
  if (!jockey.classList.contains("jump")) {
    jockey.classList.add("jump");
    setTimeout(() => {
      jockey.classList.remove("jump");
    }, 600);
  }
}

document.addEventListener("keydown", jump);

// Obstacle animation
let obstacleLeft = window.innerWidth;

function moveObstacle() {
  obstacleLeft -= 5;
  if (obstacleLeft < -80) obstacleLeft = window.innerWidth;
  obstacle.style.right = `${-obstacleLeft}px`;

  // Collision Detection
  const jockeyBottom = parseInt(window.getComputedStyle(jockey).bottom);
  if (obstacleLeft < 130 && obstacleLeft > 50 && jockeyBottom < 50) {
    alert("Game Over!");
    obstacleLeft = window.innerWidth;
  }

  requestAnimationFrame(moveObstacle);
}

moveObstacle();