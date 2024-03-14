/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 34991:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule),
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   renderApplication: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderApplication),
/* harmony export */   renderModule: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 20650);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/express-engine */ 93389);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ 35162);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:fs */ 87561);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node:path */ 49411);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/main.server */ 49174);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-server */ 97014);







// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  const distFolder = (0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(process.cwd(), 'dist/cupweb/browser');
  const indexHtml = (0,node_fs__WEBPACK_IMPORTED_MODULE_3__.existsSync)((0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index.html';
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_2__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.APP_BASE_HREF,
        useValue: req.baseUrl
      }]
    });
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 4000;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 11838:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/home/home.component */ 72132);
/* harmony import */ var _view_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/about/about.component */ 91986);
/* harmony import */ var _view_concat_concat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/concat/concat.component */ 75062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 59936);






const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full' // 確保完全匹配根路徑
}, {
  path: 'home',
  component: _view_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'about',
  component: _view_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'concat',
  component: _view_concat_concat_component__WEBPACK_IMPORTED_MODULE_2__.ConcatComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 96846:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 73149);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 49186);




class AppComponent {
  constructor() {
    this.title = 'cupweb';
    this.id = "tsparticles";
  }
  //   particlesOptions:RecursivePartial<IOptions> = {
  //     background: {
  //         color: {
  //             value: "red",
  //         },
  //     },
  //     fpsLimit: 60,
  //     interactivity: {
  //         events: {
  //             onClick: {
  //                 enable: true,
  //                 mode: ClickMode.push,
  //             },
  //             onHover: {
  //                 enable: true,
  //                 mode: HoverMode.repulse,
  //             },
  //             resize: true,
  //         },
  //         modes: {
  //             push: {
  //                 quantity: 4,
  //             },
  //             repulse: {
  //                 distance: 200,
  //                 duration: 0.4,
  //             },
  //         },
  //     },
  //     particles: {
  //         color: {
  //             value: "#c3c2c229",
  //         },
  //         links: {
  //             color: "#c3c2c229",
  //             distance: 150,
  //             enable: true,
  //             opacity: 0.5,
  //             width: 1,
  //         },
  //         move: {
  //             direction: MoveDirection.none,
  //             enable: true,
  //             outModes: {
  //                 default: OutMode.bounce,
  //             },
  //             random: false,
  //             speed: 1,
  //             straight: false,
  //         },
  //         number: {
  //             density: {
  //                 enable: true,
  //                 area: 800,
  //             },
  //             value: 80,
  //         },
  //         opacity: {
  //             value: 0.5,
  //         },
  //         shape: {
  //             type: "circle",
  //         },
  //         size: {
  //             value: { min: 1, max: 5 },
  //         },
  //     },
  //     detectRetina: true,
  // };
  //   async  particlesInit(main: Main): Promise<void> {
  //     // 此处可以访问完整的粒子库实例 (main)
  //     console.log(main);
  //     await loadSlim(main);
  //     // 你可以添加自定义形状或者插件
  //     // 例如：main.addShape(...) 或者 main.addPreset(...)
  //   }
  //   // 此方法将在粒子加载完成时调用
  //   particlesLoaded(container: any): void {
  //     // 此处可以访问粒子容器实例 (container)
  //     console.log(container);
  //   }
  ngOnInit() {}
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    consts: [["id", "main"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header")(2, "router-outlet")(3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["#main[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vJUU2JUExJThDJUU5JTlEJUEyLyVFNCVCRCU5QyVFNSU5MyU4MS9jdXBXZWIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNSRiIsInNvdXJjZXNDb250ZW50IjpbIi8vICN0c3BhcnRpY2xlcyB7XHJcbi8vICAgd2lkdGg6IDEwMHZ3O1xyXG4vLyAgIGhlaWdodDogMTAwdmg7IC8qIMOowqjCrcOlwq7CmsOnwoLCusOowqbClsOlwo/Co8OpwqvCmMOlwrrCpsOvwrzCjMOmwojClsOmwqDCucOmwpPCmsOpwpzCgMOowqbCgcOowqrCv8OmwpXCtCAqL1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDA7XHJcbi8vICAgbGVmdDogMDtcclxuLy8gICB6LWluZGV4OiAtMTtcclxuLy8gfVxyXG5cclxuI21haW57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiIsIiNtYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 64414:
/*!****************************************!*\
  !*** ./src/app/app.httpInterceptor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoopInterceptor: () => (/* binding */ NoopInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 85028);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);


/** Pass untouched request through to the next request handler. */
class NoopInterceptor {
  intercept(req, next) {
    const token = "token";
    let secureReq = req;
    if (!req.url.includes('assets')) {
      secureReq = req.clone({
        url: 'https://fakestoreapi.com' + req.url,
        setHeaders: {
          Authorization: `Bearer ` + token
        }
      });
    }
    return next.handle(secureReq).pipe(
    // timeout(10000),
    (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.catchError)(response => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => response);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(evt => {
      return evt;
    }));
  }
  static #_ = this.ɵfac = function NoopInterceptor_Factory(t) {
    return new (t || NoopInterceptor)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NoopInterceptor,
    factory: NoopInterceptor.ɵfac
  });
}

/***/ }),

/***/ 50041:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   createTranslateLoader: () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 41081);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8810);
/* harmony import */ var ng_particles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-particles */ 25263);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 15);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ 26449);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 56448);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 11838);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 96846);
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/home/home.component */ 72132);
/* harmony import */ var _view_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/about/about.component */ 91986);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ 73149);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ 49186);
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/select/select.component */ 23121);
/* harmony import */ var _view_concat_concat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/concat/concat.component */ 75062);
/* harmony import */ var _app_httpInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.httpInterceptor */ 64414);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/element/bundle */ 6009);
/* harmony import */ var _swiper_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./swiper.directive */ 35684);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ 5826);




//多國語系



//頁面




//組件




//http


//ssr

//swiper






(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_9__.register)();
function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
      useClass: _app_httpInterceptor__WEBPACK_IMPORTED_MODULE_8__.NoopInterceptor,
      multi: true
    }, (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.provideClientHydration)()],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forRoot({
      defaultLanguage: 'zh-TW',
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient]
      }
    }), ng_particles__WEBPACK_IMPORTED_MODULE_17__.NgParticlesModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.isDevMode)(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _view_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _view_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__.SelectComponent, _view_concat_concat_component__WEBPACK_IMPORTED_MODULE_7__.ConcatComponent, _swiper_directive__WEBPACK_IMPORTED_MODULE_10__.SwiperDirective],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, ng_particles__WEBPACK_IMPORTED_MODULE_17__.NgParticlesModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 88432:
/*!**************************************!*\
  !*** ./src/app/app.server.config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-server */ 97014);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 50041);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 96846);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 41081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);





class AppServerModule {
  static #_ = this.ɵfac = function AppServerModule_Factory(t) {
    return new (t || AppServerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppServerModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.provideClientHydration)()],
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_4__.ServerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_4__.ServerModule]
  });
})();

/***/ }),

/***/ 49186:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 3,
    vars: 0,
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright \u00A9 2023 winnie Desert Turtle \u7248\u6B0A\u6240\u6709");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.25em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vJUU2JUExJThDJUU5JTlEJUEyLyVFNCVCRCU5QyVFNSU5MyU4MS9jdXBXZWIvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEuMjVlbTtcclxufSIsImZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4yNWVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 73149:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 15);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8810);






