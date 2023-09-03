<!-- Map.svelte -->

<script>
    import { onMount } from 'svelte';
    import Map from 'ol/Map';
    import View from 'ol/View';
    import TileLayer from 'ol/layer/Tile';
    import OSM from 'ol/source/OSM';
    import GeoJSON from 'ol/format/GeoJSON';
    import VectorLayer from 'ol/layer/Vector';
    import VectorSource from 'ol/source/Vector';
    import { Style, Fill, Stroke } from 'ol/style';
  
    let map;
  
    function initializeMap() {
      
      map = new Map({
        target: 'map-container',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0], 
          zoom: 2, 
        }),
      });
  
      fetch('../../../static/countries.geojson')
        .then(response => response.json())
        .then(geojson => {
          const vectorSource = new VectorSource({
            features: new GeoJSON().readFeatures(geojson),
          });
  
          // Change the GeoJSON layer color and opacity
          const vectorLayer = new VectorLayer({
            source: vectorSource,
            style: new Style({
              fill: new Fill({
                color: 'rgba(0, 106, 78, 0.75)', 
              }),
              stroke: new Stroke({
                color: 'rgba(0, 0, 0, 0.2)',
                width: 2,
              }),
            }),
          });
  
          map.addLayer(vectorLayer);
        });
    }
  
    // Initialize the map when the component is mounted
    onMount(initializeMap);
  </script>
  
<div class="flex-grow h-screen w-100" id="map-container"></div>
  