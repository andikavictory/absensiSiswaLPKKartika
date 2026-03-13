let data = localStorage.getItem("siswaLogin")

if(!data){
    window.location.href = "index.html"
}

let siswa = JSON.parse(data)

document.getElementById("nama").innerText = "Hallo " + siswa.nama

document.getElementById("paket").innerText = "Paket : " +siswa.jenis + " " + siswa.paket + "x"

function logout(){
    localStorage.removeItem("siswaLogin")
    window.location.href = "index.html"
}

function mulaiAbsen(){
    localStorage.removeItem("qrValid")
    window.location.href = "scan.html"
}