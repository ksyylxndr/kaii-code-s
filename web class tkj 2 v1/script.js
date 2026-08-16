// Main JavaScript untuk Website Kelas XI TKJ 2

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const soundToggle = document.getElementById('soundToggle');
const exploreBtn = document.getElementById('exploreBtn');
const videoBtn = document.getElementById('videoBtn');
const daySelector = document.getElementById('daySelector');
const dayButtons = document.querySelectorAll('.day-btn');
const scheduleTable = document.getElementById('scheduleTable');
const currentClass = document.getElementById('currentClass');
const upcomingClass = document.getElementById('upcomingClass');
const studentSearch = document.getElementById('studentSearch');
const filterBtn = document.getElementById('filterBtn');
const studentsContainer = document.getElementById('studentsContainer');
const loadMoreStudents = document.getElementById('loadMoreStudents');
const studentModal = document.getElementById('studentModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryGrid = document.getElementById('galleryGrid');
const announcementContainer = document.getElementById('announcementContainer');
const tasksList = document.getElementById('tasksList');
const completedTasks = document.getElementById('completedTasks');
const pendingTasks = document.getElementById('pendingTasks');
const urgentTasks = document.getElementById('urgentTasks');
const contactForm = document.getElementById('contactForm');
const submitContact = document.getElementById('submitContact');
const backToTop = document.getElementById('backToTop');
const progressBar = document.getElementById('progressBar');
const notificationContainer = document.getElementById('notificationContainer');
const quickSchedule = document.getElementById('quickSchedule');
const quickTasks = document.getElementById('quickTasks');
const quickNotes = document.getElementById('quickNotes');
const quickChat = document.getElementById('quickChat');
const confettiCanvas = document.getElementById('confettiCanvas');
const particlesContainer = document.getElementById('particles-js');

// Audio Elements
const clickSound = document.getElementById('clickSound');
const successSound = document.getElementById('successSound');
const notificationSound = document.getElementById('notificationSound');

// Global Variables
let studentsPerPage = 12;
let currentStudentPage = 1;
let isDarkMode = false;
let soundEnabled = true;
let confettiActive = false;

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi semua komponen
    initWebsite();
    
    // Setup event listeners
    setupEventListeners();
    
    // Load data awal
    loadInitialData();
    
    // Start animations
    startAnimations();
});

// Inisialisasi Website
function initWebsite() {
    // Setup Particles.js
    if (particlesContainer) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 70, density: { enable: true, value_area: 800 } },
                color: { value: "#4361ee" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#4361ee",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
    
    // Setup confetti canvas
    setupConfettiCanvas();
    
    // Load saved settings
    loadSettings();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Update waktu real-time
    updateRealTime();
    setInterval(updateRealTime, 1000);
    
    // Fix mobile viewport
    fixViewport();
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    menuToggle.addEventListener('click', toggleMobileMenu);
    navLinks.forEach(link => link.addEventListener('click', handleNavClick));
    themeToggle.addEventListener('click', toggleTheme);
    soundToggle.addEventListener('click', toggleSound);
    
    // Buttons
    exploreBtn.addEventListener('click', () => scrollToSection('#about'));
    videoBtn.addEventListener('click', showVideoModal);
    
    // Schedule
    dayButtons.forEach(btn => btn.addEventListener('click', handleDaySelect));
    
    // Students
    studentSearch.addEventListener('input', filterStudents);
    filterBtn.addEventListener('click', showStudentFilter);
    loadMoreStudents.addEventListener('click', loadMoreStudentsHandler);
    closeModal.addEventListener('click', () => studentModal.style.display = 'none');
    
    // Gallery
    filterButtons.forEach(btn => btn.addEventListener('click', handleGalleryFilter));
    
    // Tasks
    document.addEventListener('click', handleTaskCheck);
    
    // Contact Form
    contactForm.addEventListener('submit', handleContactSubmit);
    
    // Scroll
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', handleScroll);
    
    // Quick Access
    quickSchedule.addEventListener('click', showTodaySchedule);
    quickTasks.addEventListener('click', () => scrollToSection('#tasks'));
    quickNotes.addEventListener('click', showNotesModal);
    quickChat.addEventListener('click', showChatModal);
    
    // Notification close
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('notification-close')) {
            e.target.closest('.notification').remove();
        }
    });
    
    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === studentModal) studentModal.style.display = 'none';
    });
    
    // Fix mobile touch
    document.addEventListener('touchstart', function() {}, {passive: true});
}

