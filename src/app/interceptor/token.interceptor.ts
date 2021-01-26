import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
token:string = '';

constructor(public authSvc: AuthService) {
  this.authSvc.userToken$.subscribe(token=>{
    this.token = token
  })
}

static addToken(request: HttpRequest<any>, token:string){
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.token){
      request = TokenInterceptor.addToken(request, this.token)
    }
    return next.handle(request);
  }
}
