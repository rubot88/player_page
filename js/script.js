$(document).ready(function() {

    $('.carousel').slick({
        asNavFor: '.carousel-bg',
        dots: true
    });
    $('.carousel-bg').slick({
        arrows: false,
        asNavFor: '.carousel',
        swipe: false,
        fade: true
    });

    $('.posts-big-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }


        ]
    });
    $('.posts-small-carousel').slick({
        autoplay: true,
        infinate: true,
        arrows: false,
        dots: true
    });
    $('.burger').click(function() {
        $('.nav-container').toggleClass('active');
        $('.burger').toggleClass('active');
    });
});