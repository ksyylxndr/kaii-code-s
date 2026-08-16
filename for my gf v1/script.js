const pesanMotivasi = [
    "sayang kamu itu cantik, jangan suka insecure lagi ya! 💖",
    "setiap hari, kamu semakin cantik dan kuat! 💪",
    "kamu itu luar biasa, percayalah pada diri kamu sendiri! 🌈",
    "kamu itu seperti bintang, selalu bersinar terang! 🌟",
    "kamu itu spesial, jangan bandingkan diri kamu dengan orang lain! ✨",
    "aku bangga sama kamu, uda bertahan sejauh ini sendirian! 🌻",
    "aku tau kamu pasti bisa, kamu itu kuat! 💪",
    "kamu adalah versi terbaik dari diri kamu sendiri, jangan lupa itu! 🌸",
    "dunia ini lebih cerah karena ada kamu 🌟",
    "semoga semua mimpi kita tercapai yaa? aamiin 💖",
    "kamu harus kuat dan semangat, karena banyak mimpi yang harus kita capai! 💪",
    "kamu disana ga sendirian sayang, aku disini selalu ada buat kamu! 💗",
    "i'll always love you forever sayang! 💖"
  ];
  
  let indexPesan = 0; // Indeks untuk pesan berurutan
  
  function tampilkanPesan() {
    const pesanElement = document.getElementById("pesan-motivasi");
    pesanElement.textContent = pesanMotivasi[indexPesan];
    pesanElement.classList.remove("muncul");
    setTimeout(() => {
      pesanElement.classList.add("muncul");
    }, 10);
  
    // Pindah ke pesan berikutnya
    indexPesan = (indexPesan + 1) % pesanMotivasi.length;
  }
  
  const musik = document.getElementById("musik");
  const tombolMusik = document.getElementById("tombol-musik");
  
  function toggleMusik() {
    if (musik.paused) {
      musik.play();
      tombolMusik.textContent = "⏸️ Jeda Musik";
    } else {
      musik.pause();
      tombolMusik.textContent = "▶️ Putar Musik";
    }
  }
  
  const tombolTema = document.getElementById("tombol-tema");
  
  function toggleTema() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      tombolTema.textContent = "☀️ Mode Terang";
    } else {
      tombolTema.textContent = "🌙 Mode Gelap";
    }
  }
  
  // Efek Love-Love yang Menyebar
  const loveBackground = document.querySelector('.love-background');
  
  function createLove() {
    const love = document.createElement('div');
    love.innerHTML = '💖';
    love.classList.add('love');
    love.style.left = Math.random() * 100 + 'vw';
    love.style.animationDuration = Math.random() * 3 + 2 + 's';
    love.style.fontSize = Math.random() * 20 + 10 + 'px';
    love.style.opacity = Math.random() * 0.7 + 0.3;
    loveBackground.appendChild(love);
  
    setTimeout(() => {
      love.remove();
    }, 5000);
  }
  
  setInterval(createLove, 300);
  
  window.onload = function() {
    musik.play();
  };