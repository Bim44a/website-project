// JQUERY
$(document).ready(function () {
  // EVENT 1: Navbar berubah saat scroll
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar-custom").addClass("scrolled");
    } else {
      $(".navbar-custom").removeClass("scrolled");
    }
  });

  // EVENT 2: Isi modal produk
  $(".btn-detail").on("click", function () {
    const nama = $(this).data("nama");
    const img = $(this).data("img");
    const desc = $(this).data("desc");

    $("#modalName").text(nama);
    $("#modalImage").attr("src", img);
    $("#modalDesc").text(desc);
  });

  // Restart video saat modal ditutup
  $("#videoModal").on("hidden.bs.modal", function () {
    const vid = document.getElementById("promoVideo");
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
    }
  });

  // EVENT 3: Smooth Scroll
  $(".scroll-smooth").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 70,
      },
      600
    );
  });

  // EVENT 4: Hover effect pada fitur
  $(".feature-icon-box").hover(
    function () {
      $(this).css({
        "background-color": "#ffc107",
        color: "white",
        transform: "rotate(15deg)",
      });
    },
    function () {
      $(this).css({
        "background-color": "rgba(255, 193, 7, 0.1)",
        color: "#ffc107",
        transform: "rotate(0deg)",
      });
    }
  );
});

// LOGIC JAVASCRIPT BIASA
alert("Selamat datang di Website Pisang Premium!");

const namaUMKM = "UMKM Pisang Premium";
console.log("Nama UMKM:", namaUMKM);

let jumlahProduk = 4;
console.log("Jumlah produk awal:", jumlahProduk);

jumlahProduk += 6;
console.log("Setelah menambah produk baru:", jumlahProduk);

console.log(" ===== Tambahan Produk ======");
let pisangRaja = 3;
let pisangSusu = 5;
let pisangAmbon = 2;

console.log("Pisang Raja:", pisangRaja);
console.log("Pisang Susu:", pisangSusu);
console.log("Pisang Ambon:", pisangAmbon);

let totalJenisProduk = pisangRaja + pisangSusu + pisangAmbon;
console.log("Total jenis produk:", totalJenisProduk);

console.log("==========================");
console.log("Terima kasih telah mengunjungi Website Pisang Premium kami!");
