$(document).ready(function(){
    $('.owl-one').owlCarousel(
        {
            loop:true, //Зацикливаем слайдер
            margin:70, //Отступ от элемента справа в 65px
            stagePadding: 60,
            nav:true, //Отключение навигации
            navText : ['<img src="img/left-arrow.png">','<img src="img/right-arrow.png">'],
            dots: false,
            autoplay:false, //Автозапуск слайдера
            smartSpeed:1000, //Время движения слайда
            autoplayTimeout:2000, //Время смены слайда
            responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        }
    );
    $('.owl-two').owlCarousel(
        {
            loop:true, //Зацикливаем слайдер
            margin:10, //Отступ от элемента справа в 65px
            stagePadding: 60,
            nav: false, //Отключение навигации
            dots: false,
            autoplay:false, //Автозапуск слайдера
            smartSpeed:1000, //Время движения слайда
            autoplayTimeout:2000, //Время смены слайда
            responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        }
    );
});