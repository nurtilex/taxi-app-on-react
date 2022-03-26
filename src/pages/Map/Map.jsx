import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  isAuthenticatedSelector,
  paymentSelector,
  coordinatesSelector,
} from '@store/selectors';
import { mapboxAccessToken } from '@src/env.js';
import { drawRoute } from '@helper';
import css from './Map.module.scss';

import Header from '@components/Header';
import Order from '@components/Order';

const Map = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const payment = useSelector(paymentSelector);
  const coordinates = useSelector(coordinatesSelector);
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
