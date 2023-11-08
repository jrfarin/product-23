// SLIDERS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const swiperProduct = new Swiper('.swiperProduct', {
    rewind: true,
    modules: [Pagination],
    pagination: {
        el: ".swiper-pagination",
    }
});

export const swiperZoom = new Swiper(".swiperZoom", {
    lazy: true,
    effect: "fade",
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

export const swiperLastSeen = new Swiper('.swiperLastSeen', {
    slidesPerView: 2.5,
    spaceBetween: 15,
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {       
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }
});