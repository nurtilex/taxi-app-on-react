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
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        accessToken: mapboxAccessToken,
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [30.19, 59.57],
        zoom: 11,
      });
    }

    if (isAuthenticated && !payment) {
      navigate('/modal', { replace: true });
    }
    console.log(Array.isArray(coordinates) && coordinates.length > 0);
    if (Array.isArray(coordinates) && coordinates.length > 0) {
      map.current.on('styledata', () => {
        map.current.flyTo({
          center: coordinates[0],
          zoom: 15,
        });

        map.current.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates,
              },
            },
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#ffc617',
            'line-width': 8,
          },
        });
      });
    }

    return () => {
      map?.current && map?.current.remove();
    };
  }, [isAuthenticated, payment, coordinates, navigate]);
  return (
    <div className={css.Map}>
      <Header />
      <main className={css.main} id="map" ref={mapContainer}></main>
      <Order />
    </div>
  );
};

export default Map;
