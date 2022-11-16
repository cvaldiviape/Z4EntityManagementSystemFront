import { TypeContributorModel } from "./type-contributor";
import { TypeDocumentModel } from "./type-document";

export interface EntityModel {
  id: number,
  nroDocument: string,
  companyName: string,
  commercialName: string,
  address: string,
  phone: string,
  typeContributor: TypeContributorModel,
  typeDocument: TypeDocumentModel,
}