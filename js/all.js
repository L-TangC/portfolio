$(document).ready(function () {
    $('.contact-buttom').click(function (e) { 
        e.preventDefault();
        $('.contact,.shade').fadeIn(200);
    });
    $('.cancel_buttom').click(function (e) { 
        e.preventDefault();
        $('.contact,.shade').fadeOut(200);
    });
})