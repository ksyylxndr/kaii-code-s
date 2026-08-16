// Data siswa
const studentsData = [
    { id: 1, name: "Achmad Suhada", nis: "202411001", role: "Siswa" },
    { id: 2, name: "Ade Syarif H.", nis: "202411002", role: "Siswa" },
    { id: 3, name: "Adly Mulya R.", nis: "202411003", role: "Wakil Ketua" },
    { id: 4, name: "Affrayna Martha A.", nis: "202411004", role: "Siswa" },
    { id: 5, name: "Ahmad Aji Sukma", nis: "202411005", role: "Siswa" },
    { id: 6, name: "Arif Kurniawan", nis: "202411006", role: "Siswa" },
    { id: 7, name: "Arya Malik S.", nis: "202411007", role: "Siswa" },
    { id: 8, name: "Asep Saepullah", nis: "202411008", role: "Siswa" },
    { id: 9, name: "Cornelia Agustina S.", nis: "202411009", role: "Sekretaris 1" },
    { id: 10, name: "Deriko Aditya W.", nis: "202411010", role: "Siswa" },
    { id: 11, name: "Dimas Fatih M.", nis: "202411011", role: "Siswa" },
    { id: 12, name: "Febriana Wulandari", nis: "202411012", role: "Sekretaris 2" },
    { id: 13, name: "Fernando Rizky F.", nis: "202411013", role: "Siswa" },
    { id: 14, name: "Hikmatiar Umam", nis: "202411014", role: "Siswa" },
    { id: 15, name: "Ian Kurniawan", nis: "202411015", role: "Siswa" },
    { id: 16, name: "Jayus Hermawan", nis: "202411016", role: "Siswa" },
    { id: 17, name: "Kasya Putra", nis: "202411017", role: "Bendahara 1" },
    { id: 18, name: "Michael Adrian M.", nis: "202411018", role: "Siswa" },
    { id: 19, name: "Mohamad Saripudin", nis: "202411019", role: "Siswa" },
    { id: 20, name: "Mualif Ikhsan R.", nis: "202411020", role: "Bendahara 2" },
    { id: 21, name: "Mufid", nis: "202411021", role: "Siswa" },
    { id: 22, name: "Muhamad Aditya G.", nis: "202411022", role: "Siswa" },
    { id: 23, name: "Muhamad Rizky A.", nis: "202411023", role: "Siswa" },
    { id: 24, name: "Muhammad Fathurohman", nis: "202411024", role: "Siswa" },
    { id: 25, name: "Muhammad Fijar R.", nis: "202411025", role: "Ketua Kelas" },
    { id: 26, name: "Muhammad Irwansyah", nis: "202411026", role: "Siswa" },
    { id: 27, name: "Muhammad Rifal", nis: "202411027", role: "Siswa" },
    { id: 28, name: "Nabila Savina", nis: "202411028", role: "Siswa" },
    { id: 29, name: "Niha Lasnati", nis: "202411029", role: "Siswa" },
    { id: 30, name: "Noval Al Ayubi", nis: "202411030", role: "Siswa" },
    { id: 31, name: "Nuril Fajri Al-Faruq", nis: "202411031", role: "Siswa" },
    { id: 32, name: "Rahmawati", nis: "202411032", role: "Siswa" },
    { id: 33, name: "Rizky Pratama", nis: "202411033", role: "Siswa" },
    { id: 34, name: "Rolista Sari", nis: "202411034", role: "Siswa" },
    { id: 35, name: "Roni Arga Pratama", nis: "202411035", role: "Siswa" },
    { id: 36, name: "Sadar Sohmo Sihotang", nis: "202411036", role: "Siswa" },
    { id: 37, name: "Yunita Saridevi", nis: "202411037", role: "Siswa" },
    { id: 38, name: "Zahra Desita", nis: "202411038", role: "Siswa" }
];

