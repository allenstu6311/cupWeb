import { NgModule,CUSTOM_ELEMENTS_SCHEMA, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { NgParticlesModule } from "ng-particles";

//多國語系
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

//頁面
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component';

//組件
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectComponent } from './components/select/select.component';
import { ConcatComponent } from './view/concat/concat.component';

//http
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './app.httpInterceptor';

//ssr
import { provideClientHydration } from '@angular/platform-browser';


//swiper
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './swiper.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
register();

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SelectComponent,
    ConcatComponent,
    SwiperDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'zh-TW',
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
      },
  }),
  NgParticlesModule,
  ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !isDevMode(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    provideClientHydration () 
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
