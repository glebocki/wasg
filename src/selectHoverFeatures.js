import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import Overlay from 'ol/Overlay';

import {toStringHDMS} from 'ol/coordinate';
import {toLonLat} from 'ol/proj';

import { epam } from './assets/colors.js'

var highlightStyle = new Style({
  image: new CircleStyle({
    radius: 5,
    fill: new Fill({
      color: epam.raspberry,
    }),
    stroke: new Stroke({
      color: epam.grey,
      width: 2,
    }),
  })
});

var element = document.getElementById('popup');

var popup = new Overlay({
  element: element,
  positioning: 'bottom-center',
  stopEvent: false,
  offset: [0, -50],
});

export const selectHoverFeatures = function selectHoverFeatures(map) {
  var selected = null;
  map.addOverlay(popup);

  map.on('pointermove', function (e) {
    if (selected !== null) {
      selected.setStyle(undefined);
      selected = null;
    }

    map.forEachFeatureAtPixel(e.pixel, function (f) {
      let properties = f.getProperties();
      if (properties.type == 'office') {
        selected = f;
        f.setStyle(highlightStyle);

        console.log('Office Info: ', properties);
      }
      return true;
    });    
  });
}