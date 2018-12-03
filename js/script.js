$(document).ready(function () {
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            items:1,
            dots:true,
            dotsEach:true,
            autoplay:true
        });
    });
    var $navToggler = $(".nav-bar-collapse");
    $navToggler.on('click',function () {
        $(".header__nav ul").toggleClass('show');
    })
})
