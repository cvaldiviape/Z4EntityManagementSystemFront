import { EntityState } from "../type-states/entity-state";

export const EntityInitialState: EntityState = {
  entities: [],
  entity: null,
  loaded: false,
  loading: false,
  error: null,
  enable: true,
};