// Data untuk website kelas XI TKJ 2

// Data Jadwal Pelajaran TKJ
const scheduleData = {
    senin: [
        { time: "07:00 - 08:30", subject: "Jaringan Komputer", teacher: "Ahmad Rizki, S.Kom", room: "Lab. Jaringan", current: true },
        { time: "08:30 - 10:00", subject: "Pemrograman Web", teacher: "Budi Santoso, M.Kom", room: "Lab. Programming", current: false },
        { time: "10:00 - 10:15", subject: "Istirahat", teacher: "-", room: "-", current: false },
        { time: "10:15 - 11:45", subject: "Sistem Operasi", teacher: "Dewi Anggraini, S.Kom", room: "Lab. Software", current: false },
        { time: "11:45 - 13:15", subject: "Basis Data", teacher: "Rina Hartati, S.Kom", room: "Lab. Database", current: false }
    ],
    selasa: [
        { time: "07:00 - 08:30", subject: "Pemrograman Dasar", teacher: "Sari Dewi, M.Kom", room: "Lab. Programming", current: false },
        { time: "08:30 - 10:00", subject: "Perakitan PC", teacher: "Andi Wijaya, S.T", room: "Lab. Hardware", current: false },
        { time: "10:00 - 10:15", subject: "Istirahat", teacher: "-", room: "-", current: false },
        { time: "10:15 - 11:45", subject: "Matematika", teacher: "Linda Sari, S.Pd", room: "R. 201", current: false },
        { time: "11:45 - 13:15", subject: "Bahasa Inggris", teacher: "Siti Nurjanah, S.Pd", room: "R. 202", current: false }
    ],
    rabu: [
        { time: "07:00 - 08:30", subject: "Keamanan Jaringan", teacher: "Ahmad Rizki, S.Kom", room: "Lab. Jaringan", current: false },
        { time: "08:30 - 10:00", subject: "Pemrograman Mobile", teacher: "Budi Santoso, M.Kom", room: "Lab. Programming", current: false },
        { time: "10:00 - 10:15", subject: "Istirahat", teacher: "-", room: "-", current: false },
        { time: "10:15 - 11:45", subject: "PKWU (Produk)", teacher: "Eni Nurfitriani, S.Pd.I", room: "Lab. Produksi", current: false },
        { time: "11:45 - 13:15", subject: "Sejarah Indonesia", teacher: "Dewi Anggraini, S.Pd", room: "R. 203", current: false }
    ],
    kamis: [
        { time: "07:00 - 08:30", subject: "Administrasi Server", teacher: "Rina Hartati, S.Kom", room: "Lab. Server", current: false },
        { time: "08:30 - 10:00", subject: "Pemeliharaan PC", teacher: "Andi Wijaya, S.T", room: "Lab. Hardware", current: false },
        { time: "10:00 - 10:15", subject: "Istirahat", teacher: "-", room: "-", current: false },
        { time: "10:15 - 11:45", subject: "Bahasa Indonesia", teacher: "Sri Mulyani, S.Pd", room: "R. 204", current: false },
        { time: "11:45 - 13:15", subject: "Pendidikan Agama", teacher: "H. Muhammad Ali", room: "R. 205", current: false }
    ],
    jumat: [
        { time: "07:00 - 08:30", subject: "Project TKJ", teacher: "Semua Guru TKJ", room: "Lab. Project", current: false },
        { time: "08:30 - 10:00", subject: "Presentasi Project", teacher: "Wali Kelas & Guru", room: "Aula", current: false },
        { time: "10:00 - 10:30", subject: "Istirahat", teacher: "-", room: "-", current: false },
        { time: "10:30 - 12:00", subject: "Olahraga", teacher: "Ricky Perdana, M.Or", room: "Lapangan", current: false },
        { time: "12:00 - 13:00", subject: "Sholat Jumat", teacher: "-", room: "Musholla", current: false }
    ]
};

