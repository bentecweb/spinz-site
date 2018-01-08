var vtransparent = 1;

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.navbar-custom').css('background','#333399');
        vtransparent = 0;
    } else {
        $('.navbar-custom').css('background','transparent');
        vtransparent = 1;
    }
});

$(document).ready(function() {
    $(".navar-custom").click(function(event) {
        if (transparent == 1){
            $(".navbar-custom").css('background','#333399');
            vtransparent = 0;
        }
        else {
            $(".navbar-custom").css('background','transparent');
            vtransparent = 1;
        }
    });
});
