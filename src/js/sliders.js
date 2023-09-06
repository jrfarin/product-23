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