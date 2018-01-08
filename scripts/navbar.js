$(window).scroll(function () {
    var navbar = document.querySelector('#navbarid');
    if ($(window).scrollTop() >= 50) {
        navbar.classList.remove('navbar-black');
        navbar.classList.add('navbar-white');
        document.getElementById("navlogo").src = "images/Logo.svg";
        document.getElementById("navbar-toggler-icon").style.backgroundImage="url('images/navbar-toggler-icon-black.svg')"; 
    }
    else {
        navbar.classList.remove('navbar-white');
        navbar.classList.add('navbar-black');
        document.getElementById("navlogo").src="images/LogoI.svg";
        document.getElementById("navbar-toggler-icon").style.backgroundImage="url('images/navbar-toggler-icon-white.svg')"; 
    }
});


$('#navbarbutton').on('click', function() {
    var navbar = document.querySelector('#navbarid');
    if (navbar.classList.contains('navbar-tparent')) {
        navbar.classList.add('navbar-blue');
        navbar.classList.remove('navbar-tparent');

    }
    else if ($(window).scrollTop() < 50) {
        setTimeout(function() {
            navbar.classList.remove('navbar-blue');
            navbar.classList.add('navbar-tparent');
        },250);
    }
})

