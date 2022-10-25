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
    if(err instanceof HttpErrorResponse){
      if(err.error instanceof ErrorEvent){
        this._snackBar.showError('Error cliente', 'top right');
      } else {
        if(err.status===401){
          this._snackBar.showError(err.error.message, 'top right');
        }else{
          this._snackBar.showError('Error servidor', 'top right');
        }
      }
    } else {
      this._snackBar.showError('Otro tipo de error', 'top right');
    }
    this._router.navigateByUrl('/auth/sign-in');
    return throwError(() => err);
  }
  
}