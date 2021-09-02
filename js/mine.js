$(window).scroll(function() {
    let dis = $(window).scrollTop();
    //nav style
    if (dis > 10) {
        $("#topNav").css("boxShadow", "0 10px 20px rgba(158, 158, 158, 0.3)");
    } else {
        $("#topNav").css("boxShadow", "none");
    }
})
$("nav a").click(function(e) {
    let aHref = $(this).attr("href");
    let idOffset = $(aHref).offset().top;
    $("body,html").animate({ scrollTop: idOffset }, 1000);
    $('.act').removeClass('act');
    $(e.target).addClass('act');

})

//owl carousel fun
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});