// Load Data Awal
function loadInitialData() {
    // Simulate loading
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            showNotification('Selamat Datang!', 'Website Kelas XI TKJ 2 siap digunakan', 'info');
            playSound(successSound);
        }, 500);
    }, 1500);
    
    // Load semua data
    loadSchedule('senin');
    loadStudents();
    loadGallery();
    loadAnnouncements();
    loadTasks();
    updateCurrentClass();
}

// Navigation Functions
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    playSound(clickSound);
}

function handleNavClick(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    // Update active nav
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    
    // Close mobile menu jika terbuka
    if (navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
    
    // Scroll ke section
    scrollToSection(targetId);
    playSound(clickSound);
}

function scrollToSection(selector) {
    const section = document.querySelector(selector);
    if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: section.offsetTop - navHeight,
            behavior: 'smooth'
        });
    }
}

// Theme & Sound Functions
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    const icon = themeToggle.querySelector('i');
    if (isDarkMode) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
    
    showNotification('Tema Diubah', isDarkMode ? 'Mode Gelap Aktif' : 'Mode Terang Aktif', 'info');
    playSound(clickSound);
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const icon = soundToggle.querySelector('i');
    
    if (soundEnabled) {
        icon.classList.replace('fa-volume-mute', 'fa-volume-up');
        showNotification('Suara Diaktifkan', 'Efek suara sekarang aktif', 'info');
    } else {
        icon.classList.replace('fa-volume-up', 'fa-volume-mute');
        showNotification('Suara Dimatikan', 'Efek suara sekarang nonaktif', 'info');
    }
    
    playSound(clickSound);
    localStorage.setItem('sound', soundEnabled ? 'on' : 'off');
}

function loadSettings() {
    const savedTheme = localStorage.getItem('theme');
    const savedSound = localStorage.getItem('sound');
    
    if (savedTheme === 'dark') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
    
    if (savedSound === 'off') {
        soundEnabled = false;
        soundToggle.querySelector('i').classList.replace('fa-volume-up', 'fa-volume-mute');
    }
}

// Schedule Functions
function handleDaySelect(e) {
    const day = this.getAttribute('data-day');
    
    // Update active button
    dayButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    
    // Load schedule
    loadSchedule(day);
    playSound(clickSound);
}

function loadSchedule(day) {
    const schedule = scheduleData[day];
    if (!schedule) return;
    
    scheduleTable.innerHTML = `
        <div class="schedule-header">
            <div>Waktu</div>
            <div>Mata Pelajaran</div>
            <div>Guru</div>
            <div>Ruang</div>
        </div>
    `;
    
    schedule.forEach((item, index) => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = `schedule-item ${item.current ? 'current' : ''}`;
        scheduleItem.innerHTML = `
            <div>${item.time}</div>
            <div>${item.subject}</div>
            <div>${item.teacher}</div>
            <div>${item.room}</div>
        `;
        
        scheduleItem.addEventListener('click', () => {
            showClassDetail(item);
        });
        
        scheduleTable.appendChild(scheduleItem);
    });
}