// Data jadwal
const scheduleData = {
    senin: [
        { time: "07:00 - 08:30", subject: "Jaringan Komputer", teacher: "Ahmad Rizki, S.Kom", room: "Lab. Jaringan" },
        { time: "08:30 - 10:00", subject: "Pemrograman Web", teacher: "Budi Santoso, M.Kom", room: "Lab. Programming" },
        { time: "10:00 - 10:15", subject: "Istirahat", teacher: "-", room: "-" },
        { time: "10:15 - 11:45", subject: "Sistem Operasi", teacher: "Dewi Anggraini, S.Kom", room: "Lab. Software" },
        { time: "11:45 - 13:15", subject: "Basis Data", teacher: "Rina Hartati, S.Kom", room: "Lab. Database" }
    ],
    selasa: [
        { time: "07:00 - 08:30", subject: "Pemrograman Dasar", teacher: "Sari Dewi, M.Kom", room: "Lab. Programming" },
        { time: "08:30 - 10:00", subject: "Perakitan PC", teacher: "Andi Wijaya, S.T", room: "Lab. Hardware" },
        { time: "10:00 - 10:15", subject: "Istirahat", teacher: "-", room: "-" },
        { time: "10:15 - 11:45", subject: "Matematika", teacher: "Linda Sari, S.Pd", room: "R. 201" },
        { time: "11:45 - 13:15", subject: "Bahasa Inggris", teacher: "Siti Nurjanah, S.Pd", room: "R. 202" }
    ],
    rabu: [
        { time: "07:00 - 08:30", subject: "Keamanan Jaringan", teacher: "Ahmad Rizki, S.Kom", room: "Lab. Jaringan" },
        { time: "08:30 - 10:00", subject: "Pemrograman Mobile", teacher: "Budi Santoso, M.Kom", room: "Lab. Programming" },
        { time: "10:00 - 10:15", subject: "Istirahat", teacher: "-", room: "-" },
        { time: "10:15 - 11:45", subject: "PKWU", teacher: "Eni Nurfitriani, S.Pd.I", room: "Lab. Produksi" },
        { time: "11:45 - 13:15", subject: "Sejarah", teacher: "Dewi Anggraini, S.Pd", room: "R. 203" }
    ],
    kamis: [
        { time: "07:00 - 08:30", subject: "Administrasi Server", teacher: "Rina Hartati, S.Kom", room: "Lab. Server" },
        { time: "08:30 - 10:00", subject: "Pemeliharaan PC", teacher: "Andi Wijaya, S.T", room: "Lab. Hardware" },
        { time: "10:00 - 10:15", subject: "Istirahat", teacher: "-", room: "-" },
        { time: "10:15 - 11:45", subject: "Bahasa Indonesia", teacher: "Sri Mulyani, S.Pd", room: "R. 204" },
        { time: "11:45 - 13:15", subject: "Pendidikan Agama", teacher: "H. Muhammad Ali", room: "R. 205" }
    ],
    jumat: [
        { time: "07:00 - 08:30", subject: "Project TKJ", teacher: "Semua Guru TKJ", room: "Lab. Project" },
        { time: "08:30 - 10:00", subject: "Presentasi Project", teacher: "Wali & Guru", room: "Aula" },
        { time: "10:00 - 10:30", subject: "Istirahat", teacher: "-", room: "-" },
        { time: "10:30 - 12:00", subject: "Olahraga", teacher: "Ricky Perdana, M.Or", room: "Lapangan" }
    ]
};

// Data galeri
const galleryData = [
    { id: 1, src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400", category: "practicum", title: "Praktikum Jaringan", desc: "Konfigurasi router dan switch" },
    { id: 2, src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400", category: "practicum", title: "Pemrograman Web", desc: "Sesi coding di lab programming" },
    { id: 3, src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400", category: "practicum", title: "Perakitan PC", desc: "Praktikum hardware" },
    { id: 4, src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400", category: "activity", title: "Presentasi", desc: "Presentasi hasil project" },
    { id: 5, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400", category: "achievement", title: "Lomba Jaringan", desc: "Juara 1 lomba jaringan" },
    { id: 6, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400", category: "activity", title: "Team Building", desc: "Kegiatan bersama" }
];

// Data pengumuman
const announcementsData = [
    { id: 1, title: "Ujian Praktikum Jaringan", date: "25 Okt 2024", content: "Ujian praktikum jaringan komputer akan dilaksanakan tanggal 30 Oktober 2024.", author: "Ahmad Rizki, S.Kom" },
    { id: 2, title: "Project Akhir Semester", date: "20 Okt 2024", content: "Deadline project akhir semester 15 November 2024. Website dinamis minimal 5 halaman.", author: "Budi Santoso, M.Kom" },
    { id: 3, title: "Kompetisi Coding", date: "15 Okt 2024", content: "Pendaftaran Kompetisi Coding Nasional dibuka hingga 30 Oktober 2024.", author: "M. Fijar Razzaqi" },
    { id: 4, title: "Workshop Cybersecurity", date: "10 Okt 2024", content: "Workshop cybersecurity akan diadakan 5 November 2024 bersama praktisi IT.", author: "Eni Nurfitriani, S.Pd.I" }
];

// Data tugas
const tasksData = [
    { id: 1, title: "Konfigurasi VLAN", subject: "Jaringan Komputer", deadline: "28 Okt 2024", completed: false, urgent: true },
    { id: 2, title: "Website E-commerce", subject: "Pemrograman Web", deadline: "5 Nov 2024", completed: true, urgent: false },
    { id: 3, title: "Analisis Keamanan", subject: "Keamanan Jaringan", deadline: "2 Nov 2024", completed: false, urgent: true },
    { id: 4, title: "Database Perpustakaan", subject: "Basis Data", deadline: "8 Nov 2024", completed: false, urgent: false },
    { id: 5, title: "App Android Todo List", subject: "Mobile Programming", deadline: "12 Nov 2024", completed: false, urgent: false }
];

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const exploreBtn = document.getElementById('exploreBtn');
const dayButtons = document.querySelectorAll('.day-btn');
const scheduleTable = document.getElementById('scheduleTable');
const currentClass = document.getElementById('currentClass');
const nextClass = document.getElementById('nextClass');
const studentSearch = document.getElementById('studentSearch');
const studentsContainer = document.getElementById('studentsContainer');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryGrid = document.getElementById('galleryGrid');
const announcementContainer = document.getElementById('announcementContainer');
const tasksList = document.getElementById('tasksList');
const completedTasks = document.getElementById('completedTasks');
const pendingTasks = document.getElementById('pendingTasks');
const urgentTasks = document.getElementById('urgentTasks');
const contactForm = document.getElementById('contactForm');
const backToTop = document.getElementById('backToTop');

// Variables
let currentStudentPage = 1;
const studentsPerPage = 12;
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Remove loading screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);

    // Load data
    loadSchedule('senin');
    loadStudents();
    loadGallery();
    loadAnnouncements();
    loadTasks();
    updateCurrentClass();

    // Setup event listeners
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Menu toggle
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Update active nav
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
            
            // Scroll to section
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: targetSection.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Explore button
    exploreBtn.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Schedule day buttons
    dayButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const day = this.getAttribute('data-day');
            loadSchedule(day);
            
            // Update active button
            dayButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Student search
    studentSearch.addEventListener('input', filterStudents);
    
    // Load more students
    loadMoreBtn.addEventListener('click', loadMoreStudents);
    
    // Gallery filter
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery
            filterGallery(filter);
        });
    });
    
    // Contact form
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pesan berhasil dikirim!');
        this.reset();
    });
    
    // Back to top
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Task checkboxes
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('task-checkbox')) {
            const taskItem = e.target.closest('.task-item');
            const taskId = parseInt(taskItem.dataset.id);
            const task = tasksData.find(t => t.id === taskId);
            
            if (task) {
                task.completed = !task.completed;
                loadTasks();
            }
        }
    });
}

