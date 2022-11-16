import { TypeDocumentModel } from "../models/type-document";

export interface TypeDocumentState {
  typeDocuments: TypeDocumentModel[];
  typeDocument: TypeDocumentModel;
  loaded: boolean;
  loading: boolean;
  error: any;
  enable: boolean;
}