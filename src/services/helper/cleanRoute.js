const cleanRoute = (map, id = 'route') => {
  if (map.getLayer(id)) {
    map.removeLayer(id);
  }
  if (map.getSource(id)) {
    map.removeSource(id);
  }
  console.log('is cleaned')
};

export default cleanRoute