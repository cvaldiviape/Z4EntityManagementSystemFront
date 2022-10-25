import { environment } from "src/environments/environment";

export class PathContact {
  static readonly ROOT = `${environment.endPoint}/contact`;
  static readonly GET_ALL = `${this.ROOT}`;
  static readonly GET_GROUPS = `${this.ROOT}/group`;
  static readonly CREATE_GROUPS = `${this.ROOT}/group/files`;
}