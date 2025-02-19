import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface IAuth {
  children?: ReactNode;
}
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: FC<IAuth> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const login = () => {
    localStorage.setItem('token', 'dummy-token');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
