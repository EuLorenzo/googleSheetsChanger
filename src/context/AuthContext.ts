import type { User } from "firebase/auth";
import { createContext } from "react";

export interface AuthContextProps {
  user: User | null;
  accessToken: string | null;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);
