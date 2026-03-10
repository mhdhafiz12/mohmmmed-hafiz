        $(document).ready(function () {

            $('body').append(`
                <div id="popup-overlay">
                    <div id="popup-box">
                        <h4>Contact us</h4>
                        <p>
                            Thanks for reaching out! 👋<br>
                            📧 hafismohammedhafiz@gmail.com<br>
                            📞 Phone: 9895268422
                        </p>
                        <button id="popup-close">OK</button>
                    </div>
                </div>
            `);

            $('a.conbtn').on('click', function (e) {
                e.preventDefault();

                const card = $('.card');
                const cardOffset = card.offset();
                const cardW = card.outerWidth();

                $('#popup-box').css({
                    top: cardOffset.top + 60,          
                    left: cardOffset.left + cardW / 2 - 150,  
                });

                $('#popup-overlay').fadeIn(1000);
            });

            $(document).on('click', '#popup-close', function () {
                $('#popup-overlay').fadeOut(1000);
            });

            $(document).on('click', '#popup-overlay', function (e) {
                if ($(e.target).is('#popup-overlay')) {
                    $('#popup-overlay').fadeOut(1000);
                }
            });
        });