import { Component, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('path', { static: true }) path!: ElementRef;
  @ViewChild('text', { static: true }) text!: ElementRef;
  @ViewChild('openAnimation', { static: true }) openAnimation!: ElementRef;
  display: boolean = false;
  igPic:string[] = [
    'https://desertturtle.art/wp-content/uploads/sb-instagram-feed-images/414501706_1089274919184158_6860997398438781024_nlow.jpg',

    'https://desertturtle.art/wp-content/uploads/sb-instagram-feed-images/412538420_1093944088270542_8936042847412642815_nlow.jpg',
    'https://desertturtle.art/wp-content/uploads/sb-instagram-feed-images/414501706_1089274919184158_6860997398438781024_nlow.jpg', 'https://desertturtle.art/wp-content/uploads/sb-instagram-feed-images/414501706_1089274919184158_6860997398438781024_nlow.jpg',
    'https://desertturtle.art/wp-content/uploads/sb-instagram-feed-images/414501706_1089274919184158_6860997398438781024_nlow.jpg'
  ]

  constructor(){
    timer(2500).subscribe(() => {
      this.path.nativeElement.style.fill = '#fcd752';
      timer(1000).subscribe(() => {
        this.display = true;
      });
    });
  }

  ngOnInit() {}

}
