// SLIDERS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const showStrFields = new Swiper('.swpCategory', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    freeMode: true,          
});

export const swiperColorPills =  new Swiper('.swiperColorPills', {
    modules: [Navigation],
    slidesPerView: 5,
    spaceBetween: 5,
    navigation: {
        nextEl: ".swiper-button-next"
    },
    breakpoints:{
        768 :{
            slidesPerView: 6,
        },
        992 :{
            slidesPerView: 7,
            spaceBetween: 8,
        },
        1200 :{
            slidesPerView: 8,
            spaceBetween: 5,
        },
    }         
});

export const swiperLookBook = new Swiper('.swiperLookBook', {
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});