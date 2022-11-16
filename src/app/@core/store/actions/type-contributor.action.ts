import { createAction, props } from "@ngrx/store";
import { TypeContributorModel } from "../models/type-contributor";

export const requestGetAllTypeContributors = createAction(
  "[TypeContributor] Get All TypeContributors",
  props<{ payload: { typeContributors: TypeContributorModel[] } }>()
);

export const requestGetByIdTypeContributor = createAction(
  "[TypeContributor] Get By Id TypeContributor",
  props<{ payload: { typeContributor: TypeContributorModel } }>()
);

export const requestCreateTypeContributor = createAction(
  "[TypeContributor] Create TypeContributor",
  props<{ payload: { typeContributor: TypeContributorModel } }>()
);

export const requestUpdateTypeContributor = createAction(
  "[TypeContributor] Update TypeContributor",
  props<{ payload: { typeContributor: TypeContributorModel } }>()
);

export const requestDeleteTypeContributor = createAction(
  "[TypeContributor] Delete TypeContributor",
  props<{ payload: { typeContributor: TypeContributorModel } }>()
);

export const requestError = createAction(
  "[TypeContributor] Error",
  props<{ payload: { error: any } }>()
);