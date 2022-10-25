import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenResponseDTO } from '../../../models/response/token-response-dto';
import { PathAuthentication } from '../../../modules/authentication/static/path-authentication';
import { PathContact } from 'src/app/modules/contact/static/path-contact';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // HERE CALL LOCALSTORAGE
    // let requestClone = request;
    // if(!this.isUrlLogin(request.url)){ 
    //                                   
    //   requestClone = request.clone({ 
    //     headers: request.headers
    //       .set('Authorization', `${this.token.tokenType} ${this.token.tokenAccess}`)
    //       .set('Content-Type', 'application/json')
    //   }); 
    // }else{
    //   requestClone = request.clone({
    //     headers: request.headers
    //       .set('Content-Type', 'application/json')
    //   }); 
    // }
    
    let requestClone = request;
    if(!this.isUrlCreateContactsByFiles(request.url)){
      requestClone = request.clone({
        headers: request.headers
          .set('Content-Type', 'application/json')
      }); 
    }else{
      requestClone = request.clone({
        headers: request.headers
          .set('Content-Type', 'multipart/form-data')
      }); 
    }
    return next.handle(requestClone);
  }

  isUrlLogin(url: string): boolean {
    return (url.search(PathAuthentication.AUTH) != -1);
  }

  isUrlCreateContactsByFiles(url: string): boolean {
    return (url.search(PathContact.GET_GROUPS) != -1);
  }

}