import { createReducer, on } from "@ngrx/store";
import { TypeContributorInitialState } from "../initial-states/TypeContributorInitialState";
import { 
  requestGetAllTypeContributors,
  requestGetByIdTypeContributor,
  requestCreateTypeContributor,
  requestUpdateTypeContributor,
  requestDeleteTypeContributor,
  requestError
 } from "../actions/type-contributor.action";

const _TypeContributorReducer = createReducer(
  TypeContributorInitialState,
  on(requestGetAllTypeContributors, (state, { payload }) => ({ 
    ...state, 
    entities: payload.typeContributors,
    loading: false,
    loaded: true,
  })),
  on(requestGetByIdTypeContributor, (state, { payload }) => ({ 
    ...state, 
    TypeContributor: payload.typeContributor,
    loading: false,
    loaded: true,
  })),
  on(requestCreateTypeContributor, (state, { payload }) => ({ 
    ...state, 
    TypeContributor: payload.typeContributor,
    loading: false,
    loaded: true,
  })),
  on(requestUpdateTypeContributor, (state, { payload }) => ({ 
    ...state, 
    TypeContributor: payload.typeContributor,
    loading: false,
    loaded: true,
  })),
  on(requestDeleteTypeContributor, (state, { payload }) => ({ 
    ...state, 
    TypeContributor: payload.typeContributor,
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

export function TypeContributorFunctionReducer(state, action) {
  return _TypeContributorReducer(state, action);
}