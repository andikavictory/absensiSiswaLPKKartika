function onScanSuccess(decodedText){
    let dataQR = JSON.parse(decodedText)
    let sekarang = Date.now()
    let selisih = sekarang - dataQR.time

    //5 menit = 300000 ms
    if (selisih > 300000){

        document.getElementById("status").innerText = "Qr sudah kadaluarsa"
    } else {
        document.getElementById("status").innerText = "QR valid, silakan lanjut absensi"
        

    //simpan verifikasi QR
    localStorage.setItem("qrValid","true")

    //pindah halaman
    window.location.href = "absensi.html"
   
    }

}

let scanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: 250 }
)

scanner.render(onScanSuccess)