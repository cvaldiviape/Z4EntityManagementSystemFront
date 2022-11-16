import { RoleModel } from "./role-model";

export interface UserModel {
  id: number;
  username: string;
  roles: RoleModel[];
}
