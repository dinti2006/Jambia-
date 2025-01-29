function openEnvelope() {
    let container = document.querySelector('.container');
    let envelope = document.querySelector('.envelope');
    let letter = document.querySelector('.letter');

    // Open envelope animation
    container.classList.add('open');

    // Play music
    playMusic();

    // Remove envelope and show letter
    setTimeout(() => {
        envelope.style.display = "none";
        letter.style.opacity = "1";
    }, 1000);

    // Start heart animation
    createHearts();
}

function playMusic() {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    }
}

function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    heartsContainer.innerHTML = "";
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heartsContainer.appendChild(heart);
    }
}
