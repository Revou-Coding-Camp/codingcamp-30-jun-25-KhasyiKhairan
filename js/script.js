function tampilkanWaktu() {
  const sekarang = new Date();
  const jam = sekarang.getHours().toString().padStart(2, '0');
  const menit = sekarang.getMinutes().toString().padStart(2, '0');
  const detik = sekarang.getSeconds().toString().padStart(2, '0');

  const waktuLengkap = `${jam}:${menit}:${detik}`;
  document.getElementById("waktu").textContent = waktuLengkap;
}

// Update waktu setiap detik
setInterval(tampilkanWaktu, 1000);
tampilkanWaktu(); // jalankan pertama kali agar tidak delay




document.getElementById("formData").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil nilai input
  const nama = document.getElementById("nama").value;
  const tgllahir = document.getElementById("tanggal_lahir").value;
  const jnskel = document.getElementById("jenis_kelamin").value;
  const notelp = document.getElementById("nomor_hp").value;
  const pesan = document.getElementById("pesan").value;

  alert(nama);

  // Tampilkan hasilnya di elemen HTML
  const hasil = `
    <div class="row align-items-center">
      <label for="nama" class="col-sm-3 col-form-label">Name</label>
      <div class="col-sm-9">${nama}</div>
    </div>

    <div class="row align-items-center">
      <label for="tanggal_lahir" class="col-sm-3 col-form-label">Date of Birth</label>
      <div class="col-sm-9">${tgllahir}</div>
    </div>

    <div class="row">
      <label class="col-sm-3 col-form-label">Gender</label>
      <div class="col-sm-9">${jnskel}</div>
    </div>

    <div class="row align-items-center">
      <label for="nomor_hp" class="col-sm-3 col-form-label">Phone Number</label>
      <div class="col-sm-9">${notelp}</div>
    </div>

    <div class="row mb-3">
      <label for="pesan" class="col-sm-3 col-form-label">Message</label>
      <div class="col-sm-9">${pesan}</div>
    </div>
  `;
    document.getElementById("hasilSubmit").innerHTML = hasil;
});

