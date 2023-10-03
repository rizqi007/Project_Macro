// utama.html
// Mengecek apakah pengguna telah mengklik "Get Started" sebelumnya
if (sessionStorage.getItem("getStartedClicked")) {
  // Jika sudah mengklik, arahkan pengguna ke halaman lain (ganti 'halaman-lain.html' dengan URL yang sesuai)
  window.location.href = "index.html";
}

// Menambahkan event listener untuk mengarahkan pengguna ke halaman lain saat mengklik "Get Started"
document
  .getElementById("getStartedLink")
  .addEventListener("click", function (event) {
    // Mencegah tindakan bawaan dari tautan "Get Started"
    event.preventDefault();

    // Mengatur status bahwa pengguna telah mengklik "Get Started"
    sessionStorage.setItem("getStartedClicked", "true");

    // Mengarahkan pengguna ke halaman lain (ganti 'halaman-lain.html' dengan URL yang sesuai)
    window.location.href = "index.html";
  });
