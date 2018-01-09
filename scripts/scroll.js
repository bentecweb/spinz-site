var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -120
    }, 500);

    return false;
});

// When the user clicks on the button, scroll to the top of the document
$('.myBtn').click(function(){
    $('html, body').animate({scrollTop : 0},500);
    return false;
});

