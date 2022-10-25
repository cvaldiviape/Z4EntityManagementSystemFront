import { environment } from "src/environments/environment";

export class PathSending {
  static readonly ROOT = `${environment.endPoint}/api/messages`;
  static readonly GET_ALL = `${this.ROOT}`;
  static readonly CREATE = `${this.ROOT}`;
}