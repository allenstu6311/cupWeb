import { Component, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { languageList } from 'src/assets/model/model';
import { ActivatedRoute, Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('select') select!: ElementRef;
  @ViewChild('mobileSelect') mobileSelect!: ElementRef;
  // language: string = 'zh-TW';
  showSelect: string = 'none';
  optionValue: string = '中文';
  openSiderBar: boolean = false;
  languageList: languageList[] = [
    {
      name: '中文',
      pic: 'assets/image/language/chinese.jpeg',
    },
    {
      name: 'English',
      pic: 'assets/image/language/america.jpg',
    },
  ];
  optionsType: string = '';

  constructor(
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.hideSelect = this.hideSelect.bind(this);
  }


  ngOnInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // 在這裡更新頁面變數
        this.openSiderBar = false
      }
    });
  }

  handleSelect(type: string) {
    this.optionsType = type;
    if (this.showSelect == 'none') {
      this.showSelect = 'block';
      document.addEventListener('click', this.hideSelect);
    } else {
      this.showSelect = 'none';
      document.removeEventListener('click', this.hideSelect);
    }
  }

  hideSelect(e: any) {
    if (this.optionsType == 'mobile') {
      if (!this.mobileSelect.nativeElement.contains(e.target)) {
        this.showSelect = 'none';
        document.removeEventListener('click', this.hideSelect);
      }
    } else {
      if (!this.select.nativeElement.contains(e.target)) {
        this.showSelect = 'none';
        document.removeEventListener('click', this.hideSelect);
      }
    }
  }

  changeLanguage(lang: string) {
    console.log(lang);
    this.showSelect = 'none';
    let language = '';
    switch (lang) {
      case '中文':
        language = 'zh-TW';
        break;
      case 'English':
        language = 'en-US';
        break;
    }
    this.optionValue = lang;
    this.translateService.use(language);
  }


  handleKeydown(event:any) {
    // event.preventDefault(); // 防止默认行为，如页面滚动

    // 检查是否按下了Enter或Space键
    if (event.key === 'Enter') {
      if(this.openSiderBar){
        this.openSiderBar = false;
      }else{
        this.openSiderBar = true;
      }
    }
  }
}
