$(function () {
    $('[data-link="anchor"]').on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 35;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});

$(function () {
    let menu = $('[data-menu="mob"]'),
        btnMenu = $('[data-btn="menu"]');
    btnMenu.on('click', function (e) {
        btnMenu.toggleClass('active');
        menu.toggleClass('active');
        $('.header').toggleClass('active');
    });
});