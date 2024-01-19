import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 記得導入FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//多國語系
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'zh-TW',
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
      },
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
