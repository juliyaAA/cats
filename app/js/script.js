$(document).ready(function () {
    new isvek.Bvi({
        target: '.bvi-panel-open',
        fontSize: 24,
        theme: 'black'
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    $('.pageup').on('click', function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    $('.header-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.header__list').toggleClass('active');
    });
    $('.header__list li a').on('click', function () {
        $('.header__list').removeClass('active');
        $('.header-menu').removeClass('active')
    })
    // notification
    $('.promo__heard').on('click', function () {
        $(this).toggleClass('active');
        const text = $('<div class="notification-text"><p>Добавлено в избранное</p></div>'),
            txt = $('<div class="notification-text"><p>Удалено из избранных</p></div>'),
            linc = $('.notification');
            $(this, linc).html(txt).fadeIn();
            if($(this, '.promo__heard').hasClass('active')) {
                $(this, linc).html(text).fadeIn();
            }
        setTimeout(function () {
            text.fadeOut();
            txt.fadeOut();  
        }, 1000);
    })
    // sorting
    $('.promo__sorting-price').on('click', function () {
        const $container = $('.promo__cats');

        const sorted = $container
            .children()
            .get()
            .map(n => ({
                item: n,
                value: $('.promo__price', n).text().replace(/\D/g, ''),
            }))
            .sort((a, b) => a.value - b.value)
            .map(n => n.item);

        $container.append(...sorted);
    });
    // validate
    $('.footer form').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
              required: "Введите адрес почты",
              email: "Неправильно введен адрес"
            }
          }
    });
});