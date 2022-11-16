import { createSelector } from "@ngrx/store";
import { AppState } from "..";

export const selectUserState = (state: AppState) => state.user;

export const selectorUserAuth = createSelector(
  selectUserState,
  (x) => x.auth
);

export const selectAuthUser = createSelector(
  selectorUserAuth,
  (x) => x.user.username
)