const form = document.getElementById("formKontak");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomorWhatsApp = "6281339181944";

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("e-mail").value;
    const telepon = document.getElementById("telepon").value;
    const minat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;

    if (nama === "" || pesan === "") {
        alert("Nama dan Pesan wajib diisi!");
        return;
    }

    const isiPesan = `Halo, saya menghubungi melalui website CV

Nama Lengkap : ${nama}
Email : ${email}
No. Telepon : ${telepon}
Bidang Minat : ${minat}

Pesan :
${pesan}`;

    const pesanEncoded = encodeURIComponent(isiPesan);
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${pesanEncoded}`;

    window.location.href = urlWhatsApp;
});
