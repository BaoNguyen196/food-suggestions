import { defineStore } from 'pinia';
import type { UserInfo } from '#/types/user';
import * as AuthUtils from '#/utils/auth';

export const useAuthStore = defineStore('auth', {
  state: () => {
    const user = AuthUtils.getUser();
    const accessToken = AuthUtils.getAccessToken();
    return {
      isLoggedIn: user !== null && accessToken !== '',
      user,
      accessToken,
    };
  },
  actions: {
    login({ user, accessToken }: { user: UserInfo; accessToken: string }) {
      this.isLoggedIn = true;
      this.user = user;
      AuthUtils.storeUser(user);
      AuthUtils.storeToken(accessToken);
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
      AuthUtils.clearUser();
      AuthUtils.clearUser();
    },
  },
});
