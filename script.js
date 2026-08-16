// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi semua fitur
    initializeCalendar();
    initializeCountdown();
    setupLoveButton();
    setupMusicPlayer();
    setupInteractions();
    setupThemeToggle();
    setupParticles();
    setupLightbox();
    setupLoveMeter();
    setupQuiz();
    setupScrollAnimations();
    setupFloatingMessages();
});

// Fungsi untuk menginisialisasi kalender
function initializeCalendar() {
    const datesContainer = document.querySelector('.dates');
    const currentYear = 2024; // Anniversary year (leap year)
    
    // 2024 adalah tahun kabisat
    const isLeapYear = true;
    
    // Buat tanggal untuk Februari
    const febDays = 29;
    
    // Tentukan hari pertama Februari 2024 (0 = Minggu, 1 = Senin, dst)
    const firstDayOfFeb = new Date(currentYear, 1, 1).getDay();
    
    // Tambahkan hari kosong untuk minggu pertama
    let datesHTML = '';
    
    for (let i = 0; i < firstDayOfFeb; i++) {
        datesHTML += '<span></span>';
    }
    
    // Tambahkan tanggal
    for (let day = 1; day <= febDays; day++) {
        if (day === 29) {
            datesHTML += `<span class="special">${day}</span>`;
        } else {
            datesHTML += `<span>${day}</span>`;
        }
    }
    
    datesContainer.innerHTML = datesHTML;
    
    // Update tahun di kalender header
    document.querySelector('.year').textContent = currentYear;
}

// Fungsi untuk menginisialisasi hitung mundur
function initializeCountdown() {
    // Tanggal target: 29 Februari 2028
    const targetDate = new Date('2028-02-29T00:00:00').getTime();
    
    // Perbarui hitungan mundur setiap detik
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        
        // Hitung tahun, hari, jam, menit, detik
        const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365.25));
        const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Tampilkan hasil
        document.getElementById('years').textContent = years;
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        // Jika hitungan mundur selesai
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-display').innerHTML = '<div class="countdown-finished">Sudah tiba waktunya! Selamat 6 tahun anniversary!</div>';
        }
    }, 1000);
}

// Fungsi untuk setup tombol pesan spesial
function setupLoveButton() {
    const loveButton = document.getElementById('loveButton');
    const hiddenMessage = document.getElementById('hiddenMessage');
    let messageShown = false;
    
    if (!loveButton) return;
    
    loveButton.addEventListener('click', function() {
        if (!messageShown) {
            hiddenMessage.classList.add('show');
            loveButton.innerHTML = '<i class="fas fa-heart"></i> Tutup Pesan';
            messageShown = true;
            
            // Tambahkan efek hati
            createHearts(10);
            
            // Aktifkan kembang api
            activateFireworks(3);
        } else {
            hiddenMessage.classList.remove('show');
            loveButton.innerHTML = '<i class="fas fa-heart"></i> Klik untuk Pesan Spesial';
            messageShown = false;
        }
    });
}

// Fungsi untuk setup pemutar musik
function setupMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    if (!musicToggle || !backgroundMusic) return;
    
    let musicPlaying = false;
    
    // Mulai dengan musik dimatikan
    backgroundMusic.volume = 0.3;
    
    // Coba putar musik otomatis (banyak browser memblokir ini)
    const playMusic = () => {
        backgroundMusic.play().then(() => {
            musicPlaying = true;
            musicToggle.innerHTML = '<i class="fas fa-pause"></i><span class="music-text">Jeda Musik</span>';
            showNotification("Musik dimulai! Nikmati momen romantis.");
        }).catch(error => {
            console.log("Autoplay diblokir: ", error);
            // Tampilkan pesan bahwa musik perlu diaktifkan manual
            showNotification("Klik tombol musik untuk memutar lagu romantis.");
        });
    };
    
    // Tunggu sedikit sebelum mencoba memutar
    setTimeout(playMusic, 1000);
    
    musicToggle.addEventListener('click', function() {
        if (musicPlaying) {
            backgroundMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i><span class="music-text">Putar Musik</span>';
            musicPlaying = false;
        } else {
            backgroundMusic.play().then(() => {
                musicToggle.innerHTML = '<i class="fas fa-pause"></i><span class="music-text">Jeda Musik</span>';
                musicPlaying = true;
            }).catch(error => {
                console.log("Error memutar musik: ", error);
                showNotification("Terjadi error saat memutar musik. Coba refresh halaman.");
            });
        }
    });
}



