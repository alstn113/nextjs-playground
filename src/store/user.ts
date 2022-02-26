import { atom } from 'recoil';

interface userStateType {
  isLoggedIn: boolean;
  access_token: string;
}

export const userState = atom<userStateType>({
  key: 'auth',
  default: {
    isLoggedIn: false,
    access_token: '',
  },
});
