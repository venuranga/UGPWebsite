import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  //default axios
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = token;
  }, [token]);

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setUser(parseData.user);
      setToken(parseData.token);
    }
    //eslint-disable-next-line
  }, []);

  const auth = { user, token };

  return (
    <AuthContext.Provider value={{ auth, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, useAuth, AuthProvider };
