// Data pesan
const messages = [
    {
        content: [
            "yeyeyyyyy!",
            "happy bdayyy and happy annivv babeeeee, walaupun ultahnya tanggal 28 dan anniv nya tanggal 29, maaf yaaa baruu aku bikinn soalnyaa ga keburuuuu hehehehee, tpii gapapa yaa jangan buru buru yang penting pastiii anjay wkwkwk", 
        ],
        heart: "❤️"
    },
    {
        content: [
            "meski udaa lewat beberapa hari, aku masii ngerasa hari spesiall belum selesai dirayain, soalnyaaa kamu itu orangg yang terlalu berharga buatt cuma dirayain satu hari. semogaa di umur barumu ini, kamuu makin bahagiaaa, makin kuattt, dan semua impian ayangg satu persatu jadi nyataaa. aku bangga banget punyaa kamu, yang teruuss tumbuhh jadi pribadi yang hebat, sabar, dan penuh cintaaa.",
        ],
        heart: "💝"
    },
    {
        content: [
            "dannnn... happy annivv jugaa sayangg, ga kerasaa yaaa? waktu cepet bangett berjalan. tapiii selamaa itu jugaa, kamuu udaaa jadii bagiannn palingg indahhh dalam hidup akuuu. kitaa udaa lewatinn banyakk hal barenggg, darii yang bikinn ketawa sampee yang bikin nangisss. tapii yang palingg pentinggg, kitaa tetap disinii, tetap memilihh satuu sama lainn, akuu harap kitaa terus bersamaaa selamanyaaaaa.",
        ],
        heart: "✨"
    },
    {
        content: [
            "akuuu tauu aku belum sempurnaaa, tapii akuu selaluu berusaha jadi yang terbaik buat kamuu. dan aku jugaa tauuu, kamu bukan cumaa sekedar pacarrr, kamu itu rumahhhh. tempattt hatii inii balikk setiapp kalii duniaa rasanyaa berattt. terimakasiii karnaa udaaa tetep sama akuuu sayangg. dannnn makasii jugaa ga pernahh nyerahhh sama hubungan iniiiiiii.",
        ],
        heart: "😍"
    },
    {
        content: [
            "telatt ucapannyaa yaa? iyaaa, tapii cintakuu ke kamuu ga pernah telatttt, ga pernah kuranggg, dan gaa akann pernah habissss.",,
        ],
        heart: "❤️"
    },
    {
        content: [
            "I will always love you forever and ever, no matter what happens. i will always be by your side, through thick and thin. you are my everything, and I am so grateful to have you in my life. happy birthday and happy anniversary, babeeeee <3!",
        ],
        heart: "❤️❤️❤️"
    }
];

// Memuat pesan ke container
const messageContainer = document.getElementById('messageContainer');

messages.forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    
    msg.content.forEach(text => {
        const p = document.createElement('p');
        p.innerHTML = text;
        messageDiv.appendChild(p);
    });
    
    const heart = document.createElement('p');
    heart.className = 'heart';
    heart.textContent = msg.heart;
    messageDiv.appendChild(heart);
    
    messageContainer.appendChild(messageDiv);
});

// Musik Player
const musicBtn = document.getElementById('musicBtn');
const musicInfo = document.getElementById('musicInfo');
const music = document.getElementById('birthdayMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    try {
        if (isPlaying) {
            music.pause();
            musicBtn.textContent = '🎵';
            musicInfo.textContent = 'Putar Musik';
        } else {
            music.play()
                .then(() => {
                    musicBtn.textContent = '❚❚';
                    musicInfo.textContent = 'Happy Birthday!';
                })
                .catch(error => {
                    console.error("Error playing music:", error);
                    musicInfo.textContent = 'Klik lagi untuk memutar';
                });
        }
        isPlaying = !isPlaying;
    } catch (error) {
        console.error("Music error:", error);
        musicInfo.textContent = 'Musik tidak tersedia';
    }
});

// Hati Mengambang
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.textContent = ['❤️', '💖', '💝', '💗', '💓'][Math.floor(Math.random() * 5)];
        
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`;
        
        const duration = Math.random() * 4 + 3;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 500);
}

// Inisialisasi
window.onload = function() {
    createFloatingHearts();
    
    // Atur volume default
    music.volume = 0.3;
};