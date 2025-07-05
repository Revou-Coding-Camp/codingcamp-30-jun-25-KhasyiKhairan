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


function validateForm () {
  const nama = document.getElementById('nama').value;
  const tanggal_lahir = document.getElementById('tanggal_lahir').value;
  const jenis_kelamin = document.getElementById('jenis_kelamin').value;
  const nomor_hp = document.getElementById('nomor_hp').value;
  const pesan = document.getElementById('pesan').value;

  document.getElementById('res-nama').innerHTML =  nama;
  document.getElementById('res-tanggal_lahir').innerHTML =  tanggal_lahir;
  document.getElementById('res-jenis_kelamin').innerHTML =  jenis_kelamin;
  document.getElementById('res-nomor_hp').innerHTML =  nomor_hp;
  document.getElementById('res-pesan').innerHTML =  pesan;
  //alert(nama);
}

