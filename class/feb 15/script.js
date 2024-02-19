let intervalId = null;
let ballPosition = 0;
let direction = 1; // 1 for down, -1 for up
const ballContainer = document.getElementById("ballContainer");

const moveBall = () => {
    ballPosition += direction * 5; // Adjust the speed of the ball here (5px in this example)
    ballContainer.style.top = ballPosition + "px";

    const containerHeight = ballContainer.clientHeight;
    const ballHeight = document.getElementById("ball").clientHeight;

    if (ballPosition >= containerHeight - ballHeight) {
        direction = -1;
    } else if (ballPosition <= 0) {
        direction = 1;
    }
};

const startAnimation = () => {
    if (!intervalId) {
        intervalId = setInterval(moveBall, 50); // Adjust the interval (50ms in this example)
    }
};

const stopAnimation = () => {
    clearInterval(intervalId);
    intervalId = null;
};

document.getElementById("startBtn").onclick = () => {
    if (!intervalId) {
        startAnimation();
    } else {
        stopAnimation();
    }
};
