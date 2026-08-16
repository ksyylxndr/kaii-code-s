/**
 * KAS KELAS XI TKJ 2 SMKN 3 KOTA SERANG
 * VERSI VERTICAL SCROLL - NAMA IKUT GESER
 */

// ===== KONFIGURASI =====
const ADMIN_PASSWORD = "0081312798";
const STORAGE_KEY = 'kas_xi_tkj2_vertical_scroll';
const STUDENTS = [
  "ACHMAD SUHADA", "ADE SYARIF H.", "ADLY MULYA R.", "AFFRAYNA MARTHA A.", 
  "AHMAD AJI SUKMA", "ARIF KURNIAWAN", "ARYA MALIK S.", "ASEP SAEPULLAH",
  "CORNELIA AGUSTINA S.", "DERIKO ADITYA W.", "DIMAS FATIH M.", "FEBRIANA WULANDARI",
  "FERNANDO RIZKY F.", "HIKMATIAR UMAM", "IAN KURNIAWAN", "JAYUS HERMAWAN",
  "KASYA PUTRA", "MICHAEL ADRIAN M.", "MOHAMAD SARIPUDIN", "MUALIF IKHSAN R.",
  "MUFID", "MUHAMAD ADITYA G.", "MUHAMAD RIZKY A.", "MUHAMMAD FATHUROHMAN",
  "MUHAMMAD FIJAR R.", "MUHAMMAD IRWANSYAH", "MUHAMMAD RIFAL", "NABILA SAVINA",
  "NIHA LASNATI", "NOVAL AL AYUBI", "NURIL FAJRI AL-FARUQ", "RAHMAWATI",
  "RIZKYA PRATAMA", "ROLISTA SARI", "RONI ARGA PRATAMA", "SADAR SOHMO SIHOTANG",
  "YUNITA SARIDEVI", "ZAHRA DESITA"
];

const MONTHS = ["Juli", "Agustus", "September", "Oktober", "November", "Desember", 
                "Januari", "Februari", "Maret", "April", "Mei", "Juni"];
const WEEKS = 4;
const TOTAL_STUDENTS = 38;

// ===== STATE =====
let state = { transactions: [] };
let currentUser = null;
let currentMonth = 1;
let currentYear = 2026;

// ===== DOM ELEMENTS =====
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// Cache DOM elements
const dom = {
  splash: $('splashScreen'),
  mainApp: $('mainApp'),
  btnLoginView: $('btnLoginView'),
  btnLoginAdmin: $('btnLoginAdmin'),
  adminForm: $('adminLoginForm'),
  adminPassword: $('adminPassword'),
  btnAdminSubmit: $('btnAdminSubmit'),
  btnBackToSplash: $('btnBackToSplash'),
  btnLogout: $('btnLogout'),
  btnThemeToggle: $('btnThemeToggle'),
  userDisplayName: $('userDisplayName'),
  editStatus: $('editStatus'),
  amountInput: $('amountInput'),
  monthSelect: $('monthSelect'),
  yearSelect: $('yearSelect'),
  btnResetMonth: $('btnResetMonth'),
  btnResetAll: $('btnResetAll'),
  btnExportAll: $('btnExportAll'),
  tableHead: $('tableHead'),
  tableBody: $('tableBody'),
  totalBayarBulanIni: $('totalBayarBulanIni'),
  persentaseBulanIni: $('persentaseBulanIni'),
  saldoTotal: $('saldoTotal'),
  totalIn: $('totalIn'),
  totalOut: $('totalOut'),
  saldoBody: $('saldoBody'),
  refreshSaldo: $('refreshSaldo'),
  expDesc: $('expDesc'),
  expAmount: $('expAmount'),
  expDate: $('expDate'),
  btnAddExpense: $('btnAddExpense'),
  btnExport: $('btnExport'),
  rincianBody: $('rincianBody'),
  adminExpenseNote: $('adminExpenseNote'),
  tabBtns: $$('.tab-btn'),
  tabPanels: $$('.tab-panel')
};

// ===== HELPER FUNCTIONS =====
const formatRupiah = num => 'Rp' + (num || 0).toLocaleString('id-ID');
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
const getMonthKey = () => `${currentYear}-${currentMonth}`;
const getMonthName = () => MONTHS[currentMonth];

