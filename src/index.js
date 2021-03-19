import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { offices }  from './offices.js'

const view = new View({
  center: [0, 0],
  zoom: 0,
});

const map = new Map({
  target: 'openlayers-map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: view
});

console.log(offices);