// Functions
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
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
    
    schedule.forEach(item => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.innerHTML = `
            <div>${item.time}</div>
            <div>${item.subject}</div>
            <div>${item.teacher}</div>
            <div>${item.room}</div>
        `;
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
            if (item.subject === 'Istirahat') continue;
            
            const [start, end] = item.time.split(' - ');
            const [startHour, startMinute] = start.split(':').map(Number);
            const [endHour, endMinute] = end.split(':').map(Number);
            
            const startTime = startHour * 60 + startMinute;
            const endTime = endHour * 60 + endMinute;
            
            if (currentTime >= startTime && currentTime <= endTime) {
                current = item;
                if (i + 1 < todaySchedule.length) {
                    next = todaySchedule[i + 1];
                }
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
            `;
        }
        
        if (next && next.subject !== 'Istirahat') {
            nextClass.innerHTML = `
                <div class="class-time">${next.time}</div>
                <div class="class-name">${next.subject}</div>
            `;
        }
    }
}

function loadStudents() {
    const start = (currentStudentPage - 1) * studentsPerPage;
    const end = start + studentsPerPage;
    const students = studentsData.slice(start, end);
    
    students.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card fade-in-up';
        studentCard.innerHTML = `
            <div class="student-avatar">${getInitials(student.name)}</div>
            <div class="student-name">${student.name}</div>
            <div class="student-nis">${student.nis}</div>
            <div class="student-role">${student.role}</div>
        `;
        studentsContainer.appendChild(studentCard);
    });
    
    // Update load more button
    if (end >= studentsData.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'flex';
    }
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2);
}

function filterStudents() {
    const searchTerm = studentSearch.value.toLowerCase();
    const cards = document.querySelectorAll('.student-card');
    
    cards.forEach(card => {
        const name = card.querySelector('.student-name').textContent.toLowerCase();
        card.style.display = name.includes(searchTerm) ? 'block' : 'none';
    });
}

function loadMoreStudents() {
    currentStudentPage++;
    loadStudents();
}

function loadGallery() {
    galleryGrid.innerHTML = '';
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in-up';
        galleryItem.dataset.category = item.category;
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

function filterGallery(filter) {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function loadAnnouncements() {
    announcementContainer.innerHTML = '';
    
    announcementsData.forEach(announcement => {
        const announcementCard = document.createElement('div');
        announcementCard.className = 'announcement-card fade-in-up';
        announcementCard.innerHTML = `
            <div class="announcement-header">
                <div class="announcement-title">${announcement.title}</div>
                <div class="announcement-date">${announcement.date}</div>
            </div>
            <div class="announcement-content">${announcement.content}</div>
            <div class="announcement-author">${announcement.author}</div>
        `;
        announcementContainer.appendChild(announcementCard);
    });
}

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
                    <span>${task.subject}</span>
                    <span class="${task.urgent ? 'task-deadline urgent' : 'task-deadline'}">${task.deadline}</span>
                </div>
            </div>
        `;
        tasksList.appendChild(taskItem);
    });
    
    // Update stats
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;
    urgentTasks.textContent = urgent;
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.querySelector('i').classList.remove('fa-moon');
    themeToggle.querySelector('i').classList.add('fa-sun');
}