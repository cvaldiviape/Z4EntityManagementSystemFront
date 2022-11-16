import { UserState } from "../type-states/user-state";

export const UserInitialState: UserState = {
  auth: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
  enable: true,
};