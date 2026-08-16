document.getElementById('yesButton').addEventListener('click', function() {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = "Yey! Aku juga sayang banget sama kamu! 💖 Selamat Hari Valentine, Ayang!";
    responseMessage.classList.remove('hidden');
    document.getElementById('yesButton').classList.add('hidden');
    document.getElementById('noButton').classList.add('hidden');
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const noButton = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

document.getElementById('musicButton').addEventListener('click', function() {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic.paused) {
        bgMusic.play();
        this.textContent = "🔊 Pause Musik";
    } else {
        bgMusic.pause();
        this.textContent = "🎵 Putar Musik";
    }
});