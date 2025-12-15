$(document).ready(function () {
  // 1. Navbar Scroll Effect
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar-custom").addClass("scrolled shadow-sm");
    } else {
      $(".navbar-custom").removeClass("scrolled shadow-sm");
    }
  });

  // 2. Simple Counter Animation (JQuery Effect)
  // Efek angka berjalan naik saat halaman dimuat
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  // 3. Hover Effect Team
  $(".team-member").hover(
    function () {
      $(this).css("transform", "translateY(-10px)");
    },
    function () {
      $(this).css("transform", "translateY(0)");
    }
  );
});
