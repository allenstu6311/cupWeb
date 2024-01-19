import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cupweb';
  language:string='';

  constructor(
   private translateService:TranslateService
  ){}


    changeLanguage(){
      this.translateService.use(this.language)
    }
  
}