function updateCurrentClass() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const days = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    const today = days[now.getDay()];
    
    if (scheduleData[today]) {
        const todaySchedule = scheduleData[today];
        let current = null;
        let next = null;
        
        for (let i = 0; i < todaySchedule.length; i++) {
            const item = todaySchedule[i];
            if (item.subject === 'Istirahat' || item.subject === 'Sholat Jumat') continue;
            
            const [start, end] = item.time.split(' - ');
            const [startHour, startMinute] = start.split(':').map(Number);
            const [endHour, endMinute] = end.split(':').map(Number);
            
            const startTime = startHour * 60 + startMinute;
            const endTime = endHour * 60 + endMinute;
            
            if (currentTime >= startTime && currentTime <= endTime) {
                current = item;
                next = todaySchedule[i + 1] || todaySchedule[0];
                break;
            } else if (currentTime < startTime) {
                next = item;
                break;
            }
        }
        
        if (current) {
            currentClass.innerHTML = `
                <div class="class-time">${current.time}</div>
                <div class="class-name">${current.subject}</div>
                <div class="class-teacher">${current.teacher}</div>
                <div class="class-room">${current.room}</div>
            `;
        } else {
            currentClass.innerHTML = `
                <div class="class-time">--:-- - --:--</div>
                <div class="class-name">Tidak Ada Pelajaran</div>
                <div class="class-teacher">-</div>
                <div class="class-room">-</div>
            `;
        }
        
        if (next && next.subject !== 'Istirahat' && next.subject !== 'Sholat Jumat') {
            upcomingClass.innerHTML = `
                <div class="class-time">${next.time}</div>
                <div class="class-name">${next.subject}</div>
                <div class="class-teacher">${next.teacher}</div>
                <div class="class-room">${next.room}</div>
            `;
        } else {
            upcomingClass.innerHTML = `
                <div class="class-time">--:-- - --:--</div>
                <div class="class-name">Tidak Ada Pelajaran</div>
                <div class="class-teacher">-</div>
                <div class="class-room">-</div>
            `;
        }
    }
}

// Students Functions
function loadStudents() {
    studentsContainer.innerHTML = '';
    const startIndex = (currentStudentPage - 1) * studentsPerPage;
    const endIndex = startIndex + studentsPerPage;
    
    studentsData.slice(startIndex, endIndex).forEach(student => {
        const studentCard = createStudentCard(student);
        studentsContainer.appendChild(studentCard);
    });
    
    updateLoadMoreButton();
}

function createStudentCard(student) {
    const card = document.createElement('div');
    card.className = 'student-card animate-on-scroll';
    card.dataset.id = student.id;
    
    const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    
    card.innerHTML = `
        <div class="student-img" style="background: ${student.avatarColor || '#4361ee'}">
            ${initials}
        </div>
        <div class="student-info">
            <h3 class="student-name">${student.name}</h3>
            <p class="student-nis">NIS: ${student.nis}</p>
            <span class="student-role">${student.role}</span>
        </div>
    `;
    
    card.addEventListener('click', () => showStudentDetail(student.id));
    return card;
}

function filterStudents() {
    const searchTerm = studentSearch.value.toLowerCase();
    const cards = document.querySelectorAll('.student-card');
    
    cards.forEach(card => {
        const name = card.querySelector('.student-name').textContent.toLowerCase();
        const nis = card.querySelector('.student-nis').textContent.toLowerCase();
        
        card.style.display = (name.includes(searchTerm) || nis.includes(searchTerm)) 
            ? 'block' 
            : 'none';
    });
}

function showStudentFilter() {
    const filterOptions = `
        <div class="filter-modal">
            <h3>Filter Siswa</h3>
            <select id="genderFilter">
                <option value="all">Semua Gender</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
            </select>
            <select id="roleFilter">
                <option value="all">Semua Peran</option>
                <option value="Ketua Kelas">Ketua Kelas</option>
                <option value="Wakil Ketua">Wakil Ketua</option>
                <option value="Sekretaris">Sekretaris</option>
                <option value="Bendahara">Bendahara</option>
                <option value="Siswa">Siswa</option>
            </select>
            <button onclick="applyStudentFilter()">Terapkan Filter</button>
        </div>
    `;
    
    alert('Fitur filter lengkap akan segera hadir! Untuk sekarang gunakan fitur pencarian di atas.');
    playSound(clickSound);
}

