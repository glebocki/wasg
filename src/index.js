import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {Tile as TileLayer} from 'ol/layer';
import {OSM} from 'ol/source';

import { geolocation } from './geolocation.js';
import { controls } from './controls.js';
import { vectorLayer } from './locations.js'

const view = new View({
  center: [0, 0],
  zoom: 0,
});

const map = new Map({
  target: 'openlayers-map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    vectorLayer,
  ],
  controls: controls,
  view: view
});

geolocation(map);
