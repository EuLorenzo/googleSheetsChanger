import { AuthContext } from "@/context/AuthContext";
import { auth, provider } from "@/firebase/config";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>("");

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const accessToken =
        GoogleAuthProvider.credentialFromResult(result)?.accessToken;

      if (accessToken) {
        sessionStorage.setItem("accessToken", accessToken);
        setAccessToken(accessToken);
      }

      setUser(result.user);
    } catch (error) {
      console.log("Erro no login: ", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setAccessToken(null);
      sessionStorage.removeItem("accessToken");
    } catch (error) {
      console.log("Erro no logout: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        const storedToken = sessionStorage.getItem("accessToken");
        if (storedToken) {
          setAccessToken(storedToken);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
