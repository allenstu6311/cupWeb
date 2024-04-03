import { SwiperOptions } from 'swiper/types';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  carousel: string[] = [
    'assets/image/carousel/slide1.jpg',
    'assets/image/carousel/slide2.jpg',
    'assets/image/carousel/slide3.jpg',
  ];

  swiperConfig1: SwiperOptions = {
    scrollbar: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // 點擊換頁也不會停止自動撥放
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    speed: 1500,
  };

  swiperConfig2: SwiperOptions = {
    scrollbar: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false, // 點擊換頁也不會停止自動撥放
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    speed: 1000,
  };
}
