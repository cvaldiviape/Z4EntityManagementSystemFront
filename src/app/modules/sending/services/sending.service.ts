import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { PathSending } from '../static/path-sending';
import { MessageRequestDTO } from '../../../models/request/message-request-dto';
import { MessageResponseDTO } from '../../../models/response/message-response-dto';

@Injectable({
  providedIn: 'root'
})
export class SendingService {

  constructor(
    private _http: HttpClient
  ) { }

  requestGetAll(): Observable<any>{
    return this._http.get<any>(PathSending.GET_ALL);
  }

  requestCreate(messageRequestDTO: MessageRequestDTO): Observable<MessageResponseDTO>{
    return this._http.post<MessageResponseDTO>(PathSending.CREATE, JSON.stringify(messageRequestDTO));
  }
}