// Fungsi untuk membuat efek hati
function createHearts(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            heart.style.position = 'fixed';
            heart.style.color = '#ff6b8b';
            heart.style.fontSize = Math.random() * 20 + 15 + 'px';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.opacity = '0.8';
            
            document.body.appendChild(heart);
            
            // Animasi
            const animation = heart.animate([
                { transform: 'translateY(0) scale(1)', opacity: 0.8 },
                { transform: `translateY(-${Math.random() * 300 + 100}px) scale(0.5)`, opacity: 0 }
            ], {
                duration: Math.random() * 2000 + 1000,
                easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });
            
            // Hapus setelah animasi selesai
            animation.onfinish = () => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            };
        }, i * 200);
    }
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.background = 'linear-gradient(to right, #ff6b8b, #ff8e53)';
    notification.style.color = 'white';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '10px';
    notification.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';
    notification.style.fontWeight = '600';
    notification.style.transform = 'translateX(150%)';
    notification.style.transition = 'transform 0.5s ease';
    
    document.body.appendChild(notification);
    
    // Tampilkan notifikasi
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Sembunyikan setelah 3 detik
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        
        // Hapus dari DOM setelah animasi
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 3000);
}

// Fungsi untuk setup interaksi lainnya
function setupInteractions() {
    // Interaksi dengan statistik
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('click', function() {
            const number = this.querySelector('.stat-number').textContent;
            const label = this.querySelector('.stat-label').textContent;
            showNotification(`Statistik: ${number} ${label} bersama!`);
        });
    });
    
    // Interaksi dengan kotak hitung mundur
    const countdownBoxes = document.querySelectorAll('.countdown-box');
    countdownBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const value = this.querySelector('.countdown-value').textContent;
            const label = this.querySelector('.countdown-label').textContent;
            showNotification(`Tersisa: ${value} ${label} menuju 29 Februari 2028`);
        });
    });
    
    // Interaksi dengan galeri
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            showNotification(`Kenangan: ${title}`);
        });
    });
    
    // Interaksi dengan ikon footer
    const footerIcons = document.querySelectorAll('.icon-circle');
    footerIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            const messages = [
                "Kalender - Tanggal spesial kita",
                "Hati - Cinta yang tumbuh setiap hari",
                "Jam - Waktu yang berharga bersama",
                "Hadiah - Setiap momen adalah hadiah"
            ];
            showNotification(messages[index]);
        });
    });
    
    // Interaksi dengan kalender flip
    const flipCard = document.querySelector('.flip-card');
    if (flipCard) {
        flipCard.addEventListener('click', function() {
            showNotification("Dari 2024 hingga 2026 - perjalanan 2 tahun yang sangatt indah!");
        });
    }
}

// Fungsi untuk setup theme toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            showNotification('Mode terang diaktifkan');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            showNotification('Mode gelap diaktifkan');
        }
    });
}

// Fungsi untuk setup partikel background
function setupParticles() {
    const particlesBg = document.querySelector('.particles-bg');
    if (!particlesBg) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particlesBg.appendChild(particle);
    }
}

// Fungsi untuk setup lightbox
function setupLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (!lightbox || !lightboxImage || !lightboxCaption || !lightboxClose) return;

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageUrl = this.querySelector('.gallery-image').style.backgroundImage;
            const title = this.querySelector('h3').textContent;
            const description = this.querySelector('p').textContent;

            // Extract URL from background-image
            const urlMatch = imageUrl.match(/url\(["']?(.*?)["']?\)/);
            if (urlMatch) {
                lightboxImage.src = urlMatch[1];
                lightboxCaption.textContent = `${title} - ${description}`;
                lightbox.classList.add('show');
            }
        });
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('show');
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
        }
    });
}

