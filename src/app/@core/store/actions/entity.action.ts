import { createAction, props } from "@ngrx/store";
import { EntityModel } from "../models/entity-model";

export const requestGetAllEntities = createAction(
  "[Entity] Get All Entitites",
  props<{ payload: { entities: EntityModel[] } }>()
);

export const requestGetByIdEntity = createAction(
  "[Entity] Get By Id Entity",
  props<{ payload: { entity: EntityModel } }>()
);

export const requestCreateEntity = createAction(
  "[Entity] Create Entity",
  props<{ payload: { entity: EntityModel } }>()
);

export const requestUpdateEntity = createAction(
  "[Entity] Update Entity",
  props<{ payload: { entity: EntityModel } }>()
);

export const requestDeleteEntity = createAction(
  "[Entity] Delete Entity",
  props<{ payload: { entity: EntityModel } }>()
);

export const requestError = createAction(
  "[Entity] Error",
  props<{ payload: { error: any } }>()
);