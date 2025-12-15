document.addEventListener("DOMContentLoaded", function () {
  // Data Produk
  const produkData = [
    {
      nama: "Pisang Raja",
      harga: 30000,
      img: "images/pisraj.png",
      desc: "Raja dari segala pisang dengan daging tebal dan rasa manis legit. Pilihan utama untuk olahan goreng premium.",
      rating: 5,
    },
    {
      nama: "Pisang Susu",
      harga: 31000,
      img: "images/pissu.png",
      desc: "Ukuran mungil dengan tekstur creamy dan kulit tipis. Camilan sehat favorit anak-anak yang praktis.",
      rating: 5,
    },
    {
      nama: "Pisang Ambon",
      harga: 30000,
      img: "images/pimbon.png",
      desc: "Pisang Ambon Aroma harum yang kuat dengan tekstur yang sangat halus. Sangat baik untuk pencernaan dan MPASI.",
      rating: 4,
    },
    {
      nama: "Pisang Ampyang",
      harga: 25000,
      img: "images/pisyang.png",
      desc: "Tekstur unik yang kenyal dan tidak lembek. Pilihan terbaik untuk dikukus atau direbus sebagai teman santai.",
      rating: 4.5,
    },
  ];

  // Render Produk
  const containerProduk = document.getElementById("katalogProduk");

  produkData.forEach((prod) => {
    let stars = "";
    for (let i = 0; i < Math.floor(prod.rating); i++) stars += "★";
    if (prod.rating % 1 !== 0) stars += "½";

    const html = `
        <div class="col-md-6 col-lg-3">
            <div class="card product-card">
                <div class="card-img-wrapper">
                    <img src="${prod.img}" alt="${prod.nama}">
                </div>
                <div class="card-body text-center d-flex flex-column">
                    <h5 class="fw-bold mb-1" style="color: #2c3e50;">${
                      prod.nama
                    }</h5>
                    <div class="mb-2 text-warning small">${stars}</div>
                    <p class="text-muted small flex-grow-1">${prod.desc}</p>
                    <h5 class="text-primary fw-bold mb-3">Rp ${prod.harga.toLocaleString(
                      "id-ID"
                    )}</h5>
                    <a href="https://wa.me/6287745514313?text=Pesan ${
                      prod.nama
                    }" target="_blank" class="btn btn-outline-dark btn-sm rounded-pill w-100">Pesan WA</a>
                </div>
            </div>
        </div>
    `;

    containerProduk.innerHTML += html;
  });

  // Rekomendasi Usia
  function cekRekomendasi() {
    const usia = parseInt(document.getElementById("inputUsia").value);
    const box = document.getElementById("hasilRekomendasi");

    box.className = "result-box";

    if (isNaN(usia) || usia <= 0 || usia > 100) {
      box.innerText = "Mohon masukkan usia yang valid.";
      box.classList.add("error");
      return;
    }

    let hasil = "";

    if (usia < 10) hasil = "Anak-anak: Pisang Susu (Lembut dan mudah dicerna).";
    else if (usia <= 25) hasil = "Remaja: Pisang Ampyang (Energi sesuai aktivitas tinggi).";
    else if (usia <= 50) hasil = "Dewasa: Pisang Raja (Nutrisi seimbang untuk kebutuhan harian).";
    else hasil = "Lansia: Pisang Ambon (Empuk dan nyaman untuk pencernaan).";

    box.innerText = hasil;
    box.classList.add("success");
  }

  document
    .getElementById("btnCekUsia")
    .addEventListener("click", cekRekomendasi);

  // Kalkulator Belanja
  function hitungBelanja() {
    const harga = parseFloat(document.getElementById("inputHarga").value);
    const jumlah = parseFloat(document.getElementById("inputJumlah").value);
    const box = document.getElementById("hasilKalkulator");

    box.className = "result-box";

    if (!harga || !jumlah || harga < 0 || jumlah < 0) {
      box.innerText = "Masukkan angka yang valid.";
      box.classList.add("error");
      return;
    }

    const total = harga * jumlah;
    const formatRupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(total);

    box.innerText = "Total Estimasi: " + formatRupiah;
    box.classList.add("success");
  }

  document .getElementById("btnHitungBelanja") .addEventListener("click", hitungBelanja);

  // Testimoni
  const dataTestimoni = [
    { nama: "Zaenal Abidin",
      komen: "Pisang Rajanya manis banget!",
      rating: 5 
    },
    {
      nama: "Windah Basudara",
      komen: "Pengiriman cepat, buah segar.",
      rating: 5
    },
    { nama: "Mavelyn JO",
      komen: "Pisang Ambonnya wangi sekali.",
      rating: 4
    },
    { nama: "Morinn JO",
      komen: "Pisang Susunya favorit keluarga.",
      rating: 5 
    },
    {
      nama: "Joko Widodo",
      komen: "Harga grosir sangat bersahabat.",
      rating: 5
    },
    { nama: "Donald Trump",
      komen: "Packaging sangat aman.",
      rating: 4 },
  ];

  const wadahTesti = document.getElementById("wadahTestimoni");

  dataTestimoni.forEach((item) => {
    let stars = "";
    for (let i = 0; i < item.rating; i++) stars += "★";

    const html = `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="testi-card h-100 shadow-sm">
                <div class="star-rating mb-2">${stars}</div>
                <p class="text-muted fst-italic">"${item.komen}"</p>
                <div class="fw-bold text-end text-warning">- ${item.nama}</div>
            </div>
        </div>
    `;

    wadahTesti.innerHTML += html;
  });

  // Efek Navbar Scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50)
      $(".navbar-custom").addClass("scrolled shadow-sm");
    else $(".navbar-custom").removeClass("scrolled shadow-sm");
  });
});
