(function ($) {
  'use strict';

  // Plugin sticky tidak disertakan di template; cegah error
  if (!$.fn.stick_in_parent) { $.fn.stick_in_parent = function () { return this; }; }

  // Tombol di dalam konten yang menuju bagian lain (di luar menu samping)
  $('a[data-nav-section]').not('#navbar a').on('click', function (e) {
    e.preventDefault();
    var target = $('[data-section="' + $(this).data('nav-section') + '"]');
    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top - 55 }, 500);
    }
  });

  // Filter galeri
  $('.work-menu a').on('click', function (e) {
    e.preventDefault();
    var f = $(this).data('filter');
    $('.work-menu a').removeClass('active');
    $(this).addClass('active');
    $('.gallery-item').each(function () {
      var show = f === 'all' || $(this).data('cat') === f;
      $(this).toggleClass('is-hidden', !show);
    });
  });

  // Formulir kontak: membuka aplikasi email pengunjung
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var f = this;
    var body = f.message.value + '\n\n--\n' + f.name.value + '\n' + f.email.value;
    window.location.href = 'mailto:putrikia871@gmail.com' +
      '?subject=' + encodeURIComponent(f.subject.value) +
      '&body=' + encodeURIComponent(body);
  });
})(jQuery);
