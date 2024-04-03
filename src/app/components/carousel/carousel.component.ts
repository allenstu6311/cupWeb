import { Component, Input, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Swiper } from 'swiper';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input({ required: true }) picList: string[] = [''];
  @Input({ required: true }) swiperConfig: SwiperOptions | any;
  @Input() className: string = '';
  @Input() id: string = '';
  // @ViewChild('swiperInstance', { static: true }) swiperInstance: any;
  // @Input()

  swiperComponent!: Swiper;

  ngAfterViewInit() {
    this.swiperComponent = new Swiper(`#${this.id}`, this.swiperConfig);
  }
}
