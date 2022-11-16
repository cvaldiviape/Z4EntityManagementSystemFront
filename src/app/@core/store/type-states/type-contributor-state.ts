import { TypeContributorModel } from "../models/type-contributor";

export interface TypeContributorState {
  typeContributors: TypeContributorModel[];
  typeContributor: TypeContributorModel;
  loaded: boolean;
  loading: boolean;
  error: any;
  enable: boolean;
}