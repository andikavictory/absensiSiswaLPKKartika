function login(){
let idInput = document.getElementById("idSiswa").value
let user = siswa.find(s => s.id === idInput)

if(user){

   localStorage.setItem("siswaLogin", JSON.stringify(user))
   window.location.href = "dashboard.html"
} else {
     document.getElementById("pesan").innerText = "ID tidak ditemukan"
}

}