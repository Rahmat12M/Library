import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

// Hardcoded demo credentials (kein echtes Backend nötig für den Anfang)
const DEMO_USER = "admin";
const DEMO_PASS = "1234";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage<boolean>("auth", false);

  function login(username: string, password: string): boolean {
    if (username === DEMO_USER && password === DEMO_PASS) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}