export const ACCESS_TOKEN_KEY = 'auth:access-token' as const;
export const USER_INFO_KEY = 'auth:user-info' as const;

export function clearAllStorage(): void {
  clearAccessToken();
  clearUser();
}

////////////////////////////////////
//            TOKEN               //
///////////////////////////////////
export function getAccessToken(): string {
  return localStorage.getItem(ACCESS_TOKEN_KEY) ?? '';
}

export function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function isLoggedIn(): boolean {
  const accessToken = getAccessToken();
  return Boolean(accessToken);
}

export function storeToken(accessToken: string): void {
  const currentAccessToken = getAccessToken();

  if (currentAccessToken) {
    clearAccessToken();
  }

  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

////////////////////////////////////
//            USER               //
///////////////////////////////////

type UserInfo = Record<string, string>;

export function storeUser(userInfo: UserInfo): void {
  const currentAccessToken = getAccessToken();

  if (currentAccessToken) {
    clearAccessToken();
  }

  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
}

export function getUser(): UserInfo | null {
  const userInfo = localStorage.getItem(USER_INFO_KEY);

  if (!userInfo) {
    return null;
  }

  return JSON.parse(userInfo);
}

export function clearUser() {
  localStorage.removeItem(USER_INFO_KEY);
}

// type UserPayloadToken = {
//   roles: string[];
//   user_id: number;
// };
// export function getUserInfo(): null | {
//   userID: UserPayloadToken['user_id'];
//   userName: string;
//   roles: UserPayloadToken['roles'];
// } {
//   const accessToken = getAccessToken();
//   let decoded: (JwtPayload & UserPayloadToken) | null = null;

//   try {
//     decoded = jwtDecode(accessToken);
//   } catch (err) {
//     console.error(err);
//   }

//   if (!accessToken || !decoded) {
//     return null;
//   }

//   return {
//     userID: decoded.user_id ?? '',
//     userName: decoded.aud?.toString() ?? '',
//     roles: decoded.roles ?? [],
//   };
// }