// Data Siswa XI TKJ 2
const studentsData = [
    { id: 1, name: "Achmad Suhada", nis: "202411001", role: "Siswa", gender: "L", birthDate: "10 Januari 2007", address: "Kota Serang", email: "achmad.suhada@student.sch.id", phone: "081234567001", specialization: "Networking", achievements: ["Aktif di ekstra jaringan", "Juara troubleshooting PC"], avatarColor: "#4361ee" },
    { id: 2, name: "Ade Syarif H.", nis: "202411002", role: "Siswa", gender: "L", birthDate: "15 Februari 2007", address: "Kota Serang", email: "ade.syarif@student.sch.id", phone: "081234567002", specialization: "Programming", achievements: ["Pengembang web junior", "Juara coding challenge"], avatarColor: "#3a0ca3" },
    { id: 3, name: "Adly Mulya R.", nis: "202411003", role: "Wakil Ketua", gender: "L", birthDate: "20 Maret 2007", address: "Kota Serang", email: "adly.mulya@student.sch.id", phone: "081234567003", specialization: "Leadership", achievements: ["Wakil ketua kelas", "Koordinator project"], avatarColor: "#4cc9f0" },
    { id: 4, name: "Affrayna Martha A.", nis: "202411004", role: "Siswa", gender: "P", birthDate: "5 April 2007", address: "Kota Serang", email: "affrayna.martha@student.sch.id", phone: "081234567004", specialization: "Design", achievements: ["Desainer UI/UX", "Juara desain web"], avatarColor: "#7209b7" },
    { id: 5, name: "Ahmad Aji Sukma", nis: "202411005", role: "Siswa", gender: "L", birthDate: "12 Mei 2007", address: "Kota Serang", email: "ahmad.aji@student.sch.id", phone: "081234567005", specialization: "Hardware", achievements: ["Teknisi PC", "Juara perakitan tercepat"], avatarColor: "#f72585" },
    { id: 6, name: "Arif Kurniawan", nis: "202411006", role: "Siswa", gender: "L", birthDate: "18 Juni 2007", address: "Kota Serang", email: "arif.kurniawan@student.sch.id", phone: "081234567006", specialization: "Database", achievements: ["Ahli database", "Juara query competition"], avatarColor: "#4361ee" },
    { id: 7, name: "Arya Malik S.", nis: "202411007", role: "Siswa", gender: "L", birthDate: "22 Juli 2007", address: "Kota Serang", email: "arya.malik@student.sch.id", phone: "081234567007", specialization: "Networking", achievements: ["Admin jaringan", "Juara konfigurasi router"], avatarColor: "#3a0ca3" },
    { id: 8, name: "Asep Saepullah", nis: "202411008", role: "Siswa", gender: "L", birthDate: "30 Agustus 2007", address: "Kota Serang", email: "asep.saepullah@student.sch.id", phone: "081234567008", specialization: "Programming", achievements: ["Developer Python", "Juara algoritma"], avatarColor: "#4cc9f0" },
    { id: 9, name: "Cornelia Agustina S.", nis: "202411009", role: "Sekretaris 1", gender: "P", birthDate: "3 September 2007", address: "Kota Serang", email: "cornelia.agustina@student.sch.id", phone: "081234567009", specialization: "Documentation", achievements: ["Sekretaris kelas", "Juara dokumentasi terbaik"], avatarColor: "#7209b7" },
    { id: 10, name: "Deriko Aditya W.", nis: "202411010", role: "Siswa", gender: "L", birthDate: "8 Oktober 2007", address: "Kota Serang", email: "deriko.aditya@student.sch.id", phone: "081234567010", specialization: "Multimedia", achievements: ["Editor video", "Juara editing competition"], avatarColor: "#f72585" },
    { id: 11, name: "Dimas Fatih M.", nis: "202411011", role: "Siswa", gender: "L", birthDate: "14 November 2007", address: "Kota Serang", email: "dimas.fatih@student.sch.id", phone: "081234567011", specialization: "Security", achievements: ["Ethical hacker", "Juara CTF competition"], avatarColor: "#4361ee" },
    { id: 12, name: "Febriana Wulandari", nis: "202411012", role: "Sekretaris 2", gender: "P", birthDate: "19 Desember 2007", address: "Kota Serang", email: "febriana.wulandari@student.sch.id", phone: "081234567012", specialization: "Communication", achievements: ["Sekretaris kelas", "Juara presentasi"], avatarColor: "#3a0ca3" },
    { id: 13, name: "Fernando Rizky F.", nis: "202411013", role: "Siswa", gender: "L", birthDate: "25 Januari 2007", address: "Kota Serang", email: "fernando.rizky@student.sch.id", phone: "081234567013", specialization: "Mobile Dev", achievements: ["Android developer", "Juara app development"], avatarColor: "#4cc9f0" },
    { id: 14, name: "Hikmatiar Umam", nis: "202411014", role: "Siswa", gender: "L", birthDate: "2 Februari 2007", address: "Kota Serang", email: "hikmatiar.umam@student.sch.id", phone: "081234567014", specialization: "Networking", achievements: ["Network specialist", "Juara troubleshooting jaringan"], avatarColor: "#7209b7" },
    { id: 15, name: "Ian Kurniawan", nis: "202411015", role: "Siswa", gender: "L", birthDate: "7 Maret 2007", address: "Kota Serang", email: "ian.kurniawan@student.sch.id", phone: "081234567015", specialization: "Web Dev", achievements: ["Fullstack developer", "Juara web competition"], avatarColor: "#f72585" },
    { id: 16, name: "Jayus Hermawan", nis: "202411016", role: "Siswa", gender: "L", birthDate: "12 April 2007", address: "Kota Serang", email: "jayus.hermawan@student.sch.id", phone: "081234567016", specialization: "Hardware", achievements: ["PC builder", "Juara overclocking"], avatarColor: "#4361ee" },
    { id: 17, name: "Kasya Putra", nis: "202411017", role: "Bendahara 1", gender: "L", birthDate: "17 Mei 2007", address: "Kota Serang", email: "kasya.putra@student.sch.id", phone: "081234567017", specialization: "Finance", achievements: ["Bendahara kelas", "Juara financial planning"], avatarColor: "#3a0ca3" },
    { id: 18, name: "Michael Adrian M.", nis: "202411018", role: "Siswa", gender: "L", birthDate: "23 Juni 2007", address: "Kota Serang", email: "michael.adrian@student.sch.id", phone: "081234567018", specialization: "Game Dev", achievements: ["Game developer", "Juara game jam"], avatarColor: "#4cc9f0" },
    { id: 19, name: "Mohamad Saripudin", nis: "202411019", role: "Siswa", gender: "L", birthDate: "28 Juli 2007", address: "Kota Serang", email: "mohamad.saripudin@student.sch.id", phone: "081234567019", specialization: "Server Admin", achievements: ["Server administrator", "Juara server setup"], avatarColor: "#7209b7" },
    { id: 20, name: "Mualif Ikhsan R.", nis: "202411020", role: "Bendahara 2", gender: "L", birthDate: "2 Agustus 2007", address: "Kota Serang", email: "mualif.ikhsan@student.sch.id", phone: "081234567020", specialization: "Accounting", achievements: ["Bendahara kelas", "Juara budget planning"], avatarColor: "#f72585" },
    { id: 21, name: "Mufid", nis: "202411021", role: "Siswa", gender: "L", birthDate: "7 September 2007", address: "Kota Serang", email: "mufid@student.sch.id", phone: "081234567021", specialization: "Cybersecurity", achievements: ["Security analyst", "Juara security audit"], avatarColor: "#4361ee" },
    { id: 22, name: "Muhamad Aditya G.", nis: "202411022", role: "Siswa", gender: "L", birthDate: "13 Oktober 2007", address: "Kota Serang", email: "muhamad.aditya@student.sch.id", phone: "081234567022", specialization: "AI/ML", achievements: ["AI enthusiast", "Juara machine learning"], avatarColor: "#3a0ca3" },
    { id: 23, name: "Muhamad Rizky A.", nis: "202411023", role: "Siswa", gender: "L", birthDate: "18 November 2007", address: "Kota Serang", email: "muhamad.rizky@student.sch.id", phone: "081234567023", specialization: "IoT", achievements: ["IoT developer", "Juara IoT competition"], avatarColor: "#4cc9f0" },
    { id: 24, name: "Muhammad Fathurohman", nis: "202411024", role: "Siswa", gender: "L", birthDate: "24 Desember 2007", address: "Kota Serang", email: "muhammad.fathurohman@student.sch.id", phone: "081234567024", specialization: "Cloud", achievements: ["Cloud engineer", "Juara cloud deployment"], avatarColor: "#7209b7" },
    { id: 25, name: "Muhammad Fijar R.", nis: "202411025", role: "Ketua Kelas", gender: "L", birthDate: "30 Januari 2007", address: "Kota Serang", email: "muhammad.fijar@student.sch.id", phone: "081234567025", specialization: "Leadership", achievements: ["Ketua kelas", "Juara leadership award"], avatarColor: "#f72585" },
    { id: 26, name: "Muhammad Irwansyah", nis: "202411026", role: "Siswa", gender: "L", birthDate: "5 Februari 2007", address: "Kota Serang", email: "muhammad.irwansyah@student.sch.id", phone: "081234567026", specialization: "DevOps", achievements: ["DevOps engineer", "Juara automation"], avatarColor: "#4361ee" },
    { id: 27, name: "Muhammad Rifal", nis: "202411027", role: "Siswa", gender: "L", birthDate: "11 Maret 2007", address: "Kota Serang", email: "muhammad.rifal@student.sch.id", phone: "081234567027", specialization: "Blockchain", achievements: ["Blockchain developer", "Juara smart contract"], avatarColor: "#3a0ca3" },
    { id: 28, name: "Nabila Savina", nis: "202411028", role: "Siswa", gender: "P", birthDate: "16 April 2007", address: "Kota Serang", email: "nabila.savina@student.sch.id", phone: "081234567028", specialization: "UI/UX", achievements: ["UI/UX designer", "Juara design thinking"], avatarColor: "#4cc9f0" },
    { id: 29, name: "Niha Lasnati", nis: "202411029", role: "Siswa", gender: "P", birthDate: "21 Mei 2007", address: "Kota Serang", email: "niha.lasnati@student.sch.id", phone: "081234567029", specialization: "Content Creator", achievements: ["Content creator", "Juara digital content"], avatarColor: "#7209b7" },
    { id: 30, name: "Noval Al Ayubi", nis: "202411030", role: "Siswa", gender: "L", birthDate: "27 Juni 2007", address: "Kota Serang", email: "noval.ayubi@student.sch.id", phone: "081234567030", specialization: "Embedded Systems", achievements: ["Embedded developer", "Juara embedded programming"], avatarColor: "#f72585" },
    { id: 31, name: "Nuril Fajri Al-Faruq", nis: "202411031", role: "Siswa", gender: "L", birthDate: "2 Juli 2007", address: "Kota Serang", email: "nuril.fajri@student.sch.id", phone: "081234567031", specialization: "Data Science", achievements: ["Data scientist", "Juara data analysis"], avatarColor: "#4361ee" },
    { id: 32, name: "Rahmawati", nis: "202411032", role: "Siswa", gender: "P", birthDate: "7 Agustus 2007", address: "Kota Serang", email: "rahmawati@student.sch.id", phone: "081234567032", specialization: "Testing", achievements: ["QA engineer", "Juara testing competition"], avatarColor: "#3a0ca3" },
    { id: 33, name: "Rizky Pratama", nis: "202411033", role: "Siswa", gender: "L", birthDate: "13 September 2007", address: "Kota Serang", email: "rizky.pratama@student.sch.id", phone: "081234567033", specialization: "System Analysis", achievements: ["System analyst", "Juara system design"], avatarColor: "#4cc9f0" },
    { id: 34, name: "Rolista Sari", nis: "202411034", role: "Siswa", gender: "P", birthDate: "19 Oktober 2007", address: "Kota Serang", email: "rolista.sari@student.sch.id", phone: "081234567034", specialization: "Project Management", achievements: ["Project manager", "Juara project planning"], avatarColor: "#7209b7" },
    { id: 35, name: "Roni Arga Pratama", nis: "202411035", role: "Siswa", gender: "L", birthDate: "25 November 2007", address: "Kota Serang", email: "roni.arga@student.sch.id", phone: "081234567035", specialization: "Technical Writing", achievements: ["Technical writer", "Juara documentation"], avatarColor: "#f72585" },
    { id: 36, name: "Sadar Sohmo Sihotang", nis: "202411036", role: "Siswa", gender: "L", birthDate: "30 Desember 2007", address: "Kota Serang", email: "sadar.sihotang@student.sch.id", phone: "081234567036", specialization: "Virtualization", achievements: ["Virtualization expert", "Juara VM deployment"], avatarColor: "#4361ee" },
    { id: 37, name: "Yunita Saridevi", nis: "202411037", role: "Siswa", gender: "P", birthDate: "4 Januari 2007", address: "Kota Serang", email: "yunita.saridevi@student.sch.id", phone: "081234567037", specialization: "Digital Marketing", achievements: ["Digital marketer", "Juara marketing campaign"], avatarColor: "#3a0ca3" },
    { id: 38, name: "Zahra Desita", nis: "202411038", role: "Siswa", gender: "P", birthDate: "9 Februari 2007", address: "Kota Serang", email: "zahra.desita@student.sch.id", phone: "081234567038", specialization: "Social Media", achievements: ["Social media manager", "Juara content strategy"], avatarColor: "#4cc9f0" }
];

