import { environment } from "src/environments/environment";

export class PathAuthentication {
  static readonly ROOT = `${environment.endPoint}/auth`;
  static readonly AUTH = `${this.ROOT}`;
}