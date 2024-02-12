import { Component, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('select') select!: ElementRef;
  // language: string = 'zh-TW';
  showSelect: string = 'none';
  optionValue: string = '中文';
  languageList: any[] = [
    {
      name: '中文',
      pic: '../../../assets/image/language/chinese.jpeg',
    },
    {
      name: 'English',
      pic: '../../../assets/image/language/america.jpg',
    },
  ];

  constructor(private translateService: TranslateService) {
    this.hideSelect = this.hideSelect.bind(this);
  }

  handleSelect() {
    if (this.showSelect == 'none') {
      this.showSelect = 'block';
      document.addEventListener('click', this.hideSelect);
    } else {
      this.showSelect = 'none';
      document.removeEventListener('click', this.hideSelect);
    }
  }

  hideSelect(e: any) {
    if (!this.select.nativeElement.contains(e.target)) {
      this.showSelect = 'none';
      document.removeEventListener('click', this.hideSelect);
    }
  }

  changeLanguage(lang: string) {
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
}
