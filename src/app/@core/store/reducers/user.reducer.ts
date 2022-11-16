import { createReducer, on } from "@ngrx/store";
import { UserInitialState } from "../initial-states/UserInitialState";
import { 
  requestAuthUser,
  requestCreateUser,
  requestError
 } from "../actions/user.action";

const _UserReducer = createReducer(
  UserInitialState,
  on(requestAuthUser, (state, { payload }) => ({ 
    ...state, 
    auth: payload.auth,
    loading: false,
    loaded: true,
  })),
  on(requestCreateUser, (state, { payload }) => ({ 
    ...state, 
    user: payload.user,
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

export function UserFunctionReducer(state, action) {
  return _UserReducer(state, action);
}