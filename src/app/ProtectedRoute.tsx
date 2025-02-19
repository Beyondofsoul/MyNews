import { Navigate, useLocation } from 'react-router-dom';

import { ReactNode } from 'react';
import { useAuth } from './providers/AuthProvide';
interface IAuth {
  children?: ReactNode;
}
const ProtectedRoute: React.FC<IAuth> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