// ===== LOCALSTORAGE =====
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    state = saved ? JSON.parse(saved) : { transactions: [] };
    if (!state.transactions) state.transactions = [];
  } catch {
    state = { transactions: [] };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    renderCurrentTab();
    updateStats();
  } catch {
    alert('Gagal menyimpan data');
  }
}

// ===== UI UPDATE =====
function applyUserRole(role) {
  currentUser = role;
  
  if (role === 'admin') {
    dom.userDisplayName.textContent = 'Admin';
    dom.editStatus.innerHTML = '<i class="fas fa-unlock"></i> Mode Edit';
    dom.editStatus.style.background = 'linear-gradient(135deg, #4361ee, #3f37c9)';
    dom.editStatus.style.color = 'white';
    
    if (dom.adminExpenseNote) {
      dom.adminExpenseNote.innerHTML = '<i class="fas fa-unlock"></i> Mode Admin - Bisa menambah';
      dom.adminExpenseNote.style.color = 'var(--primary)';
    }
  } else {
    dom.userDisplayName.textContent = 'Viewer';
    dom.editStatus.innerHTML = '<i class="fas fa-eye"></i> Mode Lihat';
    dom.editStatus.style.background = '';
    dom.editStatus.style.color = '';
    
    if (dom.adminExpenseNote) {
      dom.adminExpenseNote.innerHTML = '<i class="fas fa-lock"></i> Mode Viewer - Tidak bisa menambah';
      dom.adminExpenseNote.style.color = '';
    }
  }
  
  const isAdmin = role === 'admin';
  const adminButtons = [dom.btnResetMonth, dom.btnResetAll, dom.btnAddExpense];
  adminButtons.forEach(btn => { if (btn) btn.disabled = !isAdmin; });
  
  renderTableBody();
}

// ===== RENDER FUNCTIONS =====
function renderTableBody() {
  if (!dom.tableBody) return;
  
  const amount = Number(dom.amountInput?.value) || 2000;
  const monthKey = getMonthKey();
  const isAdmin = currentUser === 'admin';
  
  let html = '';
  STUDENTS.forEach((name, idx) => {
    html += `<tr>`;
    
    // Kolom nama siswa
    html += `<td>
      <div class="student-cell">
        <span class="student-number">${idx + 1}.</span>
        <span class="student-name">${name}</span>
      </div>
    </td>`;
    
    // Kolom checkbox untuk setiap minggu
    for (let week = 0; week < WEEKS; week++) {
      const isChecked = state.transactions.some(t => 
        t.kind === 'auto' && t.student === name && t.monthKey === monthKey && t.week === week
      );
      
      html += `<td>
        <div class="checkbox-cell">
          <input type="checkbox" 
            data-student="${name}" 
            data-month="${monthKey}" 
            data-week="${week}"
            ${isChecked ? 'checked' : ''}
            ${!isAdmin ? 'disabled' : ''}>
        </div>
      </td>`;
    }
    
    html += `</tr>`;
  });
  
  dom.tableBody.innerHTML = html;
  updateStats();
}

function renderSaldo() {
  if (!dom.saldoBody) return;
  
  const txs = [...state.transactions].sort((a, b) => new Date(a.date) - new Date(b.date));
  let totalIn = 0, totalOut = 0, running = 0;
  let rows = '';
  
  txs.forEach(t => {
    if (t.type === 'in') totalIn += t.amount;
    else totalOut += t.amount;
    running = totalIn - totalOut;
    
    rows += `<tr>
      <td>${new Date(t.date).toLocaleDateString('id-ID')}</td>
      <td>${t.desc || '-'}</td>
      <td>${t.type === 'in' ? formatRupiah(t.amount) : '-'}</td>
      <td>${t.type === 'out' ? formatRupiah(t.amount) : '-'}</td>
      <td>${formatRupiah(running)}</td>
    </tr>`;
  });
  
  dom.saldoBody.innerHTML = rows || '<tr><td colspan="5" style="text-align:center; padding:20px;">Belum ada transaksi</td></tr>';
  
  if (dom.totalIn) dom.totalIn.textContent = formatRupiah(totalIn);
  if (dom.totalOut) dom.totalOut.textContent = formatRupiah(totalOut);
  if (dom.saldoTotal) dom.saldoTotal.textContent = formatRupiah(running);
}

