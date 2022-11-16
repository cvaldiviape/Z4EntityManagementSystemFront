import { AuthModel } from "../models/auth-model";
import { UserModel } from "../models/user-model";

export interface UserState {
  auth: AuthModel;
  user: UserModel;
  loaded: boolean;
  loading: boolean;
  error: any;
  enable: boolean;
}