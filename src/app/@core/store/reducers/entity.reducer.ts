import { createReducer, on } from "@ngrx/store";
import { EntityInitialState } from "../initial-states/EntityInitialState";
import { 
  requestGetAllEntities,
  requestGetByIdEntity,
  requestCreateEntity,
  requestUpdateEntity,
  requestDeleteEntity,
  requestError
 } from "../actions/entity.action";

const _entityReducer = createReducer(
  EntityInitialState,
  on(requestGetAllEntities, (state, { payload }) => ({ 
    ...state, 
    entities: payload.entities,
    loading: false,
    loaded: true,
  })),
  on(requestGetByIdEntity, (state, { payload }) => ({ 
    ...state, 
    entity: payload.entity,
    loading: false,
    loaded: true,
  })),
  on(requestCreateEntity, (state, { payload }) => ({ 
    ...state, 
    entity: payload.entity,
    loading: false,
    loaded: true,
  })),
  on(requestUpdateEntity, (state, { payload }) => ({ 
    ...state, 
    entity: payload.entity,
    loading: false,
    loaded: true,
  })),
  on(requestDeleteEntity, (state, { payload }) => ({ 
    ...state, 
    entity: payload.entity,
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

export function entityFunctionReducer(state, action) {
  return _entityReducer(state, action);
}