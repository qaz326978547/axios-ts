import { EventEmitter } from 'eventemitter3';
import { TypedEmitter } from 'tiny-typed-emitter';

export enum AppEvents {
  Modal = 'Modal',
  ScrollTop = 'ScrollTop',
  UpdateAppLoading = 'UpdateAppLoading',
  CloseAllModals = 'CloseAllModals',
  RegisterModal = 'RegisterModal',
  LoginModal = 'LoginModal',
  SwUpdated = 'SwUpdated',
  OnlineStatus = 'OnlineStatus',
  Logout = 'Logout'
}

interface AppEventSignatures {
  [AppEvents.Modal]: (message: string, title?: string) => void;
  [AppEvents.ScrollTop]: (smooth?: boolean) => void;
  [AppEvents.UpdateAppLoading]: (bool: boolean, message?: string) => void;
  [AppEvents.CloseAllModals]: () => void;
  [AppEvents.RegisterModal]: () => void;
  [AppEvents.LoginModal]: () => void;
  [AppEvents.SwUpdated]: () => void;
  [AppEvents.OnlineStatus]: (isOnline: boolean) => void;
  [AppEvents.Logout]: () => void;
}

export const appEmitter = new EventEmitter() as TypedEmitter<AppEventSignatures>;
