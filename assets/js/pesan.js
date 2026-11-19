/* Form pemesanan: menampilkan ringkasan pesanan di halaman.
   Catatan: ini hanya tampilan (demo). Data tidak dikirim ke server. */
$(function () {
    "use strict";

    var $form = $("#contact-form");
    var $pesan = $("#form-message");

    $form.on("submit", function (e) {
        e.preventDefault();

        var nama = $.trim($("#nama").val());
        var tanggal = $("#tanggal").val();
        var jam = $("#jam").val();
        var dewasa = parseInt($("#dewasa").val(), 10) || 0;
        var anak = parseInt($("#anak").val(), 10) || 0;
        var area = $("#area").val();

        var layanan = $("input[name='layanan']:checked").map(function () {
            return $(this).parent().text().replace(/^\s+|\s+$/g, "");
        }).get();

        var bayar = $("input[name='bayar']:checked").parent().text().replace(/^\s+|\s+$/g, "");

        var teks = "Terima kasih, " + $("<div>").text(nama).html() + "! Pesanan untuk " +
            dewasa + " dewasa dan " + anak + " anak di " + $("<div>").text(area).html() +
            " pada " + tanggal + (jam ? " pukul " + jam : "") + " sudah tercatat." +
            (layanan.length ? " Layanan tambahan: " + layanan.join(", ") + "." : "") +
            (bayar ? " Pembayaran: " + bayar + "." : "") +
            " (Demo: data belum dikirim ke server.)";

        $pesan.html(teks).addClass("tampil");
    });

    $form.on("reset", function () {
        $pesan.removeClass("tampil").empty();
        // sinkronkan tampilan nice-select setelah reset
        setTimeout(function () { $("select").niceSelect("update"); }, 0);
    });
});
