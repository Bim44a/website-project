const cards = document.querySelectorAll(".card-gallery");
const navbar = document.querySelector(".navbar-custom");

// 1. Fungsi Navbar Scroll Effect
const initNavbar = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
};

// 2. Fungsi Mengubah Teks saat Klik
const tampilkanNama = (card) => {
  const img = card.querySelector("img");
  const { alt } = img;
  const text = card.querySelector("p");
  
  // Mengganti teks paragraf dengan Alt text
  text.textContent = `${alt}`;
  
  // Opsional: Styling agar terlihat beda saat berubah
  text.style.fontWeight = "bold";
  text.style.color = "#2c3e50";
};

// 3. Fungsi Menambah Efek Hover
const tambahHover = (card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("hover-aktif");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("hover-aktif");
  });
};

// 4. Inisialisasi Galeri
const initGaleri = () => {
  // Jalankan listener Navbar
  initNavbar();

  // Loop untuk setiap kartu
  cards.forEach((card) => {
    card.addEventListener("click", () => tampilkanNama(card));
    tambahHover(card);
  });
};

initGaleri();
export { initGaleri };