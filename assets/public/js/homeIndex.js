
$(document).ready(()=>{


    $('.carouselSuggestedItems').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    autoHeight: false,
    autoHeightClass: 'owl-height',
    stagePadding:50,
    autoHeight:true,
    responsive:{
        0:{items:1},
        600:{items:3},
        1000:{items:7}
    }
    })



    $('.contentByCategory').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    navText:['<span><i class="fa-solid fa-circle-left"></i></span>','<span><i class="fa-solid fa-circle-right"></i></span>'],
    // autoplay:true,
    // autoplayTimeout:1000,
    // autoplayHoverPause:true,
    autoHeight: false,
    // autoHeightClass: 'owl-height',
    stagePadding:30,
    // autoHeight:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
    })

    /****************************************
     *   Product Slider Active - 4 Grid 2 Rows
     *****************************************/
    var productSlider4grid2row = new Swiper('.contentByCategory', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop:true,
        speed: 500,
        slidesPerColumn: 1,
        // slidesPerColumnFill: 'row',

        navigation: {
            nextEl: '.product-slider-default-2rows .swiper-button-next',
            prevEl: '.product-slider-default-2rows .swiper-button-prev',
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });


    $(function() {
    $('marquee').mouseover(function() {
        $(this).attr('scrollamount',0);
    }).mouseout(function() {
         $(this).attr('scrollamount',5);
    });
    });


    

})

document.querySelector('.loginTag button').onclick=function(){
    var loginModal= document.getElementsByClassName('loginModal');
    loginModal[0].classList.add('loginModal_show');
};

document.getElementById('hideLogin').onclick=function(){
    var loginModal= document.getElementsByClassName('loginModal');
    loginModal[0].classList.remove('loginModal_show');
};

