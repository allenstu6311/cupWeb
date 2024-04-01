import { faBusinessTime, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  faTrophy = faTrophy;
  faBusinessTime = faBusinessTime;
}
