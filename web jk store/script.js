function orderService(serviceName) {
    document.getElementById('service').value = serviceName;
    document.getElementById('services').style.display = 'none';
    document.getElementById('order-form').style.display = 'block';

    // Tampilkan pilihan provider atau e-wallet berdasarkan layanan
    if (serviceName === 'Kuota Internet' || serviceName === 'Pulsa') {
        document.getElementById('providerSection').style.display = 'block';
        document.getElementById('ewalletSection').style.display = 'none';
    } else if (serviceName === 'E-Wallet') {
        document.getElementById('ewalletSection').style.display = 'block';
        document.getElementById('providerSection').style.display = 'none';
    }
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const service = document.getElementById('service').value;
    const provider = document.getElementById('provider').value;
    const ewallet = document.getElementById('ewallet').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    let message = `Halo JK CELL, saya ingin memesan ${service}:
    - Sebesar: ${amount}
    - Untuk nomor: ${phone} 
    - Email saya adalah: ${email}

    `;

    if (service === 'Kuota Internet' || service === 'Pulsa') {
        message += ` Provider: ${provider}.`;
    } else if (service === 'E-Wallet') {
        message += ` E-Wallet: ${ewallet}.`;
    }

    const whatsappLink = `https://wa.me/6289525856185?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
});