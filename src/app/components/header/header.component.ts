import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  language:string='zh-TW';

  constructor(
   private translateService:TranslateService
  ){}


    changeLanguage(){
      this.translateService.use(this.language)
    }
}
