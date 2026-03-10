$(document).ready(function () {

    // ── Contact Popup ──
    $('body').append(`
        <div id="popup-overlay">
            <div id="popup-box">
                <h4>Contact us</h4>
                <p>Thanks for reaching out! 👋<br>
                📧 hafismohammedhafiz@gmail.com<br>
                📞 Phone: 9895268422</p>
                <button id="popup-close">OK</button>
            </div>
        </div>
    `);

    $('a.conbtn').on('click', function (e) {
        e.preventDefault();

        const card = $('.card');
        const cardOffset = card.offset();
        const cardW = card.outerWidth();
        const cardH = card.outerHeight();

        $('#popup-box').css({
            position: 'absolute',
            top: cardOffset.top + cardH / 2 - 80,
            left: cardOffset.left + cardW / 2 - 110,
        });

        $('#popup-overlay').fadeToggle(1000);
    });

    $('#popup-close').on('click', function () {
        $('#popup-overlay').fadeToggle(1000);
    });

    // ── Download Badges ──
    // Place your installer files in the same folder as this script
    const downloads = {
        'download-btn-windows': 'https://github.com/mhdhafiz12/mohmmmed-hafiz/releases/download/v1.0/StudentAttendance-1.0.exe',
        'download-btn-linux':   'https://github.com/mhdhafiz12/mohmmmed-hafiz/releases/download/v1.0/studentattendance_1.0_amd64.deb',
    };

    $.each(downloads, function (id, filename) {
        $('#' + id).on('click', function (e) {
            e.preventDefault();

            // Creates a hidden <a> tag, clicks it, then removes it
            // This forces a direct download — no new tab or page navigation
            const a = document.createElement('a');
            a.href = filename;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });

});