const _c0 = ["select"];
const _c1 = ["mobileSelect"];
function HeaderComponent_li_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_32_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.changeLanguage(item_r8.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r8.pic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
  }
}
function HeaderComponent_li_39_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_39_li_6_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const item_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.changeLanguage(item_r13.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r13.pic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.name, " ");
  }
}
function HeaderComponent_li_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "div", 10, 24)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_39_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.handleSelect("mobile"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_li_39_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.optionValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_39_li_6_Template, 5, 2, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.optionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r2.showSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.languageList);
  }
}
function HeaderComponent_li_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "header.about"));
  }
}
function HeaderComponent_li_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "header.portfolio"));
  }
}
function HeaderComponent_li_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "header.course"));
  }
}
function HeaderComponent_li_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "header.contact"));
  }
}
function HeaderComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_44_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.openSiderBar = false);
    })("keydown", function HeaderComponent_div_44_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.handleKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 26)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class HeaderComponent {
  constructor(translateService, route, router) {
    this.translateService = translateService;
    this.route = route;
    this.router = router;
    // language: string = 'zh-TW';
    this.showSelect = 'none';
    this.optionValue = '中文';
    this.openSiderBar = false;
    this.languageList = [{
      name: '中文',
      pic: 'assets/image/language/chinese.jpeg'
    }, {
      name: 'English',
      pic: 'assets/image/language/america.jpg'
    }];
    this.optionsType = '';
    this.hideSelect = this.hideSelect.bind(this);
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        // 在這裡更新頁面變數
        this.openSiderBar = false;
      }
    });
  }
  handleSelect(type) {
    this.optionsType = type;
    if (this.showSelect == 'none') {
      this.showSelect = 'block';
      document.addEventListener('click', this.hideSelect);
    } else {
      this.showSelect = 'none';
      document.removeEventListener('click', this.hideSelect);
    }
  }
  hideSelect(e) {
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
  changeLanguage(lang) {
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
  handleKeydown(event) {
    // event.preventDefault(); // 防止默认行为，如页面滚动
    // 检查是否按下了Enter或Space键
    if (event.key === 'Enter') {
      if (this.openSiderBar) {
        this.openSiderBar = false;
      } else {
        this.openSiderBar = true;
      }
    }
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    viewQuery: function HeaderComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mobileSelect = _t.first);
      }
    },
    decls: 46,
    vars: 25,
    consts: [[1, "main-color"], ["tabindex", "0", 1, "logo"], [1, "logo-pic"], ["routerLink", "home", "src", "assets/image/winnie.png", "alt", "\u5546\u6A19"], ["tabindex", "0", "aria-label", "\u9078\u55AE\u547C\u53EB", 1, "control", 3, "click", "keydown"], [1, "control-line"], [1, "lg"], ["routerLink", "about"], ["href", ""], ["routerLink", "concat"], [1, "select-box"], ["select", ""], [1, "", 3, "click"], ["type", "text", "readonly", "", "aria-label", "\u8A9E\u7CFB\u9078\u64C7", 3, "ngModel", "ngModelChange"], [1, "language-list"], [3, "click", 4, "ngFor", "ngForOf"], ["id", "mainmenu", 1, "md"], [1, "logo"], [4, "ngIf"], ["class", "close", "tabindex", "0", "aria-label", "\u95DC\u9589\u9078\u55AE", 3, "click", "keydown", 4, "ngIf"], [1, "shadow", 3, "hidden", "click"], [3, "click"], [1, "pic"], ["alt", "\u8A9E\u7CFB\u5716\u7247", 3, "src"], ["mobileSelect", ""], ["tabindex", "0", "aria-label", "\u95DC\u9589\u9078\u55AE", 1, "close", 3, "click", "keydown"], [1, "close-line"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_5_listener() {
          return ctx.openSiderBar = true;
        })("keydown", function HeaderComponent_Template_div_keydown_5_listener($event) {
          return ctx.handleKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5)(7, "div", 5)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6)(10, "li")(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li")(27, "div", 10, 11)(29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_29_listener() {
          return ctx.handleSelect("computer");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_30_listener($event) {
          return ctx.optionValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HeaderComponent_li_32_Template, 5, 2, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "div", 17)(37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HeaderComponent_li_39_Template, 7, 4, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HeaderComponent_li_40_Template, 4, 3, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HeaderComponent_li_41_Template, 4, 3, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HeaderComponent_li_42_Template, 4, 3, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, HeaderComponent_li_43_Template, 4, 3, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HeaderComponent_div_44_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_45_listener() {
          return ctx.openSiderBar = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 17, "header.about"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 19, "header.portfolio"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, "header.course"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 23, "header.contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.optionValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languageList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.openSiderBar ? 200 + "px" : 0 + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openSiderBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openSiderBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openSiderBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openSiderBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openSiderBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openSiderBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.openSiderBar);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > .logo[_ngcontent-%COMP%]    > .logo-pic[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.has-error[_ngcontent-%COMP%] {\n  color: red;\n  padding-top: 5px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fcd752;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 991px) {\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0 20px;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .control-line[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 3px;\n    background-color: #fff;\n    margin-bottom: 5px;\n  }\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .language-label[_ngcontent-%COMP%] {\n  width: 0em;\n  height: 0em;\n  overflow: hidden;\n  display: block;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > .logo[_ngcontent-%COMP%]    > .logo-pic[_ngcontent-%COMP%] {\n  width: 12.5em;\n  padding: 0.3125em;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > .logo[_ngcontent-%COMP%]    > .logo-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  object-fit: cover;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%] {\n  width: 170px;\n  position: relative;\n  font-size: 1em;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  padding: 10px 0;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  -webkit-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .language-list[_ngcontent-%COMP%] {\n  width: 160px;\n  background-color: #fff;\n  padding: 0 5px;\n  position: absolute;\n  top: 35px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .language-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  padding-left: 40px;\n  cursor: pointer;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .language-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .language-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #6184c6;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .language-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.9375em;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #6184c6;\n}\n@media screen and (max-width: 991px) {\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul.lg[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul.md[_ngcontent-%COMP%] {\n  display: none;\n  width: 0px;\n}\n@media screen and (max-width: 991px) {\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul.md[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background-color: #fcd752;\n    z-index: 100;\n    overflow: hidden;\n    transition: 0.3s ease-out;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul.md[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul.md[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > .logo[_ngcontent-%COMP%]    > .logo-pic[_ngcontent-%COMP%] {\n    width: 10.5em;\n    padding: 0.3125em;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul.md[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 40px;\n    top: 20px;\n    cursor: pointer;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul.md[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   .close-line[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 4px;\n    background-color: #fff;\n    position: absolute;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul.md[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   .close-line[_ngcontent-%COMP%]:first-child {\n    transform: rotate(45deg);\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul.md[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   .close-line[_ngcontent-%COMP%]:last-child {\n    transform: rotate(-45deg);\n  }\n}\n\n.shadow[_ngcontent-%COMP%] {\n  position: fixed;\n  margin: auto;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  z-index: 90;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb21tb24uc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLyVFNiVBMSU4QyVFOSU5RCVBMi8lRTQlQkQlOUMlRTUlOTMlODEvY3VwV2ViL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2ZGOztBRDRCQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ3pCRjs7QUNQQTtFQUNFLGtCQUFBO0FEVUY7O0FDUEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ1ZPO0FGb0JUO0FDUkU7RUFDRSxhQUFBO0FEVUo7QURaRTtFRUNBO0lBSUksY0FBQTtJQUNBLGVBQUE7RURXSjtFQ1ZJO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0VEWU47QUFDRjtBQ1BFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURTSjtBQ0xJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FET047QUNKTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QURNUjtBQ0RFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QURHSjtBQ0FJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBREVOO0FDRE07RUFDRSxlQUFBO0FER1I7QUNETTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esb0JBQUE7QURHUjtBQ0FNO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBREVSO0FDQVE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FERVY7QUNEVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FER1o7QUNBVTtFQUNFLGNDN0ZIO0FGK0ZUO0FDQVU7RUFDRSxZQUFBO0FERVo7QUNJSTtFQUNFLGlCQUFBO0FERk47QUNJTTtFQUNFLGNBQUE7RUFDQSxjQzNHQztBRnlHVDtBRC9GRTtFRXFHRTtJQUVJLGFBQUE7RURKTjtBQUNGO0FDT0k7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBRExOO0FEeEdFO0VFMkdFO0lBS0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUVBLGVBQUE7SUFDQSxPQUFBO0lBQ0EsTUFBQTtJQUdBLFlBQUE7SUFDQSx5QkN0SUM7SUR1SUQsWUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RURQTjtFQ1NNO0lBQ0UsbUJBQUE7RURQUjtFQ1NVO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0VEUFo7RUNXTTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0VEVFI7RUNZUTtJQUNFLFdBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFRFZWO0VDWVU7SUFDRSx3QkFBQTtFRFZaO0VDYVU7SUFDRSx5QkFBQTtFRFhaO0FBQ0Y7O0FDb0JBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURqQkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9jb2xvci5zY3NzXCI7XHJcblxyXG4vL8OmwonCi8OmwqnCn1xyXG5AbWl4aW4gbW9iaWxlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vL8OlwrnCs8Omwp3Cv1xyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4lZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4lYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oYXMtZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuXHJcbiIsImhlYWRlciBuYXYgPiAubG9nbyA+IC5sb2dvLXBpYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGFzLWVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5oZWFkZXIgbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkNzUyO1xufVxuaGVhZGVyIG5hdiAuY29udHJvbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICBoZWFkZXIgbmF2IC5jb250cm9sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbiAgaGVhZGVyIG5hdiAuY29udHJvbCAuY29udHJvbC1saW5lIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuaGVhZGVyIG5hdiAubGFuZ3VhZ2UtbGFiZWwge1xuICB3aWR0aDogMGVtO1xuICBoZWlnaHQ6IDBlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5oZWFkZXIgbmF2ID4gLmxvZ28gPiAubG9nby1waWMge1xuICB3aWR0aDogMTIuNWVtO1xuICBwYWRkaW5nOiAwLjMxMjVlbTtcbn1cbmhlYWRlciBuYXYgPiAubG9nbyA+IC5sb2dvLXBpYyBpbWcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5oZWFkZXIgbmF2ID4gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbmhlYWRlciBuYXYgPiB1bCAuc2VsZWN0LWJveCB7XG4gIHdpZHRoOiAxNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDFlbTtcbn1cbmhlYWRlciBuYXYgPiB1bCAuc2VsZWN0LWJveCBkaXYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgbmF2ID4gdWwgLnNlbGVjdC1ib3ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5oZWFkZXIgbmF2ID4gdWwgLnNlbGVjdC1ib3ggLmxhbmd1YWdlLWxpc3Qge1xuICB3aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzVweDtcbn1cbmhlYWRlciBuYXYgPiB1bCAuc2VsZWN0LWJveCAubGFuZ3VhZ2UtbGlzdCBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG59XG5oZWFkZXIgbmF2ID4gdWwgLnNlbGVjdC1ib3ggLmxhbmd1YWdlLWxpc3QgbGkgLnBpYyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5oZWFkZXIgbmF2ID4gdWwgLnNlbGVjdC1ib3ggLmxhbmd1YWdlLWxpc3QgbGk6aG92ZXIge1xuICBjb2xvcjogIzYxODRjNjtcbn1cbmhlYWRlciBuYXYgPiB1bCAuc2VsZWN0LWJveCAubGFuZ3VhZ2UtbGlzdCBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuaGVhZGVyIG5hdiA+IHVsIGxpIHtcbiAgcGFkZGluZzogMC45Mzc1ZW07XG59XG5oZWFkZXIgbmF2ID4gdWwgbGkgPiBhIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNjE4NGM2O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgaGVhZGVyIG5hdiA+IHVsLmxnIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5oZWFkZXIgbmF2ID4gdWwubWQge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgaGVhZGVyIG5hdiA+IHVsLm1kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkNzUyO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG4gIH1cbiAgaGVhZGVyIG5hdiA+IHVsLm1kIGxpIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIGhlYWRlciBuYXYgPiB1bC5tZCBsaSA+IC5sb2dvID4gLmxvZ28tcGljIHtcbiAgICB3aWR0aDogMTAuNWVtO1xuICAgIHBhZGRpbmc6IDAuMzEyNWVtO1xuICB9XG4gIGhlYWRlciBuYXYgPiB1bC5tZCAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNDBweDtcbiAgICB0b3A6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGhlYWRlciBuYXYgPiB1bC5tZCAuY2xvc2UgLmNsb3NlLWxpbmUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIGhlYWRlciBuYXYgPiB1bC5tZCAuY2xvc2UgLmNsb3NlLWxpbmU6Zmlyc3QtY2hpbGQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICBoZWFkZXIgbmF2ID4gdWwubWQgLmNsb3NlIC5jbG9zZS1saW5lOmxhc3QtY2hpbGQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbn1cblxuLnNoYWRvdyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogOTA7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbW1vbi5zY3NzXCI7XHJcblxyXG5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaGVhZGVyIG5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG5cclxuICAuY29udHJvbHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAuY29udHJvbC1saW5le1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmxhbmd1YWdlLWxhYmVsIHtcclxuICAgIHdpZHRoOiAwZW07XHJcbiAgICBoZWlnaHQ6IDBlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICYgPiAubG9nbyB7XHJcbiAgICAmID4gLmxvZ28tcGljIHtcclxuICAgICAgd2lkdGg6IDEyLjVlbTsgLy8gMjAwcHggLyAxNnB4ID0gMTIuNWVtXHJcbiAgICAgIHBhZGRpbmc6IDAuMzEyNWVtOyAvLyA1cHggLyAxNnB4ID0gMC4zMTI1ZW1cclxuICAgICAgQGV4dGVuZCAlZmxleDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTsgLy8gODAlIHJlbWFpbnMgdW5jaGFuZ2VkXHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7IC8vIDgwJSByZW1haW5zIHVuY2hhbmdlZFxyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAvLyDDpcKkwprDqMKqwp7Dp8KzwrvDqcKBwrjDpcKWwq5cclxuICAgIC5zZWxlY3QtYm94IHtcclxuICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sYW5ndWFnZS1saXN0IHtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzNXB4O1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgLnBpYyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3IyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgcGFkZGluZzogMC45Mzc1ZW07IC8vIDE1cHggLyAxNnB4ID0gMC45Mzc1ZW1cclxuXHJcbiAgICAgICYgPiBhIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTsgLy8gMTZweCAvIDE2cHggPSAxZW1cclxuICAgICAgICBjb2xvcjogJGNvbG9yMjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubGcge1xyXG4gICAgICBAaW5jbHVkZSB0YWJsZXQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLm1kIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgd2lkdGg6IDBweDtcclxuXHJcbiAgICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgLy8gd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIC8vIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0O1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgJiA+IC5sb2dvIHtcclxuICAgICAgICAgICAgJiA+IC5sb2dvLXBpYyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwLjVlbTsgLy8gMjAwcHggLyAxNnB4ID0gMTIuNWVtXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMC4zMTI1ZW07IC8vIDVweCAvIDE2cHggPSAwLjMxMjVlbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbG9zZXtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHJcbiAgICAgICAgICAuY2xvc2UtbGluZXtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNoYWRvd3tcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAuNSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDkwO1xyXG4gIC8vIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIiwiJGNvbG9yMTogI2ZjZDc1MjtcclxuJGNvbG9yMjogIzYxODRjNjtcclxuJGNvbG9yMzojN0E3QTdBO1xyXG4kY29sb3I0OiNjM2MyYzIyOVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 23121:
/*!*******************************************************!*\
  !*** ./src/app/components/select/select.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectComponent: () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8810);


class SelectComponent {
  static #_ = this.ɵfac = function SelectComponent_Factory(t) {
    return new (t || SelectComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SelectComponent,
    selectors: [["app-select"]],
    decls: 12,
    vars: 0,
    consts: [[1, "box"]],
    template: function SelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "select")(2, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]],
    styles: [".box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: #0563af;\n  color: white;\n  padding: 12px;\n  width: 250px;\n  border: none;\n  font-size: 20px;\n  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);\n  outline: none;\n}\n\n.box[_ngcontent-%COMP%]::before {\n  font-family: FontAwesome;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 20%;\n  height: 100%;\n  text-align: center;\n  font-size: 28px;\n  line-height: 45px;\n  color: rgba(255, 255, 255, 0.5);\n  background-color: rgba(255, 255, 255, 0.1);\n  pointer-events: none;\n}\n\n.box[_ngcontent-%COMP%]:hover::before {\n  color: rgba(255, 255, 255, 0.6);\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vJUU2JUExJThDJUU5JTlEJUEyLyVFNCVCRCU5QyVFNSU5MyU4MS9jdXBXZWIvc3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUdBLGFBQUE7QUNESjs7QURJQTtFQUVJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7QUNGSjs7QURLQTtFQUNJLCtCQUFBO0VBQ0EsMENBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSiIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJveCBzZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1NjNhZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcblxyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJveDo6YmVmb3JlIHtcclxuXHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmJveDpob3Zlcjo6YmVmb3JlIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbi5ib3ggc2VsZWN0IG9wdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59IiwiLmJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5ib3ggc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NjNhZjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJveDo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYm94OmhvdmVyOjpiZWZvcmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5ib3ggc2VsZWN0IG9wdGlvbiB7XG4gIHBhZGRpbmc6IDMwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 35684:
/*!*************************************!*\
  !*** ./src/app/swiper.directive.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwiperDirective: () => (/* binding */ SwiperDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class SwiperDirective {
  constructor(el) {
    this.el = el;
  }
  ngAfterViewInit() {
    Object.assign(this.el.nativeElement, this.config);
    this.el.nativeElement.initialize();
  }
  static #_ = this.ɵfac = function SwiperDirective_Factory(t) {
    return new (t || SwiperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: SwiperDirective,
    selectors: [["", "appSwiper", ""]],
    inputs: {
      config: "config"
    }
  });
}

/***/ }),

/***/ 91986:
/*!***********************************************!*\
  !*** ./src/app/view/about/about.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class AboutComponent {
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 8,
    vars: 0,
    consts: [["id", "about"], [1, "introduce"], [1, "pic"], [1, "text"], [1, "title"], [1, "name"], [1, "content"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "main")(2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 75062:
/*!*************************************************!*\
  !*** ./src/app/view/concat/concat.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConcatComponent: () => (/* binding */ ConcatComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8810);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emailjs/browser */ 90633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 56448);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 34228);






