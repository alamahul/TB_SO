const logout = document.getElementById("logout");
logout.addEventListener("click", function () {
  const conf = confirm("Apakah anda ingin keluar Aplikasi");
  if (conf == true) {
    alert("Terima kasih telah menggunakan Aplikasi");
    window.location.href = "login.html";
  }
});

// Menu Utama

const labelmakanan = document.querySelectorAll(".label-makanan");
const tombolLihat = document.querySelectorAll(".tombol-lihat");

const ObMakanan = {
  0: { nama: "Kentang Goreng", harga: 5000, Waktu: 15 },
  1: { nama: "Gorengan", harga: 1500, Waktu: 10 },
  2: { nama: "Snack", harga: 3000, Waktu: 12 },
  3: { nama: "Nasi Goreng", harga: 15000, Waktu: 30 },
  4: { nama: "Mie Goreng", harga: 10000, Waktu: 25 },
  5: { nama: "Sate Tusuk", harga: 12000, Waktu: 35 },
  6: { nama: "Teh Hangat", harga: 3000, Waktu: 5 },
  7: { nama: "Jus Buah", harga: 7000, Waktu: 7 },
};

const nama_makanan = document.querySelector(".nama-makanan");
let gambar_makanan = document.querySelector(".gambar-makanan img");
let harga_makanan = document.querySelector(".output-harga p");
let waktu_tunggu = document.querySelector(".output-waktu-tunggu p");

function hapus_active() {
  for (let i = 0; i <= 7; i++) {
    if (labelmakanan[i].getAttribute("class") == "label-makanan m-active") {
      labelmakanan[i].classList.remove("m-active");
    }
  }
}

tombolLihat[0].addEventListener("click", function () {
  nama_makanan.innerHTML = ObMakanan[0]["nama"];
  gambar_makanan.setAttribute("src", "gambar/" + labelmakanan[0].innerHTML + ".jpg");
  harga_makanan.innerHTML = ObMakanan[0]["harga"];
  waktu_tunggu.innerHTML = ObMakanan[0]["Waktu"];
  hapus_active();
  labelmakanan[0].classList.add("m-active");
});
tombolLihat[1].addEventListener("click", function () {
  nama_makanan.innerHTML = ObMakanan[1]["nama"];
  gambar_makanan.setAttribute("src", "gambar/" + labelmakanan[1].innerHTML + ".jpg");
  harga_makanan.innerHTML = ObMakanan[1]["harga"];
  waktu_tunggu.innerHTML = ObMakanan[1]["Waktu"];
  hapus_active();
  labelmakanan[1].classList.add("m-active");
});
tombolLihat[2].addEventListener("click", function () {
  nama_makanan.innerHTML = ObMakanan[2]["nama"];
  gambar_makanan.setAttribute("src", "gambar/" + labelmakanan[2].innerHTML + ".jpg");
  harga_makanan.innerHTML = ObMakanan[2]["harga"];
  waktu_tunggu.innerHTML = ObMakanan[2]["Waktu"];
  hapus_active();
  labelmakanan[2].classList.add("m-active");
});
tombolLihat[3].addEventListener("click", function () {
  nama_makanan.innerHTML = ObMakanan[3]["nama"];
  gambar_makanan.setAttribute("src", "gambar/" + labelmakanan[3].innerHTML + ".jpg");
  harga_makanan.innerHTML = ObMakanan[3]["harga"];
  waktu_tunggu.innerHTML = ObMakanan[3]["Waktu"];
  hapus_active();
  labelmakanan[3].classList.add("m-active");
});
tombolLihat[4].addEventListener("click", function () {
  nama_makanan.innerHTML = ObMakanan[4]["nama"];
  gambar_makanan.setAttribute("src", "gambar/" + labelmakanan[4].innerHTML + ".jpg");
  harga_makanan.innerHTML = ObMakanan[4]["harga"];
  waktu_tunggu.innerHTML = ObMakanan[4]["Waktu"];
  hapus_active();
  labelmakanan[4].classList.add("m-active");
});
tombolLihat[5].addEventListener("click", function () {
  nama_makanan.innerHTML = ObMakanan[5]["nama"];
  gambar_makanan.setAttribute("src", "gambar/" + labelmakanan[5].innerHTML + ".jpg");
  harga_makanan.innerHTML = ObMakanan[5]["harga"];
  waktu_tunggu.innerHTML = ObMakanan[5]["Waktu"];
  hapus_active();
  labelmakanan[5].classList.add("m-active");
});
tombolLihat[6].addEventListener("click", function () {
  nama_makanan.innerHTML = ObMakanan[6]["nama"];
  gambar_makanan.setAttribute("src", "gambar/" + labelmakanan[6].innerHTML + ".jpg");
  harga_makanan.innerHTML = ObMakanan[6]["harga"];
  waktu_tunggu.innerHTML = ObMakanan[6]["Waktu"];
  hapus_active();
  labelmakanan[6].classList.add("m-active");
});
tombolLihat[7].addEventListener("click", function () {
  nama_makanan.innerHTML = ObMakanan[7]["nama"];
  gambar_makanan.setAttribute("src", "gambar/" + labelmakanan[7].innerHTML + ".jpg");
  harga_makanan.innerHTML = ObMakanan[7]["harga"];
  waktu_tunggu.innerHTML = ObMakanan[7]["Waktu"];
  hapus_active();
  labelmakanan[7].classList.add("m-active");
});

// function-function

let namaAntrian = [];
let waktuAntrian = [];
let hargaAntrian = [];
totalAntrian = 0;

