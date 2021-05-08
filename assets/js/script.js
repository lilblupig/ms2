$(".about-toggle").click(function() {
    if ($("#about-fte-calc").is(":hidden")) {
        $("#about-button").children("span").css("background-image", "url('assets/images/on.svg')");
    } else {
        $("#about-button").children("span").css("background-image", "url('assets/images/off.svg')");
    };
    $("#about-fte-calc").slideToggle();
});

$(".info-toggle").click(function() {
    if ($("#more-info").is(":hidden")) {
        $("#info-button").children("span").css("background-image", "url('assets/images/on.svg')");
    } else {
        $("#info-button").children("span").css("background-image", "url('assets/images/off.svg')");
    };

    if ($("#more-info").is(':hidden')) {
        $("#more-info").slideToggle();
        $("html, body").animate({scrollTop: $("#more-info").offset().top});
    } else {
        $("#more-info").slideToggle();
    };
});