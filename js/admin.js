function generateQR(){
    let waktu = Date.now()
    let dataQR = "ABSEN-" + waktu

    document.getElementById("qrcode").innerHTML = ""
    new QRCode(document.getElementById("qrcode"), dataQR)

    document.getElementById("status").innerText = `QR dibuat : ${new Date().toLocaleDateString("id-ID",{weekday: "long",day:"2-digit",month:"long",year:"numeric"})} (${new Date().toLocaleTimeString()})`
}

// Generate QR pertama kali saat halaman dimuat
generateQR()

// Perbarui QR setiap 20000 ms atau 20 detik
setInterval(generateQR, 20000)