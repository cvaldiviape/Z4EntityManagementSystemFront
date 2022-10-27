import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageParams } from 'src/app/models/params/page-params';
import { TypeDocumentRequestDTO } from 'src/app/models/request/type-document-request-dto';
import { MainResponseDTO } from 'src/app/models/response/main-response-dto';
import { PageResponseDTO } from 'src/app/models/response/page-response-dto';
import { TypeDocumentResponseDTO } from 'src/app/models/response/type-document-response-dto';
import { PathTypeDocument } from '../static/path-type-document';

@Injectable({
  providedIn: 'root'
})
export class TypeDocumentService {

  constructor(
    private _http: HttpClient,
  ) { }

  // requestGetAll(pageParams: PageParams): Observable<MainResponseDTO<PageResponseDTO<TypeDocumentResponseDTO>>> {
  //   let {numberPage, sizePage, sortBy, sortDir} = pageParams;
  //   return this._http.get<MainResponseDTO<PageResponseDTO<TypeDocumentResponseDTO>>>(`${PathTypeDocument.GET_ALL}?numberPage=${numberPage}&sizePage=${sizePage}&sortBy=${sortBy}&sortDir=${sortDir}`);
  // }

  requestGetAll(): Observable<MainResponseDTO<PageResponseDTO<TypeDocumentResponseDTO>>> {
    return this._http.get<MainResponseDTO<PageResponseDTO<TypeDocumentResponseDTO>>>(`${PathTypeDocument.GET_ALL}`);
  }


  requestGetById(id: number): Observable<MainResponseDTO<TypeDocumentResponseDTO>> {
    return this._http.get<MainResponseDTO<TypeDocumentResponseDTO>>(`${PathTypeDocument.GET_BY_ID}/${id}`);
  }

  requestCeate(TypeDocumentRequestDTO: TypeDocumentRequestDTO): Observable<MainResponseDTO<TypeDocumentResponseDTO>> {
    return this._http.post<MainResponseDTO<TypeDocumentResponseDTO>>(`${PathTypeDocument.CREATE}`, JSON.stringify(TypeDocumentRequestDTO));
  }

  requestUpdate(TypeDocumentRequestDTO: TypeDocumentRequestDTO, id: number): Observable<MainResponseDTO<TypeDocumentResponseDTO>> {
    return this._http.put<MainResponseDTO<TypeDocumentResponseDTO>>(`${PathTypeDocument.UPDATE}/${id}`, JSON.stringify(TypeDocumentRequestDTO));
  }

  requestDelete(id: number): Observable<MainResponseDTO<TypeDocumentResponseDTO>> {
    return this._http.delete<MainResponseDTO<TypeDocumentResponseDTO>>(`${PathTypeDocument.DELETE}/${id}`);
  }

}