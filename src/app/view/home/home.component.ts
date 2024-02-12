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
    'assets/image/ig/ig_1.jpg',
    'assets/image/ig/ig_2.jpg',
    'assets/image/ig/ig_3.jpg', 
    'assets/image/ig/ig_4.jpg',
    'assets/image/ig/ig_5.jpg'
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
