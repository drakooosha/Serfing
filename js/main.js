$(function () {
    $('.slider__content').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000
    });

    $('.menu__btn,.menu a').on('click', function () {
        $('.menu__list,.menu__btn').toggleClass('active');
    });

    $(".menu a,.logo").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    $(window).on('scroll', function () {
        if(pageYOffset > $('.header').height()){
            $('.header__top').addClass('header__top--fixed');
        }
        else {
            $('.header__top').removeClass('header__top--fixed');
        }
    });

    var mixer = mixitup('.gallery__content');
}); 