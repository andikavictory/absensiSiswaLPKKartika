function onScanSuccess(decodedText){
    if(!decodedText.startsWith("ABSEN-")){
        document.getElementById("status").innerText = "QR tidak valid"
        return
    }
    let waktuQR = decodedText.replace("ABSEN-","")
    
    let sekarang = Date.now()
    let selisih = sekarang - waktuQR

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