function loadMoreStudentsHandler() {
    currentStudentPage++;
    loadStudents();
    playSound(clickSound);
}

function updateLoadMoreButton() {
    const totalLoaded = currentStudentPage * studentsPerPage;
    if (totalLoaded >= studentsData.length) {
        loadMoreStudents.style.display = 'none';
    } else {
        loadMoreStudents.style.display = 'block';
        loadMoreStudents.textContent = `Tampilkan Lebih Banyak (${studentsData.length - totalLoaded} tersisa)`;
    }
}

function showStudentDetail(studentId) {
    const student = studentsData.find(s => s.id === studentId);
    if (!student) return;
    
    const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    
    modalBody.innerHTML = `
        <div class="student-modal-content">
            <div class="modal-header" style="background: ${student.avatarColor}; padding: 30px; text-align: center; color: white;">
                <div style="font-size: 3rem; font-weight: bold; margin-bottom: 10px;">${initials}</div>
                <h2 style="margin: 0;">${student.name}</h2>
                <p style="opacity: 0.9; margin: 5px 0;">${student.role} | ${student.gender === 'L' ? 'Laki-laki' : 'Perempuan'}</p>
            </div>
            <div style="padding: 30px;">
                <div class="info-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                    <div class="info-item">
                        <strong>NIS:</strong>
                        <p>${student.nis}</p>
                    </div>
                    <div class="info-item">
                        <strong>Tanggal Lahir:</strong>
                        <p>${student.birthDate}</p>
                    </div>
                    <div class="info-item">
                        <strong>Spesialisasi:</strong>
                        <p>${student.specialization}</p>
                    </div>
                    <div class="info-item">
                        <strong>Email:</strong>
                        <p>${student.email}</p>
                    </div>
                    <div class="info-item">
                        <strong>Telepon:</strong>
                        <p>${student.phone}</p>
                    </div>
                    <div class="info-item">
                        <strong>Alamat:</strong>
                        <p>${student.address}</p>
                    </div>
                </div>
                
                <h3 style="color: var(--primary-color); margin-bottom: 15px;">Prestasi & Keahlian</h3>
                <ul style="list-style: none; padding: 0;">
                    ${student.achievements.map(achievement => `
                        <li style="padding: 10px; background: rgba(67, 97, 238, 0.1); margin-bottom: 10px; border-radius: 8px; display: flex; align-items: center; gap: 10px;">
                            <i class="fas fa-trophy" style="color: #f59e0b;"></i>
                            ${achievement}
                        </li>
                    `).join('')}
                </ul>
                
                <button class="cta-button" style="width: 100%; margin-top: 20px;" onclick="sendMessageToStudent('${student.name}')">
                    <i class="fas fa-envelope"></i> Kirim Pesan
                </button>
            </div>
        </div>
    `;
    
    studentModal.style.display = 'flex';
    playSound(clickSound);
}

