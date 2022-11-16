import { RoleModel } from "./role-model";
import { TokenModel } from "./token-model";
import { UserAuthModel } from "./user-auth-model";

export interface AuthModel{ 
  user: UserAuthModel,
  role: RoleModel
  token: TokenModel,
}