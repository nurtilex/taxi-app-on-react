import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { drawRoute } from '@helper';
import { cleanRoute } from '@helper';

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
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    console.log(map?.current?.isStyleLoaded());
  });
  useEffect(() => {
    map.current = new mapboxgl.Map({
      accessToken: mapboxAccessToken,
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [30.19, 59.57],
      zoom: 11,
    });
  }, []);

  useEffect(() => {
    if (isAuthenticated && !payment) {
      navigate('/modal', { replace: true });
    }
  }, [isAuthenticated, payment, navigate]);

  useEffect(() => {
    if (Array.isArray(coordinates) && coordinates.length > 0) {
      if (map.current.isStyleLoaded()) {
        drawRoute(map.current, coordinates);
      }
    }
  }, [coordinates]);

  return (
    <div className={css.Map}>
      <Header />
      <main className={css.main} id="map" ref={mapContainer}></main>
      <Order />
    </div>
  );
};

export default Map;
