// Play background music
const backgroundMusic = document.getElementById('backgroundMusic');
const musicButton = document.getElementById('musicButton');
const musicIcon = document.getElementById('musicIcon');

musicButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
    } else {
        backgroundMusic.pause();
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
    }
});

// Daftar kata-kata romantis panjang dalam Bahasa Indonesia
const messages = [
    `Sayangku, terima kasih telah menjadi bagian terindah dalam hidupku. Setiap hari bersamamu adalah anugerah yang tak ternilai. Aku bersyukur memiliki seseorang sepertimu, yang selalu membuatku tersenyum bahkan di hari-hari terberatku. Aku mencintaimu lebih dari kata-kata bisa ungkapkan. 💖`,
    `Setiap detik bersamamu adalah momen berharga yang tak akan pernah tergantikan. Kamu adalah alasan mengapa aku percaya pada cinta sejati. Aku berjanji akan selalu ada untukmu, dalam suka dan duka. Aku mencintaimu sampai ke bulan dan kembali. 🌙💖`,
    `Kamu adalah mimpi yang menjadi kenyataan. Setiap kali aku memandang matamu, aku tahu bahwa aku telah menemukan rumahku. Terima kasih telah mencintaiku apa adanya. Aku berjanji akan selalu membuatmu bahagia, sekarang dan selamanya. 💑`,
    `Aku tidak pernah menyangka bahwa cinta bisa seindah ini. Kamu telah mengisi hidupku dengan kebahagiaan dan makna. Aku bersyukur bisa menjalani hidup bersamamu. Aku mencintaimu lebih dari apapun di dunia ini. 💞`,
    `Kamu adalah alasan mengapa aku tersenyum setiap hari. Kamu adalah alasan mengapa aku bangun dengan semangat. Kamu adalah segalanya bagiku. Aku berjanji akan selalu mencintaimu, merawatmu, dan membuatmu merasa spesial setiap hari. 🌹`
];

let currentMessageIndex = 0;
const messageElement = document.getElementById('message');

// Fungsi untuk mengubah pesan
function changeMessage() {
    messageElement.classList.remove('animate__fadeIn');
    messageElement.classList.add('animate__fadeOut');

    setTimeout(() => {
        messageElement.textContent = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        messageElement.classList.remove('animate__fadeOut');
        messageElement.classList.add('animate__fadeIn');
    }, 500);
}

// Event listener untuk mengklik pesan
messageElement.addEventListener('click', changeMessage);