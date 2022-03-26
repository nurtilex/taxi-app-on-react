import { useSelector } from 'react-redux';
import { authSelectors } from '@store/slices/auth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticatedSelector);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