// Gallery Functions
function loadGallery() {
    galleryGrid.innerHTML = '';
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item animate-on-scroll ${item.category}`;
        galleryItem.dataset.category = item.category;
        
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}" class="gallery-img" loading="lazy">
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => showImageModal(item));
        galleryGrid.appendChild(galleryItem);
    });
}

function handleGalleryFilter(e) {
    const filter = this.dataset.filter;
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    
    // Filter gallery
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    playSound(clickSound);
}

// Announcements Functions
function loadAnnouncements() {
    announcementContainer.innerHTML = '';
    
    announcementsData.forEach(announcement => {
        const announcementCard = document.createElement('div');
        announcementCard.className = 'announcement-card animate-on-scroll';
        
        announcementCard.innerHTML = `
            <div class="announcement-header">
                <h3 class="announcement-title">${announcement.title}</h3>
                <span class="announcement-date">${announcement.date} ${announcement.urgent ? '<i class="fas fa-exclamation-circle" style="color: var(--danger-color); margin-left: 5px;"></i>' : ''}</span>
            </div>
            <div class="announcement-content">
                <p>${announcement.content}</p>
            </div>
            <div class="announcement-author">
                <p>${announcement.author}</p>
            </div>
        `;
        
        announcementCard.addEventListener('click', () => {
            showAnnouncementDetail(announcement);
        });
        
        announcementContainer.appendChild(announcementCard);
    });
}

// Tasks Functions
function loadTasks() {
    tasksList.innerHTML = '';
    
    let completed = 0;
    let pending = 0;
    let urgent = 0;
    
    tasksData.forEach(task => {
        if (task.completed) completed++;
        else pending++;
        if (task.urgent && !task.completed) urgent++;
        
        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
        taskItem.dataset.id = task.id;
        
        taskItem.innerHTML = `
            <div class="task-checkbox"></div>
            <div class="task-content">
                <div class="task-title">${task.title}</div>
                <div class="task-info">
                    <span class="task-subject">${task.subject}</span>
                    <span class="task-deadline ${task.urgent ? 'urgent' : ''}">
                        <i class="far fa-calendar-alt"></i> ${task.deadline}
                    </span>
                </div>
            </div>
        `;
        
        tasksList.appendChild(taskItem);
    });
    
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;
    urgentTasks.textContent = urgent;
}

function handleTaskCheck(e) {
    if (e.target.classList.contains('task-checkbox')) {
        const taskItem = e.target.closest('.task-item');
        const taskId = parseInt(taskItem.dataset.id);
        const task = tasksData.find(t => t.id === taskId);
        
        if (task) {
            task.completed = !task.completed;
            taskItem.classList.toggle('completed');
            
            // Update stats
            loadTasks();
            
            // Show notification
            if (task.completed) {
                showNotification('Tugas Selesai!', `${task.title} telah diselesaikan`, 'success');
                playSound(successSound);
                triggerConfetti();
            }
        }
    }
}

// Contact Form Functions
function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    if (!name || !email || !subject || !message) {
        showNotification('Error', 'Harap isi semua field!', 'danger');
        return;
    }
    
    // Simulate sending
    submitContact.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    submitContact.disabled = true;
    
    setTimeout(() => {
        showNotification('Berhasil!', 'Pesan telah terkirim. Kami akan membalas segera.', 'success');
        contactForm.reset();
        submitContact.innerHTML = '<span>Kirim Pesan</span><i class="fas fa-paper-plane"></i>';
        submitContact.disabled = false;
        playSound(successSound);
        triggerConfetti();
    }, 1500);
}

// Scroll Functions
function handleScroll() {
    // Progress bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
    
    // Back to top button
    if (winScroll > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
    
    // Scroll animations
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

function setupScrollAnimations() {
    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
}

// Quick Access Functions
function showTodaySchedule() {
    const days = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    const today = days[new Date().getDay()];
    
    // Update active button
    dayButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.day-btn[data-day="${today}"]`)?.classList.add('active');
    
    // Load schedule
    if (scheduleData[today]) {
        loadSchedule(today);
        scrollToSection('#schedule');
    } else {
        showNotification('Info', 'Tidak ada jadwal hari ini', 'info');
    }
    
    playSound(clickSound);
}

function showNotesModal() {
    alert('Fitur catatan akan segera hadir!');
    playSound(clickSound);
}

function showChatModal() {
    alert('Fitur chat kelas akan segera hadir!');
    playSound(clickSound);
}

