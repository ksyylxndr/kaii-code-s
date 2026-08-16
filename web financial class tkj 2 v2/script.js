// Data siswa lengkap
const students = [
    "ACHMAD SUHADA", "ADE SYARIF H.", "ADLY MULYA R.", "AFFRAYNA MARTHA A.", "AHMAD AJI SUKMA",
    "ARIF KURNIAWAN", "ARYA MALIK S.", "ASEP SAEPULLAH", "CORNELIA AGUSTINA S.", "DERIKO ADITYA W.",
    "DIMAS FATIH M.", "FEBRIANA WULANDARI", "FERNANDO RIZKY F.", "HIKMATIAR UMAM", "IAN KURNIAWAN",
    "JAYUS HERMAWAN", "KASYA PUTRA", "MICHAEL ADRIAN M.", "MOHAMAD SARIPUDIN", "MUALIF IKHSAN R.",
    "MUFID", "MUHAMAD ADITYA G.", "MUHAMAD RIZKY A.", "MUHAMMAD FATHUROHMAN", "MUHAMMAD FIJAR R.",
    "MUHAMMAD IRWANSYAH", "MUHAMMAD RIFAL", "NABILA SAVINA", "NIHA LASNATI", "NOVAL AL AYUBI",
    "NURIL FAJRI AL-FARUQ", "RAHMAWATI", "RIZKYA PRATAMA", "ROLISTA SARI", "RONI ARGA PRATAMA",
    "SADAR SOHMO SIHOTANG", "YUNITA SARIDEVI", "ZAHRA DESITA"
];

// Bulan dalam bahasa Indonesia
const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

// Harga iuran
const WEEKLY_PAYMENT = 2000;
const MONTHLY_PAYMENT = 8000; // 4 minggu x Rp 2.000

// Variabel global
let currentUser = null;
let isEditor = false;
let studentPayments = {};
let transactions = [];
let notes = "";
let currentMonth = new Date().getMonth() + 1; // Default ke bulan saat ini

// Inisialisasi data
function initData() {
    // Cek apakah sudah login
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        window.location.href = 'index.html';
        return;
    }
    
    currentUser = user;
    isEditor = user.role === 'editor';
    
    // Update UI dengan nama user
    if (document.getElementById('current-user')) {
        document.getElementById('current-user').textContent = user.name;
    }
    
    // Load data dari localStorage
    studentPayments = JSON.parse(localStorage.getItem('studentPayments')) || {};
    transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    notes = localStorage.getItem('kasNotes') || '';
    
    // Inisialisasi data siswa jika belum ada
    initializeStudentPayments();
    
    // Set tanggal hari ini untuk form
    const today = new Date().toISOString().split('T')[0];
    if (document.getElementById('income-date')) {
        document.getElementById('income-date').value = today;
    }
    if (document.getElementById('expense-date')) {
        document.getElementById('expense-date').value = today;
    }
    
    // Load catatan
    if (document.getElementById('notes-textarea')) {
        document.getElementById('notes-textarea').value = notes;
        
        // Jika bukan editor, nonaktifkan edit catatan
        if (!isEditor) {
            document.getElementById('notes-textarea').disabled = true;
            document.getElementById('save-notes').disabled = true;
            document.getElementById('edit-notes').style.display = 'none';
        }
    }
    
    // Render data
    renderStudentTable();
    updateSummary();
    renderRecentTransactions();
    
    // Sembunyikan loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 500);
}

// Inisialisasi data pembayaran siswa
function initializeStudentPayments() {
    const currentYear = new Date().getFullYear();
    
    students.forEach(student => {
        if (!studentPayments[student]) {
            studentPayments[student] = {};
        }
        
        // Inisialisasi untuk tahun 2025
        if (!studentPayments[student]['2025']) {
            studentPayments[student]['2025'] = {};
        }
        
        // Inisialisasi untuk semua bulan
        for (let month = 1; month <= 12; month++) {
            if (!studentPayments[student]['2025'][month]) {
                studentPayments[student]['2025'][month] = {
                    week1: false,
                    week2: false,
                    week3: false,
                    week4: false,
                    amountPaid: 0
                };
            }
        }
    });
    
    saveStudentPayments();
}

// Simpan data pembayaran siswa
function saveStudentPayments() {
    localStorage.setItem('studentPayments', JSON.stringify(studentPayments));
}

