// Mendapatkan elemen-elemen yang diperlukan
const jawabanInput = document.getElementById("jawabanInput");
const cekJawabanButton = document.getElementById("cekJawabanButton");
const pesanHasil = document.getElementById("pesanHasil");

// Menyediakan jawaban yang benar
const jawabanBenar = "afgan energio kanahaya";

// Menambahkan event listener untuk tombol cek jawaban
cekJawabanButton.addEventListener("click", function () {
  const jawabanPengguna = jawabanInput.value;

  if (jawabanPengguna === jawabanBenar) {
    pesanHasil.textContent = "Widihh apgan ga tuh 👉😏👉";
  } else {
    pesanHasil.textContent = "Coba dipikir-pikir maningg 🤨";
  }
});
