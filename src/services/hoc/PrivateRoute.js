import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from '@store/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
