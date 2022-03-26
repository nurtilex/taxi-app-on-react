import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router';
import { useDispatch } from 'react-redux';
import '@assets/commonStyles/App.css';

import Map from '@pages/Map';
import Login from '@pages/Login';
import Profile from '@pages/Profile';
import Registration from '@pages/Registration';
import Modal from '@components/Modal';

import PrivateRoute from '@hoc/PrivateRoute';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, [dispatch]);

  return (
    <div className="App" data-testid="app">
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route
          path="/modal"
          element={<PrivateRoute element={<Modal />} />}
          exact
        />
        <Route path="/registration" element={<Registration />} exact />
        <Route path="/map" element={<PrivateRoute element={<Map />} />} exact />
        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile />} />}
          exact
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