// Fungsi untuk setup love meter
function setupLoveMeter() {
    const loveSlider = document.getElementById('loveSlider');
    const meterFill = document.getElementById('meterFill');
    const lovePercentage = document.getElementById('lovePercentage');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');

    if (!loveSlider || !meterFill || !lovePercentage) return;

    function updateMeter(value) {
        meterFill.style.width = value + '%';
        lovePercentage.textContent = value + '%';

        // Add some visual feedback
        if (value >= 90) {
            createHearts(5);
            showNotification('ahh dalemm sayang masuk ke hati akuu eheheh');
        }
    }

    loveSlider.addEventListener('input', function() {
        updateMeter(this.value);
    });

    decreaseBtn.addEventListener('click', function() {
        const currentValue = parseInt(loveSlider.value);
        if (currentValue > 0) {
            loveSlider.value = currentValue - 10;
            updateMeter(loveSlider.value);
        }
    });

    increaseBtn.addEventListener('click', function() {
        const currentValue = parseInt(loveSlider.value);
        if (currentValue < 100) {
            loveSlider.value = currentValue + 10;
            updateMeter(loveSlider.value);
        }
    });

    // Set initial value
    updateMeter(loveSlider.value);
}

// Fungsi untuk setup quiz
function setupQuiz() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizResult = document.getElementById('quizResult');
    const quizMessage = document.getElementById('quizMessage');
    const quizRestart = document.getElementById('quizRestart');

    if (!quizOptions.length || !quizResult || !quizMessage || !quizRestart) return;

    // Correct answer is "susu kamu" (Purple)
    const correctAnswer = "susu kamu";

    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedAnswer = this.getAttribute('data-answer');

            // Remove previous selections
            quizOptions.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });

            if (selectedAnswer === correctAnswer) {
                this.classList.add('correct');
                quizMessage.textContent = "Benar! Kamu benar-benar mengenalku! 💜 Kamu tahu warna favoritku adalah ungu!";
                createHearts(8);
            } else {
                this.classList.add('incorrect');
                quizMessage.textContent = `Hampir benar! Warna favoritku sebenarnya adalah ungu. Tapi tetap saja, aku senang kamu mencoba! 💕`;
            }

            // Show result
            document.getElementById('quizQuestion').style.display = 'none';
            quizResult.style.display = 'block';
        });
    });

    quizRestart.addEventListener('click', function() {
        // Reset quiz
        quizOptions.forEach(opt => {
            opt.classList.remove('correct', 'incorrect');
        });
        document.getElementById('quizQuestion').style.display = 'block';
        quizResult.style.display = 'none';
    });
}

// Fungsi untuk setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Observe specific elements for different animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.classList.add('slide-in-left');
        } else {
            item.classList.add('slide-in-right');
        }
        observer.observe(item);
    });

    // Observe stats for scale animation
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.classList.add('scale-in');
        observer.observe(stat);
    });
}

// Fungsi untuk setup floating messages
function setupFloatingMessages() {
    const messages = [
        "akuu mencintai kamuu setiap hariiii",
        "kamuu adalahh segalanya untuk akuuu",
        "terimakasiih sudah menjadi bagian dari hidup akuuu",
        "cintaaa kita akan selalu tumbuh dan berkembang",
        "terimakasih sudah menjadi alasan senyum akuuu setiap hari",
        "aku bersyukur bisa melewati setiap momen dengan kamuu",
        "cintaa kita adalah hadiah terindah yang pernah aku miliki",
        "aku akan selalu ada untuk kamuu, dalam suka dan duka",
        "kamuu adalah inspirasiku untuk menjadi lebih baik setiap hari"
    ];

    let messageIndex = 0;

    function showFloatingMessage() {
        if (messageIndex >= messages.length) messageIndex = 0;

        const message = document.createElement('div');
        message.className = 'floating-message';
        message.textContent = messages[messageIndex];

        document.getElementById('floatingMessages').appendChild(message);

        // Remove after animation
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 4000);

        messageIndex++;
    }

    // Show messages periodically
    setInterval(showFloatingMessage, 8000);
    // Show first message after 3 seconds
    setTimeout(showFloatingMessage, 3000);
}

// Fungsi untuk mengaktifkan kembang api (placeholder)
function activateFireworks(count) {
    // This would require a fireworks library in a real implementation
    // For now, just create more hearts
    createHearts(count * 3);
    showNotification('DUARRRRR I LOVE U! HEHE 🎆');
}

// Tambahkan style untuk notifikasi jika belum ada
if (!document.querySelector('#notification-style')) {
    const style = document.createElement('style');
    style.id = 'notification-style';
    style.textContent = `


        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(to right, #ff6b8b, #ff8e53);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            font-weight: 600;
            transform: translateX(150%);
            transition: transform 0.5s ease;
            max-width: 300px;
        }
    `;
    document.head.appendChild(style);
}
