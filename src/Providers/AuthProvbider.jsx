import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const Auth = getAuth(app);

const AuthProvbider = ({ children }) => {
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvbider;
