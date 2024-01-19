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

  constructor(){
    timer(3000).subscribe(() => {
      this.path.nativeElement.style.fill = '#ff0000';
      timer(1000).subscribe(()=>{
        this.text.nativeElement.style.color = '#fff';

        timer(1000).subscribe(() => {
          this.display = true;
        });
      })
    
     
    });
  }

  ngOnInit() {}

}
