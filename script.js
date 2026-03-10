$(document).ready(function () {
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
    const downloads = {
        'download-btn-windows': 'StudentAttendance-1.0.exe',
        'download-btn-linux':   'studentattendance_1.0_amd64.deb',
    };

    $.each(downloads, function (id, filename) {
        $('#' + id).on('click', function (e) {
            e.preventDefault();
            const a = document.createElement('a');
            a.href = filename;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });

});