$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 2) {
        $(".intro").addClass("grey-bg");
    } else {
        $(".intro").removeClass("grey-bg");
    }
});