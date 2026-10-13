const form = document.getElementById("formkontak");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomorWhatsApp = "6282244556677"; // NOMOR KAMU

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
    const minat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;

    if (nama === "" || pesan === "") {
        alert("Nama dan Pesan wajib diisi!");
        return;
    }

    const isiPesan = `Halo, saya menghubungi melalui website

Nama Lengkap : ${nama}
Email        : ${email}
No. Telepon  : ${telepon}
Bidang Minat : ${minat}

Pesan :
${pesan}`;

    const pesanEncoded = encodeURIComponent(isiPesan);
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${pesanEncoded}`;

    window.location.href = urlWhatsApp;
});
