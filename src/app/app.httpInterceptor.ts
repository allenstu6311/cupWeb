import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpClient ,HttpErrorResponse
} from '@angular/common/http';

import { Observable, catchError,of,map,timeout,throwError } from 'rxjs';



/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      const token = "token"
      let secureReq = req

      if(!req.url.includes('assets')){

        secureReq  = req.clone({
          url: 'https://fakestoreapi.com' + req.url,
          setHeaders:{
            Authorization:`Bearer ` + token
          }
        });
      }

    return next.handle(secureReq)
    .pipe(
      // timeout(10000),
      catchError((response:HttpErrorResponse)=>{
        return throwError(() => response);
      }),
      map((evt:HttpEvent<unknown>)=>{
        return evt
      })
    )
    ;
  }
}

