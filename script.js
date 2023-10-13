const scheibe = document.querySelector('.scheibe');
let rotation = 0;
let interval = null;

document.addEventListener('keydown', function(event) {
    if (event.key === 'l') {
        rotation -= 15;
        updateRotation();
    } else if (event.key === 'r') {
        rotation += 15;
        updateRotation();
    } else if (event.key === 'a') {
        toggleAutomaticRotation();
    }
});

function updateRotation() {
    scheibe.style.transform = `rotate(${rotation}deg)`;
}

function startAutomaticRotation() {
    interval = setInterval(() => {
        rotation += 15;
        updateRotation();
    }, 100);
}

function stopAutomaticRotation() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

function toggleAutomaticRotation() {
    if (interval) {
        stopAutomaticRotation();
    } else {
        startAutomaticRotation();
    }
}