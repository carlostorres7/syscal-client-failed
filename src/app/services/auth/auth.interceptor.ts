import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let data_token = JSON.stringify(localStorage.getItem('auth-token')).split(";");
    let access_token = data_token[0].replace("\"Bearer=","");

    if (!access_token) {
      return next.handle(request);
    }
    console.log('token',access_token);
    
    const headers = request.clone({
      setHeaders: {
        'auth-token': `${access_token}`
      }
    });
    
    return next.handle(headers);
  }

}