// Data Galeri TKJ
const galleryData = [
    { id: 1, src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600", category: "practicum", title: "Praktikum Jaringan", description: "Siswa melakukan konfigurasi router dan switch di lab jaringan" },
    { id: 2, src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600", category: "practicum", title: "Pemrograman Web", description: "Sesi coding dan development website di lab programming" },
    { id: 3, src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600", category: "competition", title: "Lomba Jaringan", description: "Tim TKJ 2 saat mengikuti kompetisi jaringan komputer tingkat kota" },
    { id: 4, src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600", category: "practicum", title: "Perakitan PC", description: "Praktikum merakit dan troubleshooting komputer di lab hardware" },
    { id: 5, src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600", category: "competition", title: "Hackathon", description: "Siswa TKJ 2 berpartisipasi dalam hackathon coding competition" },
    { id: 6, src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600", category: "activity", title: "Presentasi Project", description: "Presentasi hasil project akhir mata pelajaran TKJ" },
    { id: 7, src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600", category: "achievement", title: "Penghargaan", description: "Upacara penyerahan penghargaan juara lomba IT" },
    { id: 8, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600", category: "practicum", title: "Server Administration", description: "Praktikum mengelola server Linux di lab server" },
    { id: 9, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600", category: "activity", title: "Team Building", description: "Kegiatan team building untuk meningkatkan kerjasama tim" },
    { id: 10, src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600", category: "practicum", title: "IoT Workshop", description: "Workshop Internet of Things dan sensor programming" },
    { id: 11, src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600", category: "achievement", title: "Juara Coding", description: "Siswa TKJ 2 menerima trophy juara coding competition" },
    { id: 12, src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600", category: "activity", title: "Study Tour IT", description: "Kunjungan edukasi ke perusahaan teknologi" }
];

// Data Pengumuman TKJ
const announcementsData = [
    { 
        id: 1, 
        title: "Ujian Praktikum Jaringan", 
        date: "25 Oktober 2024", 
        content: "Ujian praktikum jaringan komputer akan dilaksanakan pada tanggal 30 Oktober 2024. Materi meliputi konfigurasi router, switch, dan troubleshooting jaringan. Persiapkan diri dengan baik.",
        author: "Guru Jaringan - Ahmad Rizki, S.Kom",
        urgent: true
    },
    { 
        id: 2, 
        title: "Project Akhir Semester", 
        date: "20 Oktober 2024", 
        content: "Project akhir semester mata pelajaran Pemrograman Web deadline tanggal 15 November 2024. Buat website dinamis dengan minimum 5 halaman menggunakan PHP dan database MySQL.",
        author: "Guru Pemrograman - Budi Santoso, M.Kom",
        urgent: true
    },
    { 
        id: 3, 
        title: "Kompetisi Coding Nasional", 
        date: "15 Oktober 2024", 
        content: "Pendaftaran Kompetisi Coding Nasional 2024 dibuka hingga 30 Oktober 2024. Bagi yang berminat, daftarkan diri ke ketua kelas paling lambat tanggal 28 Oktober.",
        author: "Ketua Kelas - M. Fijar Razzaqi",
        urgent: false
    },
    { 
        id: 4, 
        title: "Workshop Cybersecurity", 
        date: "10 Oktober 2024", 
        content: "Workshop cybersecurity akan diadakan pada tanggal 5 November 2024 bersama praktisi dari perusahaan IT. Gratis untuk siswa TKJ. Daftar ke wali kelas.",
        author: "Wali Kelas - Eni Nurfitriani, S.Pd.I",
        urgent: false
    },
    { 
        id: 5, 
        title: "Kunjungan Industri", 
        date: "5 Oktober 2024", 
        content: "Kelas XI TKJ 2 akan melaksanakan kunjungan industri ke Data Center Telkom pada tanggal 12 November 2024. Biaya Rp 50.000 sudah termasuk transportasi.",
        author: "Wali Kelas - Eni Nurfitriani, S.Pd.I",
        urgent: false
    },
    { 
        id: 6, 
        title: "Pembayaran Sertifikasi", 
        date: "1 Oktober 2024", 
        content: "Batas akhir pembayaran sertifikasi MTA (Microsoft Technology Associate) adalah tanggal 20 Oktober 2024. Biaya Rp 300.000 dibayarkan ke bendahara kelas.",
        author: "Bendahara - Kasya Putra & Mualif Ikhsan R.",
        urgent: true
    }
];

// Data Tugas TKJ
const tasksData = [
    { 
        id: 1, 
        title: "Konfigurasi VLAN di Packet Tracer", 
        subject: "Jaringan Komputer", 
        deadline: "28 Oktober 2024", 
        completed: false,
        urgent: true,
        description: "Buat topologi jaringan dengan 3 VLAN dan konfigurasi inter-VLAN routing. Submit file .pkt dan dokumentasi."
    },
    { 
        id: 2, 
        title: "Website E-commerce Sederhana", 
        subject: "Pemrograman Web", 
        deadline: "5 November 2024", 
        completed: true,
        urgent: false,
        description: "Buat website e-commerce dengan fitur CRUD produk, keranjang belanja, dan checkout menggunakan PHP & MySQL."
    },
    { 
        id: 3, 
        title: "Analisis Keamanan Jaringan", 
        subject: "Keamanan Jaringan", 
        deadline: "2 November 2024", 
        completed: false,
        urgent: true,
        description: "Analisis vulnerabilitas jaringan sekolah dan buat laporan rekomendasi keamanan minimal 10 halaman."
    },
    { 
        id: 4, 
        title: "Database Sistem Perpustakaan", 
        subject: "Basis Data", 
        deadline: "8 November 2024", 
        completed: false,
        urgent: false,
        description: "Design dan implementasi database sistem perpustakaan dengan ERD, normalisasi, dan SQL queries."
    },
    { 
        id: 5, 
        title: "Aplikasi Android Todo List", 
        subject: "Pemrograman Mobile", 
        deadline: "12 November 2024", 
        completed: false,
        urgent: false,
        description: "Buat aplikasi Android Todo List dengan fitur CRUD, notifikasi, dan penyimpanan lokal menggunakan Kotlin."
    },
    { 
        id: 6, 
        title: "Presentasi Teknologi Cloud", 
        subject: "Sistem Operasi", 
        deadline: "15 November 2024", 
        completed: true,
        urgent: false,
        description: "Presentasi tentang implementasi cloud computing dalam dunia industri. Sertakan demo deployment simple web app."
    }
];

// Data Guru TKJ
const teachersData = [
    { name: "Eni Nurfitriani, S.Pd.I", subject: "Wali Kelas & PKWU", email: "eni.nurfitriani@smkn3kotaserang.sch.id", phone: "081122334401" },
    { name: "Ahmad Rizki, S.Kom", subject: "Jaringan Komputer & Keamanan Jaringan", email: "ahmad.rizki@smkn3kotaserang.sch.id", phone: "081122334402" },
    { name: "Budi Santoso, M.Kom", subject: "Pemrograman Web & Mobile", email: "budi.santoso@smkn3kotaserang.sch.id", phone: "081122334403" },
    { name: "Dewi Anggraini, S.Kom", subject: "Sistem Operasi & Administrasi Server", email: "dewi.anggraini@smkn3kotaserang.sch.id", phone: "081122334404" },
    { name: "Rina Hartati, S.Kom", subject: "Basis Data & Cloud Computing", email: "rina.hartati@smkn3kotaserang.sch.id", phone: "081122334405" },
    { name: "Andi Wijaya, S.T", subject: "Perakitan PC & Pemeliharaan Hardware", email: "andi.wijaya@smkn3kotaserang.sch.id", phone: "081122334406" },
    { name: "Linda Sari, S.Pd", subject: "Matematika", email: "linda.sari@smkn3kotaserang.sch.id", phone: "081122334407" },
    { name: "Siti Nurjanah, S.Pd", subject: "Bahasa Inggris", email: "siti.nurjanah@smkn3kotaserang.sch.id", phone: "081122334408" },
    { name: "Sri Mulyani, S.Pd", subject: "Bahasa Indonesia", email: "sri.mulyani@smkn3kotaserang.sch.id", phone: "081122334409" },
    { name: "H. Muhammad Ali", subject: "Pendidikan Agama Islam", email: "muhammad.ali@smkn3kotaserang.sch.id", phone: "081122334410" },
    { name: "Ricky Perdana, M.Or", subject: "Olahraga", email: "ricky.perdana@smkn3kotaserang.sch.id", phone: "081122334411" }
];

// Notifikasi
const notificationsData = [
    {
        id: 1,
        title: "Selamat Datang di TKJ 2!",
        message: "Website resmi kelas XI TKJ 2 SMKN 3 Kota Serang",
        type: "info",
        icon: "fas fa-laptop-code"
    },
    {
        id: 2,
        title: "Deadline Tugas Jaringan",
        message: "Konfigurasi VLAN deadline 28 Oktober",
        type: "warning",
        icon: "fas fa-network-wired"
    },
    {
        id: 3,
        title: "Ujian Praktikum",
        message: "Ujian praktikum jaringan 30 Oktober",
        type: "danger",
        icon: "fas fa-flask"
    },
    {
        id: 4,
        title: "Kompetisi Coding",
        message: "Pendaftaran kompetisi coding dibuka",
        type: "info",
        icon: "fas fa-code"
    }
];

// Data Video (untuk modal)
const videoData = {
    url: "https://www.youtube.com/embed/9cKsq14Kfsw",
    title: "Profil Jurusan TKJ SMKN 3 Kota Serang",
    description: "Kenali lebih dekat kegiatan pembelajaran dan prestasi jurusan Teknik Komputer dan Jaringan"
};

// Ekspor data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        scheduleData, 
        studentsData, 
        galleryData, 
        announcementsData, 
        tasksData, 
        teachersData, 
        notificationsData,
        videoData 
    };
}