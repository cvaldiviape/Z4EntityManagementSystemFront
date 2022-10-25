import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { PathAuthentication } from '../static/path-authentication';
import { AuthResponseDTO } from '../../../models/response/auth-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(
    private _http: HttpClient,
  ) { }

  requestLogin(): Observable<AuthResponseDTO>{
    return this._http.post<AuthResponseDTO>(PathAuthentication.AUTH, JSON.stringify(""));
  }

}