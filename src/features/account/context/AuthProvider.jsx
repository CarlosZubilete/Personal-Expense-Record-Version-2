import AuthContext from "./AuthContext";
import { useAuthLogic } from "../../account/hooks/useAuthLogic";

const AuthProvider = ({ children }) => {
  const { username, handleSubmitLogin, error, handleLoginOut } = useAuthLogic();

  return (
    <AuthContext.Provider
      value={{ username, handleSubmitLogin, error, handleLoginOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
