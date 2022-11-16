import { createAction, props } from "@ngrx/store";
import { TypeDocumentModel } from "../models/type-document";

export const requestGetAllTypeDocuments = createAction(
  "[TypeDocument] Get All TypeDocuments",
  props<{ payload: { typeDocuments: TypeDocumentModel[] } }>()
);

export const requestGetByIdTypeDocument = createAction(
  "[TypeDocument] Get By Id TypeDocument",
  props<{ payload: { typeDocument: TypeDocumentModel } }>()
);

export const requestCreateTypeDocument = createAction(
  "[TypeDocument] Create TypeDocument",
  props<{ payload: { typeDocument: TypeDocumentModel } }>()
);

export const requestUpdateTypeDocument = createAction(
  "[TypeDocument] Update TypeDocument",
  props<{ payload: { typeDocument: TypeDocumentModel } }>()
);

export const requestDeleteTypeDocument = createAction(
  "[TypeDocument] Delete TypeDocument",
  props<{ payload: { typeDocument: TypeDocumentModel } }>()
);

export const requestError = createAction(
  "[TypeDocument] Error",
  props<{ payload: { error: any } }>()
);