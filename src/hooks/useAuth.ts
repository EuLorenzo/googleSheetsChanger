import { AuthContext, type AuthContextProps } from "@/context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const ctx = useContext<AuthContextProps>(AuthContext);
  return ctx;
};

export default useAuth;
