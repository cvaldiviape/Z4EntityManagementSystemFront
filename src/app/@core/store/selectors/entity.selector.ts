// NGRX
import { createSelector } from "@ngrx/store";
import { AppState } from "..";

export const selectEntityState = (state: AppState) => state.entity;

export const selectorAllEntities = createSelector(
  selectEntityState,
  (state) => state.entities
);