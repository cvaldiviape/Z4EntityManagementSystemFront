import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { PathContact } from '../static/path-contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private _http: HttpClient
  ) { }

  requestGetAll(): Observable<any>{
    return this._http.get<any>(PathContact.GET_ALL);
  }

  requestGetAllGroups(): Observable<any>{
    return this._http.get<any>(PathContact.GET_GROUPS);
  }

  requestCreateGroups(formData: FormData): Observable<any>{
    return this._http.post<any>(PathContact.GET_GROUPS, formData);
  }

}