function renderRincian() {
  if (!dom.rincianBody) return;
  
  const expenses = state.transactions
    .filter(t => t.type === 'out' && t.kind === 'manual')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  let rows = '';
  expenses.forEach((e, i) => {
    rows += `<tr>
      <td>${new Date(e.date).toLocaleDateString('id-ID')}</td>
      <td>${e.desc}</td>
      <td>${formatRupiah(e.amount)}</td>
      <td>
        ${currentUser === 'admin' ? 
          `<button class="btn-icon-small delete-expense" data-id="${e.id}">
            <i class="fas fa-trash"></i>
          </button>` : 
          '<i class="fas fa-lock" style="color:var(--text-muted)"></i>'}
      </td>
    </tr>`;
  });
  
  dom.rincianBody.innerHTML = rows || '<tr><td colspan="4" style="text-align:center; padding:20px;">Belum ada pengeluaran</td></tr>';
  
  if (currentUser === 'admin') {
    $$('.delete-expense').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (confirm('Hapus pengeluaran ini?')) {
          state.transactions = state.transactions.filter(t => t.id !== id);
          saveState();
        }
      });
    });
  }
}

function updateStats() {
  if (!dom.totalBayarBulanIni) return;
  
  const monthKey = getMonthKey();
  const paidThisMonth = state.transactions.filter(t => t.kind === 'auto' && t.monthKey === monthKey).length;
  const totalPossible = TOTAL_STUDENTS * WEEKS;
  const percentage = totalPossible > 0 ? ((paidThisMonth / totalPossible) * 100).toFixed(1) : 0;
  
  dom.totalBayarBulanIni.textContent = paidThisMonth;
  dom.persentaseBulanIni.textContent = `${percentage}%`;
}

function renderCurrentTab() {
  const activeTab = document.querySelector('.tab-btn.active')?.dataset.tab;
  if (activeTab === 'saldo') renderSaldo();
  else if (activeTab === 'rincian') renderRincian();
  else renderTableBody();
}

// ===== EVENT HANDLERS =====
function handleCheckboxChange(e) {
  if (!e.target.matches('input[type="checkbox"]')) return;
  if (currentUser !== 'admin') return;
  
  const cb = e.target;
  const student = cb.dataset.student;
  const monthKey = cb.dataset.month;
  const week = parseInt(cb.dataset.week);
  const amount = Number(dom.amountInput?.value) || 2000;
  
  if (cb.checked) {
    state.transactions.push({
      id: generateId(),
      type: 'in',
      kind: 'auto',
      student,
      monthKey,
      week,
      amount,
      desc: `Pembayaran ${student} - ${getMonthName()} Minggu ${week + 1}`,
      date: new Date().toISOString()
    });
  } else {
    state.transactions = state.transactions.filter(t => 
      !(t.kind === 'auto' && t.student === student && t.monthKey === monthKey && t.week === week)
    );
  }
  
  saveState();
}

// ===== INIT =====
function initMonths() {
  if (!dom.monthSelect) return;
  MONTHS.forEach((month, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = month;
    dom.monthSelect.appendChild(opt);
  });
  dom.monthSelect.value = 1;
}

