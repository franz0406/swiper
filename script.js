window.addEventListener('DOMContentLoaded', function(){
    const basicSwiper = new Swiper(".basic-swiper", {
        loop:true,
    })
    const basicSwiper2 = new Swiper(".basic-swiper2", {
        loop:true,
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
        },
    })
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        autoplay: {
            delay: 3000,
        },
    });
})