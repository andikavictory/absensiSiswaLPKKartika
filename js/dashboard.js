let data = localStorage.getItem("siswaLogin")

if(!data){
    window.location.href = "index.html"
}

let murid = JSON.parse(data)

document.getElementById("nama").innerText = "Hallo " + murid.nama
document.getElementById("paket").innerText = "Paket : " +murid.jenis + " " + murid.paket + "x"

function logout(){
    localStorage.removeItem("siswaLogin")
    window.location.href = "index.html"
}

function mulaiAbsen(){
    localStorage.removeItem("qrValid")
    window.location.href = "scan.html"
}