function initEventListeners() {
  // Login
  dom.btnLoginView?.addEventListener('click', () => {
    loadState();
    applyUserRole('viewer');
    dom.splash.classList.add('hidden');
    dom.mainApp.classList.remove('hidden');
  });
  
  dom.btnLoginAdmin?.addEventListener('click', () => {
    dom.adminForm?.classList.remove('hidden');
  });
  
  dom.btnBackToSplash?.addEventListener('click', () => {
    dom.adminForm?.classList.add('hidden');
    dom.adminPassword.value = '';
  });
  
  dom.btnAdminSubmit?.addEventListener('click', () => {
    if (dom.adminPassword.value === ADMIN_PASSWORD) {
      loadState();
      applyUserRole('admin');
      dom.splash.classList.add('hidden');
      dom.mainApp.classList.remove('hidden');
    } else {
      alert('Password salah!');
      dom.adminPassword.value = '';
    }
  });
  
  dom.adminPassword?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') dom.btnAdminSubmit?.click();
  });
  
  // Logout
  dom.btnLogout?.addEventListener('click', () => {
    if (confirm('Keluar?')) {
      currentUser = null;
      dom.mainApp.classList.add('hidden');
      dom.splash.classList.remove('hidden');
      dom.adminForm?.classList.add('hidden');
      dom.adminPassword.value = '';
    }
  });
  
  // Theme
  dom.btnThemeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    dom.btnThemeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    dom.btnThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  // Table
  dom.tableBody?.addEventListener('change', handleCheckboxChange);
  
  // Filters
  dom.monthSelect?.addEventListener('change', () => {
    currentMonth = parseInt(dom.monthSelect.value);
    renderTableBody();
    updateStats();
  });
  
  dom.yearSelect?.addEventListener('change', () => {
    currentYear = parseInt(dom.yearSelect.value);
    renderTableBody();
    updateStats();
  });
  
  dom.amountInput?.addEventListener('input', () => {
    if (currentUser === 'admin') renderTableBody();
  });
  
  // Reset
  dom.btnResetMonth?.addEventListener('click', () => {
    if (currentUser !== 'admin') return;
    const monthKey = getMonthKey();
    if (confirm(`Reset data bulan ${getMonthName()} ${currentYear}?`)) {
      state.transactions = state.transactions.filter(t => !(t.kind === 'auto' && t.monthKey === monthKey));
      saveState();
    }
  });
  
  dom.btnResetAll?.addEventListener('click', () => {
    if (currentUser !== 'admin') return;
    if (confirm('Hapus SEMUA data?')) {
      state.transactions = [];
      saveState();
    }
  });
  
  // Expense
  dom.btnAddExpense?.addEventListener('click', () => {
    if (currentUser !== 'admin') return;
    
    const desc = dom.expDesc?.value.trim();
    const amount = parseInt(dom.expAmount?.value);
    const date = dom.expDate?.value || new Date().toISOString().slice(0, 10);
    
    if (!desc || !amount) return alert('Isi semua field!');
    
    state.transactions.push({
      id: generateId(),
      type: 'out',
      kind: 'manual',
      amount,
      desc,
      date: new Date(date).toISOString()
    });
    
    dom.expDesc.value = '';
    dom.expAmount.value = '';
    saveState();
  });
  
  // Export
  dom.btnExportAll?.addEventListener('click', () => {
    const txs = [...state.transactions].sort((a, b) => new Date(a.date) - new Date(b.date));
    let csv = 'Tanggal,Tipe,Keterangan,Jumlah\n';
    txs.forEach(t => {
      csv += `${new Date(t.date).toLocaleDateString()},${t.type === 'in' ? 'Masuk' : 'Keluar'},${t.desc},${t.amount}\n`;
    });
    downloadCSV(csv, 'semua_transaksi.csv');
  });
  
  dom.btnExport?.addEventListener('click', () => {
    const expenses = state.transactions.filter(t => t.type === 'out' && t.kind === 'manual');
    let csv = 'Tanggal,Keterangan,Jumlah\n';
    expenses.forEach(e => {
      csv += `${new Date(e.date).toLocaleDateString()},${e.desc},${e.amount}\n`;
    });
    downloadCSV(csv, 'pengeluaran.csv');
  });
  
  // Refresh
  dom.refreshSaldo?.addEventListener('click', renderSaldo);
  
  // Tabs
  dom.tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dom.tabBtns.forEach(b => b.classList.remove('active'));
      dom.tabPanels.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      const tabId = 'tab-' + btn.dataset.tab;
      $(tabId)?.classList.add('active');
      
      renderCurrentTab();
    });
  });
}

function downloadCSV(csv, filename) {
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function init() {
  initMonths();
  initEventListeners();
  
  if (dom.expDate) {
    dom.expDate.value = new Date().toISOString().slice(0, 10);
  }
}

document.addEventListener('DOMContentLoaded', init);