import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SnackBarService } from '../../../shared/services/snack-bar.service';
import { MessagesBackend } from 'src/app/constants/messages-backend';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private _router: Router,
    private _snackBar: SnackBarService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        return this.errorHandler(err); 
      }
    ));
  }

  errorHandler(err: HttpErrorResponse){
    // if(err instanceof HttpErrorResponse){

    //   if(err.error instanceof ErrorEvent){
       
    //   } else {
    //     if(err.status===401){
    //       this._snackBar.showError(MessagesBackend.BAD_CREDENTIALS, 'top right');
    //     }else{
    //       this._snackBar.showError('Error server', 'top right');
    //     }
    //   }

    // } else {
    //   this._snackBar.showError('Error unknown', 'top right');
    // }

    if(err instanceof HttpErrorResponse && err instanceof ErrorEvent){
      this._snackBar.showError('Error client', 'top right');
    } else if(err instanceof HttpErrorResponse && (err?.status >=400 || err?.status<=499)){
      this.showSnackbarByStatus(err?.status);
    }else{
      this._snackBar.showError('Error unknown', 'top right');
    }

    this._router.navigateByUrl('/auth/sign-in');
    return throwError(() => err);
  }

  showSnackbarByStatus(status: number): void{
    switch(status){
      case 400:
        this._snackBar.showError(MessagesBackend.BAD_REQUEST, 'top right');
        break;
      case 401:
        this._snackBar.showError(MessagesBackend.UNAUTHORIZED, 'top right');
        break;
      case 404:
        this._snackBar.showError(MessagesBackend.NOT_FOUND, 'top right');
        break;
      default:
        this._snackBar.showError(MessagesBackend.UNKNOWN_ERROR, 'top right');
        break;
    }
  }

  
}