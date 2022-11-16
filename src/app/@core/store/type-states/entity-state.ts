import { EntityModel } from "../models/entity-model";

export interface EntityState {
  entities: EntityModel[];
  entity: EntityModel;
  loaded: boolean;
  loading: boolean;
  error: any;
  enable: boolean;
}