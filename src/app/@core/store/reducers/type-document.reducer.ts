import { createReducer, on } from "@ngrx/store";
import { TypeDocumentInitialState } from "../initial-states/TypeDocumentInitialState";
import { 
  requestGetAllTypeDocuments,
  requestGetByIdTypeDocument,
  requestCreateTypeDocument,
  requestUpdateTypeDocument,
  requestDeleteTypeDocument,
  requestError
 } from "../actions/type-document.action";

const _TypeDocumentReducer = createReducer(
  TypeDocumentInitialState,
  on(requestGetAllTypeDocuments, (state, { payload }) => ({ 
    ...state, 
    typeDocuments: payload.typeDocuments,
    loading: false,
    loaded: true,
  })),
  on(requestGetByIdTypeDocument, (state, { payload }) => ({ 
    ...state, 
    typeDocument: payload.typeDocument,
    loading: false,
    loaded: true,
  })),
  on(requestCreateTypeDocument, (state, { payload }) => ({ 
    ...state, 
    TypeTypeDocument: payload.typeDocument,
    loading: false,
    loaded: true,
  })),
  on(requestUpdateTypeDocument, (state, { payload }) => ({ 
    ...state, 
    TypeTypeDocument: payload.typeDocument,
    loading: false,
    loaded: true,
  })),
  on(requestDeleteTypeDocument, (state, { payload }) => ({ 
    ...state, 
    TypeTypeDocument: payload.typeDocument,
    loading: false,
    loaded: true,
  })),
  on(requestError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload.error
  }))
);

export function TypeDocumentFunctionReducer(state, action) {
  return _TypeDocumentReducer(state, action);
}