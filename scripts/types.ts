// types.ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppDispatch = ((state: any, action: any) => any) | 'dispatch' | null;

type AppStore = import('redux').Store<
  import('redux').Reducer,
  any,
  any
>;

type AppAction = ReturnType<AppStore['dispatch']>;

type Device = {
  platform: 'ios' | 'android';
};

type User = {
  name: string;
  email: string;
  avatar: string;
  accessToken: string;
};

type AuthState = {
  user: User | null;
  device: Device;
  accessToken: string;
  refreshToken: string;
  hasUser: boolean;
};

type AuthReducer = import('redux').Reducer<AuthState, AppAction>;

type AuthActions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST';
  LOGIN_SUCCESS: 'LOGIN_SUCCESS';
  LOGIN_FAILURE: 'LOGIN_FAILURE';
  LOGOUT: 'LOGOUT';
};