// Render tabel siswa
function renderStudentTable() {
    const tableBody = document.getElementById('student-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    const selectedMonth = document.getElementById('month-select') ? 
        parseInt(document.getElementById('month-select').value) : currentMonth;
    
    students.forEach((student, index) => {
        const paymentData = studentPayments[student]?.['2025']?.[selectedMonth] || {
            week1: false, week2: false, week3: false, week4: false, amountPaid: 0
        };
        
        const row = document.createElement('tr');
        
        // Hitung status bulanan
        const totalPaid = [paymentData.week1, paymentData.week2, paymentData.week3, paymentData.week4]
            .filter(paid => paid).length;
        const monthlyStatus = totalPaid === 4 ? 'LUNAS' : 
                             totalPaid > 0 ? `BAYAR ${totalPaid}/4` : 'BELUM';
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${student}</strong></td>
            <td>
                <span class="week-check ${paymentData.week1 ? 'paid' : 'unpaid'}" 
                      data-student="${student}" data-week="week1" data-month="${selectedMonth}">
                      ${paymentData.week1 ? '✓' : '✗'}
                </span>
            </td>
            <td>
                <span class="week-check ${paymentData.week2 ? 'paid' : 'unpaid'}" 
                      data-student="${student}" data-week="week2" data-month="${selectedMonth}">
                      ${paymentData.week2 ? '✓' : '✗'}
                </span>
            </td>
            <td>
                <span class="week-check ${paymentData.week3 ? 'paid' : 'unpaid'}" 
                      data-student="${student}" data-week="week3" data-month="${selectedMonth}">
                      ${paymentData.week3 ? '✓' : '✗'}
                </span>
            </td>
            <td>
                <span class="week-check ${paymentData.week4 ? 'paid' : 'unpaid'}" 
                      data-student="${student}" data-week="week4" data-month="${selectedMonth}">
                      ${paymentData.week4 ? '✓' : '✗'}
                </span>
            </td>
            <td>
                <span class="status-badge ${totalPaid === 4 ? 'status-lunas' : 'status-belum'}">
                    ${monthlyStatus}
                </span>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Tambahkan event listener untuk ceklis jika user adalah editor
    if (isEditor) {
        document.querySelectorAll('.week-check').forEach(check => {
            check.addEventListener('click', togglePayment);
        });
    }
}

// Toggle status pembayaran mingguan
function togglePayment(event) {
    if (!isEditor) {
        alert('Hanya bendahara yang dapat mengubah status pembayaran!');
        return;
    }
    
    const check = event.target;
    const student = check.dataset.student;
    const week = check.dataset.week;
    const month = parseInt(check.dataset.month);
    
    // Toggle status
    const currentStatus = studentPayments[student]['2025'][month][week];
    studentPayments[student]['2025'][month][week] = !currentStatus;
    
    // Update amount paid
    let amountPaid = 0;
    if (studentPayments[student]['2025'][month].week1) amountPaid += WEEKLY_PAYMENT;
    if (studentPayments[student]['2025'][month].week2) amountPaid += WEEKLY_PAYMENT;
    if (studentPayments[student]['2025'][month].week3) amountPaid += WEEKLY_PAYMENT;
    if (studentPayments[student]['2025'][month].week4) amountPaid += WEEKLY_PAYMENT;
    
    studentPayments[student]['2025'][month].amountPaid = amountPaid;
    
    // Jika ada perubahan status dari belum bayar ke sudah bayar, tambahkan transaksi
    if (!currentStatus && studentPayments[student]['2025'][month][week]) {
        addTransaction({
            type: 'income',
            amount: WEEKLY_PAYMENT,
            source: `Iuran ${student}`,
            description: `Pembayaran ${week} bulan ${months[month-1]}`,
            date: new Date().toISOString().split('T')[0]
        });
    }
    
    // Update UI
    check.textContent = studentPayments[student]['2025'][month][week] ? '✓' : '✗';
    check.className = `week-check ${studentPayments[student]['2025'][month][week] ? 'paid' : 'unpaid'}`;
    
    // Update status bulanan di kolom terakhir
    const row = check.closest('tr');
    const totalPaid = [
        studentPayments[student]['2025'][month].week1,
        studentPayments[student]['2025'][month].week2,
        studentPayments[student]['2025'][month].week3,
        studentPayments[student]['2025'][month].week4
    ].filter(paid => paid).length;
    
    const monthlyStatus = totalPaid === 4 ? 'LUNAS' : 
                         totalPaid > 0 ? `BAYAR ${totalPaid}/4` : 'BELUM';
    
    const statusCell = row.querySelector('.status-badge');
    statusCell.textContent = monthlyStatus;
    statusCell.className = `status-badge ${totalPaid === 4 ? 'status-lunas' : 'status-belum'}`;
    
    // Simpan data dan update summary
    saveStudentPayments();
    updateSummary();
}

// Update summary cards
function updateSummary() {
    const selectedMonth = document.getElementById('month-select') ? 
        parseInt(document.getElementById('month-select').value) : currentMonth;
    
    // Hitung total iuran bulan ini
    let totalMonthlyIncome = 0;
    let paidStudents = 0;
    
    students.forEach(student => {
        const paymentData = studentPayments[student]?.['2025']?.[selectedMonth];
        if (paymentData) {
            totalMonthlyIncome += paymentData.amountPaid;
            if (paymentData.amountPaid > 0) {
                paidStudents++;
            }
        }
    });
    
    // Hitung total pemasukan dan pengeluaran dari transaksi
    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const balance = totalIncome - totalExpense;
    
    // Update UI
    if (document.getElementById('total-balance')) {
        document.getElementById('total-balance').textContent = formatCurrency(balance);
    }
    if (document.getElementById('total-income')) {
        document.getElementById('total-income').textContent = formatCurrency(totalIncome);
    }
    if (document.getElementById('total-expense')) {
        document.getElementById('total-expense').textContent = formatCurrency(totalExpense);
    }
    if (document.getElementById('current-month-paid')) {
        document.getElementById('current-month-paid').textContent = `${paidStudents}/${students.length}`;
    }
    if (document.getElementById('current-month')) {
        document.getElementById('current-month').textContent = months[selectedMonth - 1];
    }
}

// Format mata uang
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Tambah transaksi
function addTransaction(transaction) {
    transaction.id = Date.now();
    transaction.timestamp = new Date().toISOString();
    
    transactions.unshift(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    // Update UI
    updateSummary();
    renderRecentTransactions();
    
    return transaction;
}

// Render transaksi terbaru
function renderRecentTransactions() {
    const container = document.getElementById('recent-transactions');
    if (!container) return;
    
    const recent = transactions.slice(0, 5);
    container.innerHTML = '';
    
    if (recent.length === 0) {
        container.innerHTML = '<p class="no-transactions">Belum ada transaksi</p>';
        return;
    }
    
    recent.forEach(transaction => {
        const item = document.createElement('div');
        item.className = 'transaction-item';
        
        const typeClass = transaction.type === 'income' ? 'transaction-income' : 'transaction-expense';
        const typeIcon = transaction.type === 'income' ? '↑' : '↓';
        
        item.innerHTML = `
            <div class="transaction-info">
                <h4>${transaction.source}</h4>
                <p>${transaction.description || ''} • ${formatDate(transaction.date)}</p>
            </div>
            <div class="transaction-amount ${typeClass}">
                ${typeIcon} ${formatCurrency(transaction.amount)}
            </div>
        `;
        
        container.appendChild(item);
    });
}

// Render semua transaksi untuk modal
function renderAllTransactions(filter = 'all') {
    const container = document.getElementById('all-transactions-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? transactions 
        : transactions.filter(t => t.type === filter);
    
    if (filtered.length === 0) {
        container.innerHTML = '<p class="no-transactions">Tidak ada transaksi</p>';
        return;
    }
    
    filtered.forEach(transaction => {
        const item = document.createElement('div');
        item.className = 'transaction-item';
        
        const typeClass = transaction.type === 'income' ? 'transaction-income' : 'transaction-expense';
        const typeIcon = transaction.type === 'income' ? '↑' : '↓';
        
        item.innerHTML = `
            <div class="transaction-info">
                <h4>${transaction.source}</h4>
                <p>${transaction.description || ''} • ${formatDate(transaction.date)}</p>
            </div>
            <div class="transaction-amount ${typeClass}">
                ${typeIcon} ${formatCurrency(transaction.amount)}
            </div>
        `;
        
        container.appendChild(item);
    });
}

// Format tanggal
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

// Export data ke CSV
function exportData() {
    const selectedMonth = document.getElementById('month-select') ? 
        parseInt(document.getElementById('month-select').value) : currentMonth;
    const monthName = months[selectedMonth - 1];
    
    let csv = `DATA KAS KELAS XI TKJ 2 - ${monthName} 2025\n`;
    csv += `NO,NAMA SISWA,MINGGU 1,MINGGU 2,MINGGU 3,MINGGU 4,STATUS,JUMLAH\n`;
    
    students.forEach((student, index) => {
        const paymentData = studentPayments[student]?.['2025']?.[selectedMonth] || {
            week1: false, week2: false, week3: false, week4: false, amountPaid: 0
        };
        
        const totalPaid = [paymentData.week1, paymentData.week2, paymentData.week3, paymentData.week4]
            .filter(paid => paid).length;
        
        const status = totalPaid === 4 ? 'LUNAS' : 
                      totalPaid > 0 ? `BAYAR ${totalPaid}/4` : 'BELUM';
        
        csv += `${index + 1},"${student}",`;
        csv += `${paymentData.week1 ? '✓' : '✗'},`;
        csv += `${paymentData.week2 ? '✓' : '✗'},`;
        csv += `${paymentData.week3 ? '✓' : '✗'},`;
        csv += `${paymentData.week4 ? '✓' : '✗'},`;
        csv += `${status},`;
        csv += `${formatCurrency(paymentData.amountPaid)}\n`;
    });
    
    // Tambahkan summary
    csv += `\nSUMMARY\n`;
    csv += `Total siswa,${students.length}\n`;
    csv += `Iuran per minggu,${formatCurrency(WEEKLY_PAYMENT)}\n`;
    csv += `Iuran per bulan,${formatCurrency(MONTHLY_PAYMENT)}\n`;
    
    let totalPaidStudents = 0;
    let totalMonthlyIncome = 0;
    
    students.forEach(student => {
        const paymentData = studentPayments[student]?.['2025']?.[selectedMonth];
        if (paymentData && paymentData.amountPaid > 0) {
            totalPaidStudents++;
            totalMonthlyIncome += paymentData.amountPaid;
        }
    });
    
    csv += `Siswa sudah bayar,${totalPaidStudents}\n`;
    csv += `Total iuran ${monthName},${formatCurrency(totalMonthlyIncome)}\n`;
    
    // Buat blob dan download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `kas-kelas-xi-tkj2-${monthName.toLowerCase()}-2025.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Hapus semua transaksi
function clearAllTransactions() {
    if (confirm('Apakah Anda yakin ingin menghapus semua riwayat transaksi? Tindakan ini tidak dapat dibatalkan.')) {
        transactions = [];
        localStorage.setItem('transactions', JSON.stringify(transactions));
        renderRecentTransactions();
        renderAllTransactions();
        updateSummary();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Jika di halaman dashboard, inisialisasi data
    if (window.location.pathname.includes('dashboard.html') || 
        window.location.pathname === '/dashboard.html') {
        initData();
        
        // Event listener untuk logout
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function() {
                localStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            });
        }
        
        // Event listener untuk filter bulan
        const monthSelect = document.getElementById('month-select');
        if (monthSelect) {
            monthSelect.addEventListener('change', function() {
                currentMonth = parseInt(this.value);
                renderStudentTable();
                updateSummary();
            });
            
            // Set nilai default ke bulan Juli (7)
            monthSelect.value = '7';
        }
        
        // Event listener untuk export
        const exportBtn = document.getElementById('export-btn');
        if (exportBtn) {
            exportBtn.addEventListener('click', exportData);
        }
        
        // Event listener untuk tab transaksi
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Hapus active dari semua tab
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Set active pada tab yang diklik
                this.classList.add('active');
                const tabId = this.dataset.tab + '-form';
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Event listener untuk form pemasukan
        const incomeForm = document.getElementById('add-income-form');
        if (incomeForm) {
            incomeForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (!isEditor) {
                    alert('Hanya bendahara yang dapat menambah transaksi!');
                    return;
                }
                
                const amount = parseInt(document.getElementById('income-amount').value);
                const source = document.getElementById('income-source').value;
                const date = document.getElementById('income-date').value;
                const description = document.getElementById('income-desc').value;
                
                if (amount <= 0) {
                    alert('Jumlah pemasukan harus lebih dari 0!');
                    return;
                }
                
                addTransaction({
                    type: 'income',
                    amount: amount,
                    source: source,
                    description: description,
                    date: date
                });
                
                // Reset form
                this.reset();
                document.getElementById('income-date').value = new Date().toISOString().split('T')[0];
                
                alert('Pemasukan berhasil ditambahkan!');
            });
        }
        
        // Event listener untuk form pengeluaran
        const expenseForm = document.getElementById('add-expense-form');
        if (expenseForm) {
            expenseForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (!isEditor) {
                    alert('Hanya bendahara yang dapat menambah transaksi!');
                    return;
                }
                
                const amount = parseInt(document.getElementById('expense-amount').value);
                const category = document.getElementById('expense-category').value;
                const description = document.getElementById('expense-desc').value;
                const date = document.getElementById('expense-date').value;
                
                if (amount <= 0) {
                    alert('Jumlah pengeluaran harus lebih dari 0!');
                    return;
                }
                
                // Cek saldo cukup
                const currentBalance = calculateCurrentBalance();
                if (amount > currentBalance) {
                    alert('Saldo kas tidak mencukupi untuk pengeluaran ini!');
                    return;
                }
                
                addTransaction({
                    type: 'expense',
                    amount: amount,
                    source: category,
                    description: description,
                    date: date
                });
                
                // Reset form
                this.reset();
                document.getElementById('expense-date').value = new Date().toISOString().split('T')[0];
                document.getElementById('expense-category').value = '';
                
                alert('Pengeluaran berhasil ditambahkan!');
            });
        }
        
        // Event listener untuk modal transaksi
        const viewAllBtn = document.getElementById('view-all-transactions');
        const transactionsModal = document.getElementById('transactions-modal');
        const closeModalBtn = document.querySelector('.close-modal');
        
        if (viewAllBtn && transactionsModal) {
            viewAllBtn.addEventListener('click', function() {
                renderAllTransactions('all');
                document.getElementById('transaction-filter').value = 'all';
                transactionsModal.style.display = 'flex';
            });
        }
        
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', function() {
                transactionsModal.style.display = 'none';
            });
        }
        
        // Tutup modal saat klik di luar
        window.addEventListener('click', function(e) {
            if (e.target === transactionsModal) {
                transactionsModal.style.display = 'none';
            }
        });
        
        // Filter transaksi di modal
        const transactionFilter = document.getElementById('transaction-filter');
        if (transactionFilter) {
            transactionFilter.addEventListener('change', function() {
                renderAllTransactions(this.value);
            });
        }
        
        // Hapus semua transaksi
        const clearTransactionsBtn = document.getElementById('clear-transactions');
        if (clearTransactionsBtn) {
            clearTransactionsBtn.addEventListener('click', clearAllTransactions);
        }
        
        // Simpan catatan
        const saveNotesBtn = document.getElementById('save-notes');
        if (saveNotesBtn) {
            saveNotesBtn.addEventListener('click', function() {
                if (!isEditor) {
                    alert('Hanya bendahara yang dapat menyimpan catatan!');
                    return;
                }
                
                notes = document.getElementById('notes-textarea').value;
                localStorage.setItem('kasNotes', notes);
                alert('Catatan berhasil disimpan!');
            });
        }
    }
});

// Hitung saldo saat ini
function calculateCurrentBalance() {
    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
    
    return totalIncome - totalExpense;
}

// Tambahkan data contoh jika tidak ada transaksi
if (transactions.length === 0) {
    // Tambahkan beberapa transaksi contoh
    addTransaction({
        type: 'income',
        amount: 760000,
        source: 'Iuran Awal',
        description: 'Iuran siswa pertama (38 siswa x Rp20.000)',
        date: '2025-07-01'
    });
    
    addTransaction({
        type: 'expense',
        amount: 150000,
        source: 'Alat Tulis',
        description: 'Pembelian spidol, penghapus, dan penggaris',
        date: '2025-07-05'
    });
    
    addTransaction({
        type: 'expense',
        amount: 100000,
        source: 'Konsumsi',
        description: 'Snap rapat pengurus kelas',
        date: '2025-07-10'
    });
}