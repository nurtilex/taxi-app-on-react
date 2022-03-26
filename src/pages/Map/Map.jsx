import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { drawRoute } from '@helper';

import { authSelectors } from '@store/slices/auth';
import { userSelectors } from '@store/slices/user';
import { layoutSelectors } from '@store/slices/layout';

import mapboxgl from 'mapbox-gl';
import { mapboxAccessToken } from '@src/env.js';

import Header from '@components/Header';
import Order from '@components/Order';
import css from './Map.module.scss';

const Map = () => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticatedSelector);
  const payment = useSelector(userSelectors.paymentSelector);
  const coordinates = useSelector(layoutSelectors.coordinatesSelector);
  const navigate = useNavigate();
  const mapRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      accessToken: mapboxAccessToken,
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [37.61, 55.75],
      zoom: 11,
    });
    if (isAuthenticated && !payment) {
      navigate('/modal', { replace: true });
    }
    if (Array.isArray(coordinates) && coordinates.length > 0) {
      map.on('styledata', () => {
        drawRoute(map, coordinates);
      });
    }
  }, [isAuthenticated, payment, coordinates, navigate]);
  return (
    <div className={css.Map}>
      <Header />
      <main className={css.main} id="map" ref={mapRef}></main>
      <Order />
    </div>
  );
};

export default Map;
