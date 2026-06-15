import { createContext } from "react";
import type { AuthContextType } from "./type";

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => false,
  logout: () => {},
});