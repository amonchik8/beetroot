'use strict';

  const mymap = L.map('mapid').setView([50.4547, 30.5238], 11);

  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
    {
      maxZoom: 20,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(mymap);

  const myIcon = L.icon({
    iconUrl: 'marker.png',
    iconSize: [60, 60],
    iconAnchor: [43, 54],
    popupAnchor: [-3, -76],
  });

  var marker = L.marker([50.4547, 30.5238], { icon: myIcon }).addTo(mymap);

