import { createAction, props } from "@ngrx/store";
import { AuthModel } from "../models/auth-model";
import { UserModel } from "../models/user-model";

export const requestAuthUser = createAction(
  "[User] Auth User",
  props<{ payload: { auth: AuthModel } }>()
);

export const requestCreateUser = createAction(
  "[User] Create User",
  props<{ payload: { user: UserModel } }>()
);

export const requestError = createAction(
  "[User] Error",
  props<{ payload: { error: any } }>()
);

