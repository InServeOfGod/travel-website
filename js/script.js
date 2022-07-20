"use strict"

// initialize swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        960: {
            spaceBetween: 25,
            slidesPerView: 2,
        },
        1250: {
           spaceBetween: 50,
           slidesPerView: 3,
        }
    }
})

/*const swiper2 = new Swiper('.swiper-testimonials', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    //  pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})*/
