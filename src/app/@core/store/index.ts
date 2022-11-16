import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";

// import { environment } from "environments/environment";

// reducers
import { UserFunctionReducer } from "./reducers/user.reducer";
import { entityFunctionReducer } from "./reducers/entity.reducer";
import { TypeContributorFunctionReducer } from "./reducers/type-contributor.reducer";
import { TypeDocumentFunctionReducer } from "./reducers/type-document.reducer";

// states
import { EntityState } from "./type-states/entity-state";
import { TypeContributorState } from "./type-states/type-contributor-state";
import { TypeDocumentState } from "./type-states/type-document-state";
import { UserState } from "./type-states/user-state";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {
  entity: EntityState,
  typeContributor: TypeContributorState,
  typeDocument: TypeDocumentState,
  user: UserState
}

export const reducers: ActionReducerMap<AppState> = {
  entity: entityFunctionReducer,
  typeContributor: TypeContributorFunctionReducer,
  typeDocument: TypeDocumentFunctionReducer,
  user: UserFunctionReducer
};

export const metaReducers: Array<MetaReducer<AppState>> = [];
 // !environment.production ? [storeFreeze] : [];
