import { Component, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'rxjs/operators';
import { timer } from 'rxjs';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

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

  // Swiper
  swiperConfig: SwiperOptions = {
    loop: true,
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    speed: 1000,
    // injectStylesUrls: ['assets/scss/color.scss'],
    // injectStyles: [
    //   `
    //   :host(.swiper) .swiper-wrapper {
    //     background-color: red;
    //   }
    //   `, // 直接提供样式文本
    // ],
    // injectStylesUrls:['./home.component.scss']
  };

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
    //自動輪播
    this.swiper.nativeElement.swiper.autoplay.start()
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
}
