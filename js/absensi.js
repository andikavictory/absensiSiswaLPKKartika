let pertemuan = murid.absen + 1

document.getElementById("namaSiswa").innerText = murid.nama
document.getElementById("paket").innerText = murid.paket + "x"
document.getElementById("jenisMobil").innerText = murid.jenis
document.getElementById("instruktur").innerText = murid.instruktur
document.getElementById("pertemuan").innerText = pertemuan


//ambil materi dari js materi
let daftarMateri = materi[murid.paket][pertemuan]

//tampilkan materi
tampilankanMateri(daftarMateri)

function tampilankanMateri(dataMateri){
    let container = document.getElementById("listMateri")
    container.innerHTML = ""

    dataMateri.forEach(function(item) {
    //filter khusus pertemuan manual

   if(item.includes("|manual") && murid.jenis === "Matic"){
    return
    }

    if(item.includes("|matic") && murid.jenis === "Manual"){
        return
    }

    // hapus tag dari teks
    item = item.replace("|manual", "")
    item = item.replace("|matic", "")
    item = item.replace("|all", "")

    let checkbox = `
    <label>
    <input type="checkbox" cvalue="${item}">
    ${item}
    </label>
    <br>`

     container.innerHTML += checkbox
    })

}