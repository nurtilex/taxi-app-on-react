import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '@store/slices/auth';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticatedSelector);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