const pesan_masuk = document.querySelector(".pesan-masuk");
const nodetotalharga = document.querySelectorAll(".total-output")[0];
const nodetotalWaktu = document.querySelectorAll(".total-output")[1];

let totalWaktu = 0;
let totalHarga = 0;
function tambah_antrian(namaAntrian, waktuAntrian) {}

function fungsi_totalHarga() {
  if (hargaAntrian.length > 0) {
    totalHarga += parseInt(hargaAntrian[totalAntrian]);
  } else {
    totalHarga = 0;
  }
  nodetotalharga.innerHTML = "<p> Rp. " + totalHarga + "</p>";
}
function fungsi_totalWaktu() {
  if (waktuAntrian.length > 0) {
    totalWaktu += parseInt(waktuAntrian[totalAntrian]);
  } else {
    totalWaktu = 0;
  }
  nodetotalWaktu.innerHTML = "<p>" + totalWaktu + " detik</p>";
}

let sedang_diproses = false;

btn_buat_pesanan = document.querySelector(".buat_pesanan");

btn_buat_pesanan.addEventListener("click", function () {
  if (totalAntrian == 5) {
    return alert("Antrian Penuh");
  }
  if (sedang_diproses == true) {
    return alert("tunggu proses selesai");
  }
  namaAntrian.push(nama_makanan.innerHTML);
  waktuAntrian.push(waktu_tunggu.innerHTML);
  hargaAntrian.push(harga_makanan.innerHTML);
  tambah_antrian(namaAntrian, waktuAntrian);
  if (namaAntrian.length > 0) {
    let p = document.createElement("p");
    p.textContent = namaAntrian[totalAntrian];
    let AntriMakanan = document.createElement("div");
    AntriMakanan.appendChild(p);
    AntriMakanan.setAttribute("class", "pesan-makanan");
    pesan_masuk.appendChild(AntriMakanan);
    fungsi_totalHarga();
    fungsi_totalWaktu();
    totalAntrian += 1;
  }
});

btn_hapus_pesanan = document.querySelector(".hapus_pesanan");
btn_hapus_pesanan.addEventListener("click", function () {
  if (sedang_diproses == true) {
    return alert("tunggu proses selesai");
  }
  if (totalAntrian == 0) {
    return alert(" Pesanan belum ada ");
  }
  namaAntrian = [];
  waktuAntrian = [];
  hargaAntrian = [];
  totalAntrian = 0;
  fungsi_totalHarga();
  fungsi_totalWaktu();

  pesan_masuk.innerHTML = "";
});

const subcard_waktu = document.querySelector(".waktu");
subcard_waktu.innerHTML = "";
const btn_kirim_pesanan = document.querySelector(".kirim_pesanan");

btn_kirim_pesanan.addEventListener("click", function () {
  if (subcard_waktu.innerHTML != "") return alert("Proses masih mengantri");
  sedang_diproses = true;
  SJF();
  for (let i = 0; i < totalAntrian; i++) {
    let p = document.createElement("p");
    var nama_pesanan = document.createElement("div");
    nama_pesanan.setAttribute("class", "nama-pesanan");
    nama_pesanan.appendChild(p);
    var timer_waktu = document.createElement("div");
    timer_waktu.setAttribute("class", "timer-waktu");
    timer_waktu.appendChild(p);
    subcard_waktu.appendChild(nama_pesanan);
    subcard_waktu.appendChild(timer_waktu);
    nama_pesanan.innerHTML = "<p>" + namaAntrian[i] + "</p>";
    timer_waktu.innerHTML = "<p>" + waktuAntrian[i] + "</p>";
  }

  ProsesPesanan();
  setTimeout(() => {
    sedang_diproses = false;
  }, totalWaktu * 1000);
  namaAntrian = [];
  waktuAntrian = [];
  hargaAntrian = [];
  totalAntrian = 0;
  fungsi_totalHarga();
  fungsi_totalWaktu();
  pesan_masuk.innerHTML = "";
});

var sementara;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ProsesPesanan() {
  const timer_waktu = document.querySelectorAll(".timer-waktu");

  for (let i = 0; i < timer_waktu.length; i++) {
    let timerElem = timer_waktu[i];
    timerElem.classList.add("process");

    let waktu = parseInt(timerElem.querySelector("p").innerHTML);

    for (let j = waktu; j >= 0; j--) {
      timerElem.querySelector("p").innerHTML = j;
      if (j == 0) {
        timerElem.querySelector("p").innerHTML = "siap dihantarkan";
        timerElem.classList.remove("process");
        timerElem.classList.add("done");
        timerElem.setAttribute("onclick", "hapusNode(this)");
      }
      await delay(1000); // Tunggu satu detik sebelum mengurangi waktu
    }

    // Tambahkan kode di sini jika ada tindakan setelah hitungan mundur selesai
  }
}

function SJF() {
  // Menggabungkan dua array menjadi satu array berisi objek {namaAntrian, waktuAntrian}
  let combinedArray = namaAntrian.map((nama, index) => ({ namaAntrian: nama, waktuAntrian: waktuAntrian[index] }));

  // Mengurutkan array berdasarkan waktuAntrian
  combinedArray.sort((a, b) => a.waktuAntrian - b.waktuAntrian);

  // Memisahkan kembali array yang sudah diurutkan
  namaAntrian = combinedArray.map((item) => item.namaAntrian);
  waktuAntrian = combinedArray.map((item) => item.waktuAntrian);
}

function hapusNode(elem) {
  elem.previousElementSibling.remove();
  elem.remove();
}
