import { Component, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'rxjs/operators';
import { timer } from 'rxjs';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('path', { static: true }) path!: ElementRef;
  @ViewChild('text', { static: true }) text!: ElementRef;
  @ViewChild('openAnimation', { static: true }) openAnimation!: ElementRef;

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;

  swiperComponent!: Swiper;

  index: number = 0;
  display: boolean = false;
  igPic: string[] = [
    'assets/image/ig/ig_1.jpg',
    'assets/image/ig/ig_2.jpg',
    'assets/image/ig/ig_3.jpg',
    'assets/image/ig/ig_4.jpg',
    'assets/image/ig/ig_5.jpg',
  ];
  carousel: string[] = [
    'assets/image/carousel/slide1.jpg',
    'assets/image/carousel/slide2.jpg',
    'assets/image/carousel/slide3.jpg',
  ];

  constructor() {
    // timer(2500).subscribe(() => {
    //   this.path.nativeElement.style.fill = '#fcd752';
    //   timer(1000).subscribe(() => {
    //     this.display = true;
    //   });
    // });
  }

  ngAfterViewInit() {
    this.swiperComponent = new Swiper(
      ".swiper-container",
      this.swiperConfig
    );
    // this.swiperComponent.on('slideChange', (swiper: any) => {
    //   console.log('swiper',swiper.activeIndex)
    //   // this.index = swiper.detail[0].activeIndex;
    // });
  }

  // Swiper
  swiperConfig: SwiperOptions = {
    spaceBetween:30,
    scrollbar:false,
    autoplay: {
      // delay: 2500,
      disableOnInteraction: false, // 點擊換頁也不會停止自動撥放
    },
    loop: true,
    // navigation: {
    //   nextEl: '.next-btn',
    //   prevEl: '.prev-btn',
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    speed: 1000,
  };
}
