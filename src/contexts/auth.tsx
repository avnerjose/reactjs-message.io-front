import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

type AuthResponse = {
  token: string;
  user: User;
};

type AuthContextProps = {
  user: User | null;
  signInURL: string;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const signInURL = `https://github.com/login/oauth/authorize?scope=user&client_id=86e0518b435f45700e55`;
  const [user, setUser] = useState<User | null>(null);

  async function signIn(code: string) {
    const { data } = await api.post<AuthResponse>("/authenticate", { code });

    const { token, user: apiUser } = data;

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    localStorage.setItem("@nlwheat:userToken", token);
    setUser(apiUser);
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("@nlwheat:userToken");
  }

  useEffect(() => {
    const token = localStorage.getItem("@nlwheat:userToken");

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get<User>("user/profile").then(({ data }) => setUser(data));
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");

    if (hasGithubCode) {
      const [currentUrl, code] = url.split("?code=");

      signIn(code);

      window.history.pushState({}, "", currentUrl);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInURL,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
