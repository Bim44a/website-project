$(document).ready(function () {
  // 1. Navbar Scroll Style
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar-custom").addClass("scrolled shadow-sm");
    } else {
      $(".navbar-custom").removeClass("scrolled shadow-sm");
    }
  });

  // ----------------------------------------------------
  // FUNGSI UMUM: Tampilkan Error & Feedback
  // ----------------------------------------------------
  function showError(inputId, msgId, message) {
    $(inputId).addClass("is-invalid");
    $(msgId).text(message).fadeIn();
  }

  function clearError(inputId, msgId) {
    $(inputId).removeClass("is-invalid");
    $(msgId).fadeOut();
  }

  function showFeedback(boxId, message, type) {
    let cssClass = type === "success" ? "feedback-success" : "feedback-warning";
    $(boxId)
      .removeClass("feedback-success feedback-warning")
      .addClass(cssClass)
      .text(message)
      .fadeIn();
    setTimeout(() => {
      $(boxId).fadeOut();
    }, 3000);
  }

  // ----------------------------------------------------
  // A. VALIDASI FORM KONTAK
  // ----------------------------------------------------
  $("#kontakForm").on("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Nama
    let nama = $("#k_nama").val().trim();
    if (nama === "") {
      showError("#k_nama", "#err-k_nama", "Nama wajib diisi.");
      valid = false;
    } else clearError("#k_nama", "#err-k_nama");

    // Email
    let email = $("#k_email").val().trim();
    let emailPat = /^[^ ]+@gmail\.com$/i;
    if (!emailPat.test(email)) {
      showError("#k_email", "#err-k_email", "Email harus @gmail.com.");
      valid = false;
    } else clearError("#k_email", "#err-k_email");

    // Phone
    let phone = $("#k_phone").val().trim();
    if (!/^[0-9+]*$/.test(phone) || phone === "") {
      showError("#k_phone", "#err-k_phone", "Hanya angka.");
      valid = false;
    } else clearError("#k_phone", "#err-k_phone");

    // Pesan
    let pesan = $("#k_pesan").val().trim();
    if (pesan.length < 10) {
      showError("#k_pesan", "#err-k_pesan", "Minimal 10 karakter.");
      valid = false;
    } else clearError("#k_pesan", "#err-k_pesan");

    if (valid) {
      showFeedback("#k_feedback", "Pesan Kontak Berhasil Dikirim!", "success");
      this.reset();
    }
  });

  // Realtime Validation Kontak (Hapus merah saat mengetik)
  $("#kontakForm input, #kontakForm textarea").on("input", function () {
    $(this).removeClass("is-invalid");
    $(this).siblings(".error-msg").fadeOut();
  });

  // Reset Button Kontak
  $("#k_clearData").click(function () {
    if (confirm("Hapus isi formulir kontak?")) {
      $("#kontakForm")[0].reset();
      $(".is-invalid").removeClass("is-invalid");
      $(".error-msg").hide();
    }
  });

  // ----------------------------------------------------
  // B. VALIDASI FORM WEBINAR
  // ----------------------------------------------------
  $("#webinarForm").on("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Nama
    if ($("#w_nama").val().trim() === "") {
      showError("#w_nama", "#err-w_nama", "Wajib diisi.");
      valid = false;
    } else clearError("#w_nama", "#err-w_nama");

    // Email
    let wEmail = $("#w_email").val().trim();
    if (!/^[^ ]+@gmail\.com$/i.test(wEmail)) {
      showError("#w_email", "#err-w_email", "Wajib @gmail.com.");
      valid = false;
    } else clearError("#w_email", "#err-w_email");

    // Kategori
    if ($("#w_kategori").val() === "") {
      showError("#w_kategori", "#err-w_kategori", "Pilih topik.");
      valid = false;
    } else clearError("#w_kategori", "#err-w_kategori");

    // Syarat
    if (!$("#w_syarat").is(":checked")) {
      $("#err-w_syarat").fadeIn();
      valid = false;
    } else $("#err-w_syarat").fadeOut();

    if (valid) {
      showFeedback("#w_feedback", "Pendaftaran Webinar Berhasil!", "success");
      this.reset();
    }
  });

  // Realtime Validation Webinar
  $("#webinarForm input, #webinarForm select").on("input change", function () {
    $(this).removeClass("is-invalid");
    $(this).siblings(".error-msg").fadeOut();
    if (this.id === "w_syarat" && this.checked) $("#err-w_syarat").fadeOut();
  });

  // Reset Button Webinar
  $("#w_clearData").click(function () {
    if (confirm("Batalkan pendaftaran webinar?")) {
      $("#webinarForm")[0].reset();
      $(".is-invalid").removeClass("is-invalid");
      $(".error-msg").hide();
    }
  });
});
