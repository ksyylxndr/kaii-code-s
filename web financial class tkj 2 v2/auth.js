// Data pengguna (bisa diperluas untuk lebih banyak user)
const users = [
    {
        username: 'kasya',
        password: 'bendahara1',
        name: 'Kasya Putra',
        role: 'editor'
    },
    {
        username: 'mualif',
        password: 'bendahara2',
        name: 'Mualif Ikhsan Rafif',
        role: 'editor'
    },
    {
        username: 'viewer',
        password: 'view123',
        name: 'Viewer Only',
        role: 'viewer'
    },
    {
        username: 'admin',
        password: 'admin123',
        name: 'Administrator',
        role: 'editor'
    }
];

// Fungsi login
function login(username, password) {
    const user = users.find(u => 
        u.username === username && u.password === password
    );
    
    if (user) {
        // Simpan user ke localStorage (tanpa password)
        const userData = {
            username: user.username,
            name: user.name,
            role: user.role
        };
        localStorage.setItem('currentUser', JSON.stringify(userData));
        return userData;
    }
    
    return null;
}

// Event listener untuk form login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            const user = login(username, password);
            
            if (user) {
                // Redirect ke dashboard
                window.location.href = 'dashboard.html';
            } else {
                alert('Username atau password salah! Silakan coba lagi.');
                // Reset form
                document.getElementById('password').value = '';
            }
        });
    }
    
    // Jika sudah login dan mencoba akses login page, redirect ke dashboard
    if (window.location.pathname.includes('index.html') || 
        window.location.pathname === '/index.html' ||
        window.location.pathname === '/') {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            window.location.href = 'dashboard.html';
        }
    }
});

// Middleware untuk proteksi halaman
function requireAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        window.location.href = 'index.html';
        return null;
    }
    
    return currentUser;
}