// Notification Functions
function showNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        info: 'fas fa-info-circle',
        success: 'fas fa-check-circle',
        warning: 'fas fa-exclamation-triangle',
        danger: 'fas fa-exclamation-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="${icons[type] || icons.info}"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    notificationContainer.appendChild(notification);
    
    // Show animation
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Play sound
    if (soundEnabled) {
        notificationSound.currentTime = 0;
        notificationSound.play().catch(e => console.log('Audio error:', e));
    }
    
    // Auto remove
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, 5000);
}

// Audio Functions
function playSound(audioElement) {
    if (soundEnabled && audioElement) {
        audioElement.currentTime = 0;
        audioElement.play().catch(e => console.log('Audio error:', e));
    }
}

// Confetti Functions
function setupConfettiCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    });
}

function triggerConfetti() {
    if (confettiActive) return;
    confettiActive = true;
    
    const ctx = confettiCanvas.getContext('2d');
    const confettiCount = 150;
    const confetti = [];
    
    const colors = ['#4361ee', '#3a0ca3', '#4cc9f0', '#7209b7', '#f72585'];
    
    // Create confetti
    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            r: Math.random() * 10 + 5,
            d: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleIncrement: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }
    
    // Animation
    let animationFrame;
    function animate() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        
        for (let i = 0; i < confetti.length; i++) {
            const p = confetti[i];
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
            ctx.stroke();
            
            p.tiltAngle += p.tiltAngleIncrement;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.d);
            p.tilt = Math.sin(p.tiltAngle) * 15;
            
            if (p.y > confettiCanvas.height) {
                confetti[i] = {
                    x: Math.random() * confettiCanvas.width,
                    y: -10,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt,
                    tiltAngleIncrement: p.tiltAngleIncrement,
                    tiltAngle: p.tiltAngle
                };
            }
        }
        
        animationFrame = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Stop after 3 seconds
    setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiActive = false;
    }, 3000);
}

// Utility Functions
function updateRealTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('id-ID');
    const date = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const footerTime = document.getElementById('footerTime');
    if (footerTime) {
        footerTime.textContent = `Terakhir update: ${time}`;
    }
}

function startAnimations() {
    // Animate floating elements
    const floaters = document.querySelectorAll('.floating-element');
    floaters.forEach((floater, index) => {
        floater.style.animationDelay = `${index * 2}s`;
    });
    
    // Show welcome message
    setTimeout(() => {
        showNotification('Tips', 'Klik elemen yang berwarna untuk interaksi lebih lanjut!', 'info');
    }, 3000);
}

function fixViewport() {
    // Fix untuk mobile viewport
    let viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
        viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
    }
    
    // Prevent zoom on input focus
    document.addEventListener('touchstart', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
            document.body.style.zoom = "100%";
        }
    });
}

// Modal Functions (yang belum diimplementasi)
function showVideoModal() {
    alert('Fitur video akan segera hadir!');
    playSound(clickSound);
}

function showImageModal(item) {
    alert(`Galeri: ${item.title}\n\n${item.description}`);
    playSound(clickSound);
}

function showAnnouncementDetail(announcement) {
    alert(`Pengumuman: ${announcement.title}\n\n${announcement.content}\n\n${announcement.author}`);
    playSound(clickSound);
}

function showClassDetail(classInfo) {
    alert(`Kelas: ${classInfo.subject}\nWaktu: ${classInfo.time}\nGuru: ${classInfo.teacher}\nRuang: ${classInfo.room}`);
    playSound(clickSound);
}

// Global functions untuk dipanggil dari HTML
window.sendMessageToStudent = function(studentName) {
    alert(`Mengirim pesan ke ${studentName}...\n\nFitur chat akan segera hadir!`);
    playSound(clickSound);
};

window.toggleTask = function(taskId) {
    const task = tasksData.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        loadTasks();
    }
};

// Apply student filter function
window.applyStudentFilter = function() {
    const genderFilter = document.getElementById('genderFilter').value;
    const roleFilter = document.getElementById('roleFilter').value;
    
    // Filter logic akan diimplementasi nanti
    console.log('Filter applied:', { genderFilter, roleFilter });
};