const _c0 = ["lightBox"];
const _c1 = ["lightboxDesc"];
function ConcatComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u5FC5\u586B\u6B04\u4F4D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ConcatComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u5FC5\u586B\u6B04\u4F4D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ConcatComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ConcatComponent_div_41_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28, 29)(2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u9001\u51FA\u6210\u529F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ConcatComponent_div_41_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28, 29)(2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u26D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u9001\u51FA\u5931\u6557 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ConcatComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19, 20)(2, "div", 21)(3, "div", 22)(4, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u63D0\u793A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConcatComponent_div_41_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.showBox = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ConcatComponent_div_41_p_9_Template, 5, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ConcatComponent_div_41_p_10_Template, 5, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 26)(12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConcatComponent_div_41_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.showBox = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u95DC\u9589");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.sendStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.sendStatus);
  }
}
class ConcatComponent {
  constructor(fb, cdr, http) {
    this.fb = fb;
    this.cdr = cdr;
    this.http = http;
    this.sendStatus = false;
    this.showBox = false;
    this.http.get("/products/1").subscribe(res => {
      console.log(res);
    });
  }
  ngOnInit() {
    // this.mailForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   lineId: [''],
    //   message: [''],
    // });
    this.mailForm = this.fb.group({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        updateOn: 'blur'
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
      }),
      lineId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
    });
  }
  sendEmail() {
    if (this.mailForm.invalid) {} else {
      const templateParams = {
        name: this.mailForm.value.name,
        email: this.mailForm.value.email,
        lineId: this.mailForm.value.lineId,
        message: this.mailForm.value.message
      };
      // this.showBox = true;
      // setTimeout(() => {
      //   this.lightBox.nativeElement.focus();
      // }, 1000);
      _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__["default"].send('service_9y4pk49', 'template_rn4wtkf', templateParams, {
        publicKey: 'c_mRBMNUzJXD7c1m4'
      }).then(() => {
        console.log('SUCCESS!');
        this.sendStatus = true;
        this.showBox = true;
        setTimeout(() => {
          // Wait for the next cycle so the DOM is updated
          this.lightBox.nativeElement.focus();
        }, 1000);
      }, error => {
        this.sendStatus = false;
        this.showBox = true;
        // this.lightBox.nativeElement.focus()
        setTimeout(() => {
          // Wait for the next cycle so the DOM is updated
          this.lightBox.nativeElement.focus();
        }, 1000);
        console.log('FAILED...', error.text);
      });
    }
  }
  static #_ = this.ɵfac = function ConcatComponent_Factory(t) {
    return new (t || ConcatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ConcatComponent,
    selectors: [["app-concat"]],
    viewQuery: function ConcatComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.lightBox = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.lightboxDesc = _t.first);
      }
    },
    decls: 42,
    vars: 5,
    consts: [["id", "concat"], [1, "title"], [1, "input-area"], [3, "formGroup"], ["for", "name"], ["type", "text", "formControlName", "name", "id", "name", "aria-required", "true", "aria-label", "\u59D3\u540D"], ["class", "has-error", "aria-live", "polite", 4, "ngIf"], ["for", "email"], ["type", "text", "formControlName", "email", "id", "email", "aria-required", "true", "aria-label", "EMAIL"], ["for", "lineId"], ["type", "text", "formControlName", "lineId", "id", "lineId", "aria-label", "lineId"], ["for", "message"], ["id", "message", "cols", "20", "rows", "5", "formControlName", "message", "aria-label", "\u8A0A\u606F"], ["type", "button", 3, "click"], [1, "text-box"], [1, "text"], [1, "contat"], ["class", "light-box", "role", "dialog", "aria-labelledby", "lightboxTitle", "aria-describedby", "lightboxDesc", "tabindex", "-1", "aria-modal", "true", 4, "ngIf"], ["aria-live", "polite", 1, "has-error"], ["role", "dialog", "aria-labelledby", "lightboxTitle", "aria-describedby", "lightboxDesc", "tabindex", "-1", "aria-modal", "true", 1, "light-box"], ["lightBox", ""], [1, "content-box"], [1, "text-title"], ["id", "lightboxTitle"], ["aria-hidden", "true", 1, "close", 3, "click"], ["id", "lightboxDesc", 4, "ngIf"], [1, "btn"], [3, "click"], ["id", "lightboxDesc"], ["lightboxDesc", ""], ["aria-hidden", "true"]],
    template: function ConcatComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "section")(2, "div", 1)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u806F\u7D61\u6211");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2)(6, "form", 3)(7, "div")(8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u59D3\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ConcatComponent_p_11_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div")(13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ConcatComponent_p_16_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ConcatComponent_p_17_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div")(19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "LINE ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u8A0A\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div")(27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConcatComponent_Template_button_click_27_listener() {
          return ctx.sendEmail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u9001\u51FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14)(30, "div", 15)(31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " \u9019\u662F\u60A8\u6587\u7AE0\u958B\u59CB\u7684\u5730\u65B9\u3002\u60A8\u53EF\u4EE5\u9EDE\u9078\u6B64\u8655\u4E26\u958B\u59CB\u8F38\u5165\u3002 \u6B63\u7B56 \u8853\u4E00 \u8AAA\u70BA\u7684\u5730 \u5317\u901F\u7ACB\u4E00 \u4E00\u597D\u9577\u662F \u5B78\u518D\u6BCD\u60F3\u5011\u8853 \u80B2\u4E2D\u4F46\u90E8\u4E2D \u9762\u6797 \u505C\u7684\u5730\u60F3\u7D93 \u6545\u5169\u751A\u4E4E\u7684\u6587 \u4F7F\u8A72\u4FDD \u767D\u5206\u53EF \u54E1\u5FC3 \u6216\u98A8\u9019 \u59D4\u6771\u4F55 \u8B70\u8D70 \u90E8\u4F5C\u53CA \u5668\u570B \u8D8A\u7ACB\u7236 \u751F\u6771\u4ED6 \u7136\u5F80\u5730 \u679C\u8CE3\u4E00 \u5927\u4EC0\u89C0\u5C31\uFF1B\u6536\u9EBC\u5F9E \u6211\u61C9\u6211\u6642 \u5BEB\u5B50\u6625 \u89E3\u884C\u91AB\u6211 \u4EBA\u5B50\u8457\u591A \u53D7\u9069 \u5370\u5728\u4ECA \u4E3B\u89BA\u65CF \u51FA\u5FC3\u4E09\u58D3 \u8981\u90FD\u60C5\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16)(34, "ul")(35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\uD83D\uDCDE+886-44066-3000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u2709\uFE0Fdemo@webnode.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\uD83D\uDC6Dfacebook\u5C08\u9801");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ConcatComponent_div_41_Template, 14, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.mailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mailForm.get("name").errors == null ? null : ctx.mailForm.get("name").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.mailForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mailForm.get("email").errors == null ? null : ctx.mailForm.get("email").errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBox);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["#concat[_ngcontent-%COMP%]   .light-box[_ngcontent-%COMP%], #concat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#concat[_ngcontent-%COMP%]   .light-box[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #fcd752;\n  color: #fff;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 1.2em;\n  cursor: pointer;\n}\n\n.has-error[_ngcontent-%COMP%] {\n  color: red;\n  padding-top: 5px;\n}\n\n#concat[_ngcontent-%COMP%] {\n  height: 80vh;\n}\n@media screen and (max-width: 991px) {\n  #concat[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    height: 100%;\n  }\n}\n#concat[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1.875em;\n  position: relative;\n}\n#concat[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: 500;\n  color: #7A7A7A;\n  margin-left: 15px;\n}\n#concat[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0.3em;\n  height: 0.95em;\n  background-color: #fcd752;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n#concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (max-width: 991px) {\n  #concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n#concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 45%;\n}\n@media screen and (max-width: 991px) {\n  #concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 0.625em;\n}\n#concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #7A7A7A;\n  display: block;\n  margin-bottom: 0.3125em;\n}\n#concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #7A7A7A;\n  border-radius: 0.3125em;\n  height: 2.5em;\n}\n#concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0.3125em;\n}\n#concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  width: 45%;\n  color: #7A7A7A;\n}\n@media screen and (max-width: 991px) {\n  #concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  line-height: 1.2;\n  letter-spacing: 0.0625em;\n  font-size: 1.25em;\n  margin-bottom: 1.25em;\n}\n#concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 150%;\n}\n#concat[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .contat[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-bottom: 0.625em;\n}\n#concat[_ngcontent-%COMP%]   .light-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  margin: auto;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n#concat[_ngcontent-%COMP%]   .light-box[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%] {\n  width: 18.75em;\n  background-color: #fff;\n  border-radius: 0.3125em;\n}\n#concat[_ngcontent-%COMP%]   .light-box[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .text-title[_ngcontent-%COMP%] {\n  padding: 1.25em 0.9375em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #6184c6;\n}\n#concat[_ngcontent-%COMP%]   .light-box[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .text-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n}\n#concat[_ngcontent-%COMP%]   .light-box[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .text-title[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n#concat[_ngcontent-%COMP%]   .light-box[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 1.125em;\n  text-align: center;\n  line-height: 7.5em;\n  margin-bottom: 0.625em;\n  height: 6.25em;\n}\n#concat[_ngcontent-%COMP%]   .light-box[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 1.25em 0.625em;\n  text-align: center;\n}\n#concat[_ngcontent-%COMP%]   .light-box[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #6184c6;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb21tb24uc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLyVFNiVBMSU4QyVFOSU5RCVBMi8lRTQlQkQlOUMlRTUlOTMlODEvY3VwV2ViL3NyYy9hcHAvdmlldy9jb25jYXQvY29uY2F0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2NvbG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXcvY29uY2F0L2NvbmNhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHlCRXZCTztFRndCUCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNmRjs7QURrQkE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNmRjs7QUVsQkE7RUFDRSxZQUFBO0FGcUJGO0FEWkU7RUdWRjtJQUtJLGlCQUFBO0lBQ0EsWUFBQTtFRnFCRjtBQUNGO0FFbEJFO0VBRUUsc0JBQUE7RUFDQSxrQkFBQTtBRm1CSjtBRWxCSTtFQUVFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNEakJFO0VDa0JGLGlCQUFBO0FGbUJOO0FFakJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJEMUJDO0VDMkJELGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUZtQlI7QUVmRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBRmlCSjtBRHpDRTtFR3NCQTtJQUlJLGVBQUE7RUZtQko7QUFDRjtBRWpCSTtFQUNFLFVBQUE7QUZtQk47QURqREU7RUc2QkU7SUFJSSxXQUFBO0VGb0JOO0FBQ0Y7QUVsQk07RUFDRSxzQkFBQTtBRm9CUjtBRWxCUTtFQUNFLGlCQUFBO0VBQ0EsY0RsREY7RUNtREUsY0FBQTtFQUNBLHVCQUFBO0FGb0JWO0FFakJRO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FGbUJWO0FFaEJRO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FGa0JWO0FFVkk7RUFDRSxVQUFBO0VBS0EsY0Q5RUU7QURzRlI7QUQ3RUU7RUcrREU7SUFJSSxXQUFBO0VGY047QUFDRjtBRVpNO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUZjUjtBRWJRO0VBQ0UsaUJBQUE7QUZlVjtBRVZVO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBRllaO0FFTEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0FGT0o7QUVKSTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FGTU47QUVMTTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkR6SEM7QURnSVQ7QUVMUTtFQUNFLFdBQUE7QUZPVjtBRUpRO0VBQ0UsZUFBQTtBRk1WO0FFSE07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUZLUjtBRUhNO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBRktSO0FFSlE7RUFFRSx5QkQvSUQ7QURvSlQiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9jb2xvci5zY3NzXCI7XHJcblxyXG4vL8OmwonCi8OmwqnCn1xyXG5AbWl4aW4gbW9iaWxlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vL8OlwrnCs8Omwp3Cv1xyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4lZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4lYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oYXMtZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuXHJcbiIsIiNjb25jYXQgLmxpZ2h0LWJveCwgI2NvbmNhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jY29uY2F0IC5saWdodC1ib3ggLmNvbnRlbnQtYm94IC5idG4gYnV0dG9uLCAjY29uY2F0IC5pbnB1dC1hcmVhIGZvcm0gZGl2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Q3NTI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhhcy1lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbiNjb25jYXQge1xuICBoZWlnaHQ6IDgwdmg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjY29uY2F0IHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiNjb25jYXQgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMS44NzVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2NvbmNhdCAudGl0bGUgaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM3QTdBN0E7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuI2NvbmNhdCAudGl0bGUgaDE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwLjNlbTtcbiAgaGVpZ2h0OiAwLjk1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Q3NTI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xufVxuI2NvbmNhdCAuaW5wdXQtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNjb25jYXQgLmlucHV0LWFyZWEge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuI2NvbmNhdCAuaW5wdXQtYXJlYSBmb3JtIHtcbiAgd2lkdGg6IDQ1JTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNjb25jYXQgLmlucHV0LWFyZWEgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiNjb25jYXQgLmlucHV0LWFyZWEgZm9ybSBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAwLjYyNWVtO1xufVxuI2NvbmNhdCAuaW5wdXQtYXJlYSBmb3JtIGRpdiBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzdBN0E3QTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuMzEyNWVtO1xufVxuI2NvbmNhdCAuaW5wdXQtYXJlYSBmb3JtIGRpdiBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN0E3QTdBO1xuICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbn1cbiNjb25jYXQgLmlucHV0LWFyZWEgZm9ybSBkaXYgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1ZW07XG59XG4jY29uY2F0IC5pbnB1dC1hcmVhIC50ZXh0LWJveCB7XG4gIHdpZHRoOiA0NSU7XG4gIGNvbG9yOiAjN0E3QTdBO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgI2NvbmNhdCAuaW5wdXQtYXJlYSAudGV4dC1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4jY29uY2F0IC5pbnB1dC1hcmVhIC50ZXh0LWJveCAudGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2MjVlbTtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcbn1cbiNjb25jYXQgLmlucHV0LWFyZWEgLnRleHQtYm94IC50ZXh0IHAge1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cbiNjb25jYXQgLmlucHV0LWFyZWEgLnRleHQtYm94IC5jb250YXQgdWwgbGkge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjYyNWVtO1xufVxuI2NvbmNhdCAubGlnaHQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW46IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuI2NvbmNhdCAubGlnaHQtYm94IC5jb250ZW50LWJveCB7XG4gIHdpZHRoOiAxOC43NWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTtcbn1cbiNjb25jYXQgLmxpZ2h0LWJveCAuY29udGVudC1ib3ggLnRleHQtdGl0bGUge1xuICBwYWRkaW5nOiAxLjI1ZW0gMC45Mzc1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxODRjNjtcbn1cbiNjb25jYXQgLmxpZ2h0LWJveCAuY29udGVudC1ib3ggLnRleHQtdGl0bGUgaDQge1xuICBjb2xvcjogI2ZmZjtcbn1cbiNjb25jYXQgLmxpZ2h0LWJveCAuY29udGVudC1ib3ggLnRleHQtdGl0bGUgLmNsb3NlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NvbmNhdCAubGlnaHQtYm94IC5jb250ZW50LWJveCAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNy41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNjI1ZW07XG4gIGhlaWdodDogNi4yNWVtO1xufVxuI2NvbmNhdCAubGlnaHQtYm94IC5jb250ZW50LWJveCAuYnRuIHtcbiAgcGFkZGluZzogMS4yNWVtIDAuNjI1ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNjb25jYXQgLmxpZ2h0LWJveCAuY29udGVudC1ib3ggLmJ0biBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE4NGM2O1xufSIsIiRjb2xvcjE6ICNmY2Q3NTI7XHJcbiRjb2xvcjI6ICM2MTg0YzY7XHJcbiRjb2xvcjM6IzdBN0E3QTtcclxuJGNvbG9yNDojYzNjMmMyMjlcclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb21tb24uc2Nzc1wiO1xyXG4jY29uY2F0IHtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgQGV4dGVuZCAlZmxleDtcclxuXHJcbiAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA2LjEyNWVtOyAvLyA1MHB4XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaDEge1xyXG4gICAgICAvLyBmb250LXNpemU6IDQuMzc1ZW07IC8vIDcwcHhcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiAkY29sb3IzO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMC4zZW07XHJcbiAgICAgICAgaGVpZ2h0OiAwLjk1ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmlucHV0LWFyZWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVlbTsgLy8gMTBweFxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3IzO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjMxMjVlbTsgLy8gNXB4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvcjM7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTsgLy8gNXB4XHJcbiAgICAgICAgICBoZWlnaHQ6IDIuNWVtOyAvLyA0MHB4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNWVtOyAvLyA1cHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBAZXh0ZW5kICVidXR0b247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dC1ib3gge1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG5cclxuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBjb2xvcjogJGNvbG9yMztcclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDYyNWVtOyAvLyAxcHhcclxuICAgICAgICBmb250LXNpemU6IDEuMjVlbTsgLy8gMjBweFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVlbTsgLy8gMjBweFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb250YXQge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTsgLy8gMjRweFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNWVtOyAvLyAxMHB4XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGlnaHQtYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC41KTtcclxuICAgIEBleHRlbmQgJWZsZXg7XHJcblxyXG4gICAgLmNvbnRlbnQtYm94IHtcclxuICAgICAgd2lkdGg6IDE4Ljc1ZW07IC8vIDMwMHB4XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNWVtOyAvLyA1cHhcclxuICAgICAgLnRleHQtdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMjVlbSAwLjkzNzVlbTsgLy8gMjBweCAxNXB4XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG5cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuMTI1ZW07IC8vIDE4cHhcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcuNWVtOyAvLyAxMjBweFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNjI1ZW07IC8vIDEwcHhcclxuICAgICAgICBoZWlnaHQ6IDYuMjVlbTsgLy8gMTAwcHhcclxuICAgICAgfVxyXG4gICAgICAuYnRuIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjI1ZW0gMC42MjVlbTsgLy8gMjBweCAxMHB4XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBAZXh0ZW5kICVidXR0b247XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 72132:
/*!*********************************************!*\
  !*** ./src/app/view/home/home.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 82894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 15);




const _c0 = ["path"];
const _c1 = ["text"];
const _c2 = ["openAnimation"];
const _c3 = ["swiper"];
const _c4 = ["swiperThumbs"];
function HomeComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pic_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", pic_r2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_li_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pic_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", pic_r3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class HomeComponent {
  constructor() {
    this.index = 0;
    this.display = false;
    this.igPic = ['assets/image/ig/ig_1.jpg', 'assets/image/ig/ig_2.jpg', 'assets/image/ig/ig_3.jpg', 'assets/image/ig/ig_4.jpg', 'assets/image/ig/ig_5.jpg'];
    this.carousel = ['assets/image/carousel/slide1.jpg', 'assets/image/carousel/slide2.jpg', 'assets/image/carousel/slide3.jpg'];
    // Swiper
    this.swiperConfig = {
      // spaceBetween:30,
      scrollbar: false,
      autoplay: {
        // delay: 2500,
        disableOnInteraction: false // 點擊換頁也不會停止自動撥放
      },

      loop: true,
      // navigation: {
      //   nextEl: '.next-btn',
      //   prevEl: '.prev-btn',
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      speed: 1000
    };
    // timer(2500).subscribe(() => {
    //   this.path.nativeElement.style.fill = '#fcd752';
    //   timer(1000).subscribe(() => {
    //     this.display = true;
    //   });
    // });
  }

  ngAfterViewInit() {
    this.swiperComponent = new swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper(".swiper-container", this.swiperConfig);
    // this.swiperComponent.on('slideChange', (swiper: any) => {
    //   console.log('swiper',swiper.activeIndex)
    //   // this.index = swiper.detail[0].activeIndex;
    // });
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    viewQuery: function HomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.path = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.text = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.openAnimation = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.swiperThumbs = _t.first);
      }
    },
    decls: 108,
    vars: 47,
    consts: [["id", "home"], [1, "banner"], [1, "banner-pic"], ["src", "//wsrv.nl/?url=https://allenstu6311.github.io/cupWeb/assets/image/banner.png", "alt", ""], [1, "introduce"], [1, "introduce-pic"], ["src", "//wsrv.nl/?url=https://allenstu6311.github.io/cupWeb/assets/image/introduce.png", "alt", ""], [1, "introduce-text"], [1, "title"], [1, ""], [1, "sub-title"], [1, "content"], [1, "line"], [1, "author"], [1, "author-pic"], [1, "pic"], ["loading", "lazy", "src", "//wsrv.nl/?url=https://allenstu6311.github.io/cupWeb/assets/image/author.jpg", "alt", "\u4F5C\u8005\u4ECB\u7D39", "loading", "lazy"], [1, "author-text"], [1, "text", "content-text"], [1, "post"], [1, "post-pic"], [1, "post-text"], [1, "swiper-container"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-button-prev", "control"], [1, "swiper-button-next", "control"], ["loading", "lazy", "src", "assets/image/post.jpg", "alt", "\u8CBC\u6587\u76F8\u7247"], [1, "service"], [1, "service-text"], [1, "service-pic"], ["loading", "lazy", "src", "//wsrv.nl/?url=https://allenstu6311.github.io/cupWeb/assets/image/service.jpg", "alt", "\u670D\u52D9\u5340\u7167\u7247", "loading", "lazy"], [1, "ig"], [1, "user"], [1, "user-info"], ["href", "https://www.instagram.com/turtle.draw_/", "target", "_blank"], ["loading", "lazy", "src", "assets/image/ig/mugshot.jpg", "alt", "ig\u5927\u982D\u8CBC"], [1, "name"], [1, "photo"], [4, "ngFor", "ngForOf"], [1, "btn"], [1, "swiper-slide"], ["loading", "lazy", "alt", "", 3, "src"], ["loading", "lazy", "alt", "ig\u76F8\u7247", 3, "src"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "main")(2, "section", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "div", 9)(16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11)(20, "div", 9)(21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "section", 13)(26, "div", 14)(27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17)(30, "div", 18)(31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "section", 19)(45, "div", 20)(46, "div", 15)(47, "div", 21)(48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " \u559C\u611B\u756B\u756B\u7684\u6211\u6700\u559C\u6B61\u5C07\u5275\u610F\u878D\u5165\u751F\u6D3B\uFF0C\u8B93\u6BCF\u5E45\u756B\u7368\u4E00\u7121\u4E8C\uFF0C\u5C31\u50CF\u6211\u5011\u6BCF\u500B\u4EBA\u90FD\u662F\u5982\u6B64\u7279\u5225\uFF0C\u5145\u6EFF\u751F\u547D\u529B\u53CA\u81EA\u5DF1\u7684\u6545\u4E8B\u3002\u5E0C\u671B\u80FD\u900F\u904E\u66F4\u591A\u7684\u4F5C\u54C1\uFF0C\u70BA\u6211\u5011\u7684\u5468\u570D\u589E\u6DFB\u66F4\u7F8E\u597D\u7684\u8272\u5F69\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 22)(51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, HomeComponent_div_52_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 25)(54, "div", 26)(55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "section", 29)(60, "div", 30)(61, "div", 8)(62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ul", 11)(66, "li")(67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li")(74, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li")(81, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "section", 33)(91, "div", 34)(92, "div", 35)(93, "div", 15)(94, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 38)(97, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "YN Winnie handmade\u624B\u7E6A\u624B\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "dontactcute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 39)(102, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, HomeComponent_li_103_Template, 3, 1, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 41)(105, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 17, "introduce.title.first"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 19, "introduce.subTitle.first"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 21, "introduce.content.first"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u2688", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 23, "author.first"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u2688", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 25, "author.second"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u2688", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 27, "author.third"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u2688", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 29, "author.fourth"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.carousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 31, "service.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 33, "service.article.first.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](72, 35, "service.article.first.content"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 37, "service.article.second.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 39, "service.article.second.content"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 41, "service.article.third.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](86, 43, "service.article.third.content"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.igPic);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](107, 45, "ig.button"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["#home[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%], #home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%], .open-animation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#home[_ngcontent-%COMP%]   .ig[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #fcd752;\n  color: #fff;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 1.2em;\n  cursor: pointer;\n}\n\n.has-error[_ngcontent-%COMP%] {\n  color: red;\n  padding-top: 5px;\n}\n\n.open-animation[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n  z-index: 100;\n  transition: 0.5s;\n  flex-wrap: wrap;\n}\n.open-animation[_ngcontent-%COMP%]    > .loading-content[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.open-animation[_ngcontent-%COMP%]    > .loading-content[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  width: 25em; \n\n  height: 25em; \n\n}\n.open-animation[_ngcontent-%COMP%]    > .loading-content[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%]    > path[_ngcontent-%COMP%] {\n  stroke: #fcd752;\n  stroke-dasharray: 125em; \n\n  stroke-dashoffset: 125em; \n\n  animation: _ngcontent-%COMP%_draw-line 2.5s linear forwards;\n  transition: 0.5s;\n}\n@keyframes _ngcontent-%COMP%_draw-line {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n.open-animation[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #000000;\n  font-size: 4.375em; \n\n  transition: 0.5s;\n  position: relative;\n}\n\n.display[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n}\n\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n#home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]    > .introduce-pic[_ngcontent-%COMP%] {\n  width: 40%;\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]    > .introduce-pic[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]    > .introduce-text[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  gap: 9.375em 6.25em; \n\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]    > .introduce-text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]    > .introduce-text[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  background-color: #fcd752;\n  display: inline-block;\n  padding: 1.25em 1.5625em; \n\n  border-radius: 10px;\n  color: #fff;\n  letter-spacing: 5px;\n  line-height: 1.5;\n  max-width: 1000px;\n}\n#home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]    > .introduce-text[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 1.2;\n}\n#home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]    > .introduce-text[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-left: 5em; \n\n}\n#home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]    > .introduce-text[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: left;\n  letter-spacing: 5px;\n}\n#home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]    > .introduce-text[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]    > .introduce-text[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-left: 3.125em; \n\n}\n#home[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]    > .introduce-text[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 1.5em; \n\n  font-weight: bold;\n  letter-spacing: 2px;\n  line-height: 1.5;\n}\n#home[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n#home[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#home[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  padding: 2.5em; \n\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n    padding: 1em;\n  }\n}\n#home[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n#home[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n}\n#home[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7A7A7A;\n  font-weight: bold;\n  letter-spacing: 2px;\n  line-height: 2;\n  margin-bottom: 15px;\n}\n#home[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-pic[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-pic[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n#home[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-pic[_ngcontent-%COMP%]   .post-text[_ngcontent-%COMP%] {\n  margin-bottom: 1em; \n\n}\n#home[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-pic[_ngcontent-%COMP%]   .post-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7A7A7A;\n  font-weight: bold;\n  letter-spacing: 2px;\n  line-height: 2;\n}\n#home[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  width: 45%;\n  position: relative;\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 30px;\n  }\n}\n#home[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n#home[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n#home[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75%;\n}\n#home[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  top: 50%;\n}\n#home[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -1px;\n  background-color: #fff;\n}\n#home[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n#home[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]    > .service-text[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]    > .service-text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#home[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]    > .service-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n#home[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]    > .service-text[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 10px;\n  line-height: 2;\n  color: #7A7A7A;\n  font-size: 1em;\n  font-weight: bold;\n}\n#home[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]    > .service-text[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n#home[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]    > .service-pic[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]    > .service-pic[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#home[_ngcontent-%COMP%]   .ig[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n#home[_ngcontent-%COMP%]   .ig[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n#home[_ngcontent-%COMP%]   .ig[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #home[_ngcontent-%COMP%]   .ig[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7A7A7A;\n}\n#home[_ngcontent-%COMP%]   .ig[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .ig[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n#home[_ngcontent-%COMP%]   .ig[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 20%;\n}\n@media screen and (max-width: 991px) {\n  #home[_ngcontent-%COMP%]   .ig[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 33%;\n    height: 33%;\n  }\n}\n#home[_ngcontent-%COMP%]   .ig[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb21tb24uc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLyVFNiVBMSU4QyVFOSU5RCVBMi8lRTQlQkQlOUMlRTUlOTMlODEvY3VwV2ViL3NyYy9hcHAvdmlldy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvY29sb3Iuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlldy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNmRjs7QURrQkE7RUFDRSx5QkV2Qk87RUZ3QlAsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDZkY7O0FEa0JBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDZkY7O0FFakJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUZtQkY7QUVqQkU7RUFDRSxxQkFBQTtBRm1CSjtBRWpCSTtFQUNFLFdBQUEsRUFBQSxVQUFBO0VBQ0EsWUFBQSxFQUFBLFVBQUE7QUZtQk47QUVqQk07RUFDRSxlRHpCQztFQzBCRCx1QkFBQSxFQUFBLFdBQUE7RUFDQSx3QkFBQSxFQUFBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0FGbUJSO0FFZEU7RUFDRTtJQUNFLG9CQUFBO0VGZ0JKO0FBQ0Y7QUViRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBLEVBQUEsU0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUZjSjs7QUVWQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FGYUY7O0FEdERFO0VHNkNBO0lBSUksZUFBQTtFRlVKO0FBQ0Y7QUVSSTtFQUNFLFVBQUE7QUZVTjtBRC9ERTtFR29ERTtJQUlJLFdBQUE7RUZXTjtBQUNGO0FFUkk7RUFDRSxVQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUEsRUFBQSxnQkFBQTtBRlNOO0FEMUVFO0VHNERFO0lBUUksV0FBQTtFRlVOO0FBQ0Y7QUVSTTtFQUNFLHlCRG5GQztFQ29GRCxxQkFBQTtFQUNBLHdCQUFBLEVBQUEsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRlVSO0FFUE07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FGU1I7QUVQUTtFQUNFLGdCQUFBLEVBQUEsU0FBQTtBRlNWO0FFUFU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FGU1o7QUVKTTtFQUNFLGtCQUFBO0FGTVI7QUVKUTtFQUNFLG9CQUFBLEVBQUEsU0FBQTtBRk1WO0FFSlU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBLEVBQUEsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRk1aO0FFQ0U7RUFDRSxhQUFBO0FGQ0o7QURwSEU7RUdrSEE7SUFJSSxlQUFBO0lBQ0EsdUJBQUE7RUZFSjtBQUNGO0FFQUk7RUFDRSxVQUFBO0FGRU47QUQ3SEU7RUcwSEU7SUFJSSxXQUFBO0VGR047QUFDRjtBRURNO0VBQ0UsY0FBQSxFQUFBLFNBQUE7QUZHUjtBRHJJRTtFR2lJSTtJQUdJLFlBQUE7RUZLUjtBQUNGO0FFSFE7RUFDRSxrQkFBQTtBRktWO0FFQUk7RUFDRSxVQUFBO0FGRU47QURoSkU7RUc2SUU7SUFLSSxZQUFBO0VGRU47QUFDRjtBRUFNO0VBQ0UsY0QvSkE7RUNnS0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRkVSO0FFSUk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUZGTjtBRGhLRTtFR2dLRTtJQUtJLGVBQUE7RUZETjtBQUNGO0FFR007RUFDRSxrQkFBQSxFQUFBLFNBQUE7QUZEUjtBRUdRO0VBQ0UsY0RyTEY7RUNzTEUsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUZEVjtBRUtNO0VBQ0UsVUFBQTtFQU1BLGtCQUFBO0FGUlI7QURsTEU7RUdtTEk7SUFJSSxXQUFBO0lBQ0EsbUJBQUE7RUZEUjtBQUNGO0FFR1E7RUFDRSxnQkFBQTtFQUdBLGtCQUFBO0FGSFY7QUVLVTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBRkhaO0FFS1k7RUFDRSxVQUFBO0FGSGQ7QUVPVTtFQUNFLFFBQUE7QUZMWjtBRVFVO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUZOWjtBRTZCRTtFQUNFLGFBQUE7QUYzQko7QUQ5TUU7RUd3T0E7SUFJSSxlQUFBO0VGMUJKO0FBQ0Y7QUU0Qkk7RUFDRSxVQUFBO0FGMUJOO0FEdE5FO0VHK09FO0lBSUksV0FBQTtFRnpCTjtBQUNGO0FFMkJNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBRnpCUjtBRTZCTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0R4UUE7RUN5UUEsY0FBQTtFQUNBLGlCQUFBO0FGM0JSO0FFNkJRO0VBQ0UsbUJBQUE7QUYzQlY7QUVrQ0k7RUFDRSxVQUFBO0FGaENOO0FENU9FO0VHMlFFO0lBR0ksV0FBQTtFRjlCTjtBQUNGO0FFb0NNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FGbENSO0FFb0NRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FGbENWO0FFcUNVOztFQUVFLGNEN1NKO0FEMFFSO0FFeUNNO0VBQ0UsYUFBQTtBRnZDUjtBRHBRRTtFRzBTSTtJQUlJLGVBQUE7RUZ0Q1I7QUFDRjtBRXdDUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FGdENWO0FEN1FFO0VHaVRNO0lBS0ksVUFBQTtJQUNBLFdBQUE7RUZyQ1Y7QUFDRjtBRXlDSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBRnZDTiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL2NvbG9yLnNjc3NcIjtcclxuXHJcbi8vw6bCicKLw6bCqcKfXHJcbkBtaXhpbiBtb2JpbGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vw6XCucKzw6bCncK/XHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbiVmbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiVidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhhcy1lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG5cclxuIiwiI2hvbWUgLmF1dGhvciAuYXV0aG9yLXRleHQsICNob21lIC5pbnRyb2R1Y2UsIC5vcGVuLWFuaW1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jaG9tZSAuaWcgLmJ0biBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkNzUyO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oYXMtZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ub3Blbi1hbmltYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAxMDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5vcGVuLWFuaW1hdGlvbiA+IC5sb2FkaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ub3Blbi1hbmltYXRpb24gPiAubG9hZGluZy1jb250ZW50ID4gc3ZnIHtcbiAgd2lkdGg6IDI1ZW07IC8qIDQwMHB4ICovXG4gIGhlaWdodDogMjVlbTsgLyogNDAwcHggKi9cbn1cbi5vcGVuLWFuaW1hdGlvbiA+IC5sb2FkaW5nLWNvbnRlbnQgPiBzdmcgPiBwYXRoIHtcbiAgc3Ryb2tlOiAjZmNkNzUyO1xuICBzdHJva2UtZGFzaGFycmF5OiAxMjVlbTsgLyogMjAwMHB4ICovXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxMjVlbTsgLyogMjAwMHB4ICovXG4gIGFuaW1hdGlvbjogZHJhdy1saW5lIDIuNXMgbGluZWFyIGZvcndhcmRzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuQGtleWZyYW1lcyBkcmF3LWxpbmUge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cbi5vcGVuLWFuaW1hdGlvbiAubG9hZGluZy10ZXh0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogNC4zNzVlbTsgLyogNzBweCAqL1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaXNwbGF5IHtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNob21lIC5pbnRyb2R1Y2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuI2hvbWUgLmludHJvZHVjZSA+IC5pbnRyb2R1Y2UtcGljIHtcbiAgd2lkdGg6IDQwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNob21lIC5pbnRyb2R1Y2UgPiAuaW50cm9kdWNlLXBpYyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiNob21lIC5pbnRyb2R1Y2UgPiAuaW50cm9kdWNlLXRleHQge1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDkuMzc1ZW0gNi4yNWVtOyAvKiAxNTBweCAxMDBweCAqL1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgI2hvbWUgLmludHJvZHVjZSA+IC5pbnRyb2R1Y2UtdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiNob21lIC5pbnRyb2R1Y2UgPiAuaW50cm9kdWNlLXRleHQgPiAudGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkNzUyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEuMjVlbSAxLjU2MjVlbTsgLyogMjBweCAyNXB4ICovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cbiNob21lIC5pbnRyb2R1Y2UgPiAuaW50cm9kdWNlLXRleHQgLnN1Yi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbiNob21lIC5pbnRyb2R1Y2UgPiAuaW50cm9kdWNlLXRleHQgLnN1Yi10aXRsZSA+IGRpdiB7XG4gIG1hcmdpbi1sZWZ0OiA1ZW07IC8qIDgwcHggKi9cbn1cbiNob21lIC5pbnRyb2R1Y2UgPiAuaW50cm9kdWNlLXRleHQgLnN1Yi10aXRsZSA+IGRpdiBoMyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG4jaG9tZSAuaW50cm9kdWNlID4gLmludHJvZHVjZS10ZXh0IC5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUgLmludHJvZHVjZSA+IC5pbnRyb2R1Y2UtdGV4dCAuY29udGVudCA+IGRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAzLjEyNWVtOyAvKiA1MHB4ICovXG59XG4jaG9tZSAuaW50cm9kdWNlID4gLmludHJvZHVjZS10ZXh0IC5jb250ZW50ID4gZGl2IHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuNWVtOyAvKiAyNHB4ICovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuI2hvbWUgLmF1dGhvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjaG9tZSAuYXV0aG9yIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbiNob21lIC5hdXRob3IgLmF1dGhvci1waWMge1xuICB3aWR0aDogNTAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgI2hvbWUgLmF1dGhvciAuYXV0aG9yLXBpYyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiNob21lIC5hdXRob3IgLmF1dGhvci1waWMgLnBpYyB7XG4gIHBhZGRpbmc6IDIuNWVtOyAvKiA0MHB4ICovXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjaG9tZSAuYXV0aG9yIC5hdXRob3ItcGljIC5waWMge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxufVxuI2hvbWUgLmF1dGhvciAuYXV0aG9yLXBpYyAucGljIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiNob21lIC5hdXRob3IgLmF1dGhvci10ZXh0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNob21lIC5hdXRob3IgLmF1dGhvci10ZXh0IHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbiNob21lIC5hdXRob3IgLmF1dGhvci10ZXh0IHAge1xuICBjb2xvcjogIzdBN0E3QTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuI2hvbWUgLnBvc3QgLnBvc3QtcGljIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjaG9tZSAucG9zdCAucG9zdC1waWMge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuI2hvbWUgLnBvc3QgLnBvc3QtcGljIC5wb3N0LXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAxZW07IC8qIDEwcHggKi9cbn1cbiNob21lIC5wb3N0IC5wb3N0LXBpYyAucG9zdC10ZXh0IHAge1xuICBjb2xvcjogIzdBN0E3QTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuI2hvbWUgLnBvc3QgLnBvc3QtcGljIC5waWMge1xuICB3aWR0aDogNDUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjaG9tZSAucG9zdCAucG9zdC1waWMgLnBpYyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxufVxuI2hvbWUgLnBvc3QgLnBvc3QtcGljIC5waWMgLnN3aXBlci1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jaG9tZSAucG9zdCAucG9zdC1waWMgLnBpYyAuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jaG9tZSAucG9zdCAucG9zdC1waWMgLnBpYyAuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiA3NSU7XG59XG4jaG9tZSAucG9zdCAucG9zdC1waWMgLnBpYyAuc3dpcGVyLWNvbnRhaW5lciAuY29udHJvbCB7XG4gIHRvcDogNTAlO1xufVxuI2hvbWUgLnBvc3QgLnBvc3QtcGljIC5waWMgLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4jaG9tZSAuc2VydmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjaG9tZSAuc2VydmljZSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG4jaG9tZSAuc2VydmljZSA+IC5zZXJ2aWNlLXRleHQge1xuICB3aWR0aDogNTAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgI2hvbWUgLnNlcnZpY2UgPiAuc2VydmljZS10ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuI2hvbWUgLnNlcnZpY2UgPiAuc2VydmljZS10ZXh0IC50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbiNob21lIC5zZXJ2aWNlID4gLnNlcnZpY2UtdGV4dCAuY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBjb2xvcjogIzdBN0E3QTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2hvbWUgLnNlcnZpY2UgPiAuc2VydmljZS10ZXh0IC5jb250ZW50IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNob21lIC5zZXJ2aWNlID4gLnNlcnZpY2UtcGljIHtcbiAgd2lkdGg6IDUwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNob21lIC5zZXJ2aWNlID4gLnNlcnZpY2UtcGljIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuI2hvbWUgLmlnIC51c2VyIC51c2VyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jaG9tZSAuaWcgLnVzZXIgLnVzZXItaW5mbyAucGljIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2hvbWUgLmlnIC51c2VyIC51c2VyLWluZm8gLm5hbWUgaDQsXG4jaG9tZSAuaWcgLnVzZXIgLnVzZXItaW5mbyAubmFtZSBwIHtcbiAgY29sb3I6ICM3QTdBN0E7XG59XG4jaG9tZSAuaWcgLnBob3RvIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNob21lIC5pZyAucGhvdG8gdWwge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuI2hvbWUgLmlnIC5waG90byB1bCBsaSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgI2hvbWUgLmlnIC5waG90byB1bCBsaSB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgfVxufVxuI2hvbWUgLmlnIC5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufSIsIiRjb2xvcjE6ICNmY2Q3NTI7XHJcbiRjb2xvcjI6ICM2MTg0YzY7XHJcbiRjb2xvcjM6IzdBN0E3QTtcclxuJGNvbG9yNDojYzNjMmMyMjlcclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb21tb24uc2Nzc1wiO1xyXG4vLyDDqcKWwovDpcKgwrTDpcKLwpXDp8KVwqtcclxuLm9wZW4tYW5pbWF0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBAZXh0ZW5kICVmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgJiA+IC5sb2FkaW5nLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICYgPiBzdmcge1xyXG4gICAgICB3aWR0aDogMjVlbTsgLyogNDAwcHggKi9cclxuICAgICAgaGVpZ2h0OiAyNWVtOyAvKiA0MDBweCAqL1xyXG5cclxuICAgICAgJiA+IHBhdGgge1xyXG4gICAgICAgIHN0cm9rZTogJGNvbG9yMTtcclxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxMjVlbTsgLyogMjAwMHB4ICovXHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEyNWVtOyAvKiAyMDAwcHggKi9cclxuICAgICAgICBhbmltYXRpb246IGRyYXctbGluZSAyLjVzIGxpbmVhciBmb3J3YXJkcztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGRyYXctbGluZSB7XHJcbiAgICB0byB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmctdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDQuMzc1ZW07IC8qIDcwcHggKi9cclxuICAgIC8vIGFuaW1hdGlvbjogZmxhc2hpbmcgMnMgbGluZWFyIGZvcndhcmRzO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNwbGF5IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4jaG9tZSB7XHJcbiAgLmludHJvZHVjZSB7XHJcbiAgICBAZXh0ZW5kICVmbGV4O1xyXG5cclxuICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmludHJvZHVjZS1waWMge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG5cclxuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuaW50cm9kdWNlLXRleHQge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAvLyBAZXh0ZW5kICVmbGV4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDkuMzc1ZW0gNi4yNWVtOyAvKiAxNTBweCAxMDBweCAqL1xyXG5cclxuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJiA+IC50aXRsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMS4yNWVtIDEuNTYyNWVtOyAvKiAyMHB4IDI1cHggKi9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1Yi10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcblxyXG4gICAgICAgICYgPiBkaXYge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVlbTsgLyogODBweCAqL1xyXG5cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICYgPiBkaXYge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMuMTI1ZW07IC8qIDUwcHggKi9cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTsgLyogMjRweCAqL1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hdXRob3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdXRob3ItcGljIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5waWMge1xyXG4gICAgICAgIHBhZGRpbmc6IDIuNWVtOyAvKiA0MHB4ICovXHJcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dGhvci10ZXh0IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgQGV4dGVuZCAlZmxleDtcclxuXHJcbiAgICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wb3N0IHtcclxuICAgIC5wb3N0LXBpYyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBvc3QtdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtOyAvKiAxMHB4ICovXHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5waWMge1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAvLyBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAvLyBvdmVyZmxvdy15OiB1bnNldDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAuc3dpcGVyLXNsaWRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udHJvbCB7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAtMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAlY29udHJvbC1idG4ge1xyXG4gICAgICAgIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vICAgdG9wOiA2NSU7XHJcbiAgICAgICAgLy8gICB3aWR0aDogMjBweDtcclxuICAgICAgICAvLyAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAvLyAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gLnByZXYtYnRuIHtcclxuICAgICAgICAvLyAgIEBleHRlbmQgJWNvbnRyb2wtYnRuO1xyXG4gICAgICAgIC8vICAgbGVmdDogMjBweDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gLm5leHQtYnRuIHtcclxuICAgICAgICAvLyAgIEBleHRlbmQgJWNvbnRyb2wtYnRuO1xyXG4gICAgICAgIC8vICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VydmljZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuc2VydmljZS10ZXh0IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gLnNlcnZpY2UtcGljIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWcge1xyXG4gICAgLnVzZXIge1xyXG4gICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIC5waWMge1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICBoNCxcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yMztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5waG90byB7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcblxyXG4gICAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIEBleHRlbmQgJWJ1dHRvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 49174:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _app_app_server_config__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.config */ 88432);


/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 87561:
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 49411:
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(56394)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(34991)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 736 ? "vendor" : chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map