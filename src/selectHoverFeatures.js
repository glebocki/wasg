import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Overlay from 'ol/Overlay';

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

var popupOverlay = new Overlay({
  element: element,
  positioning: 'bottom-center',
  stopEvent: false,
  // offset: [0, -50],
});

export function selectHoverFeatures(map) {
  map.addOverlay(popupOverlay);

  let selected = null;
  map.on('pointermove', function (e) {
    if (selected !== null) {
      selected.setStyle(undefined);
      selected = null;
    }

    let feature = map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
      if (layer.get('name') == 'offices') {
        selected = feature;
        feature.setStyle(highlightStyle);
        return feature;
      }
      return false;
    });

    if (feature) {
      let coordinates = feature.getGeometry().getCoordinates();
      popupOverlay.setPosition(coordinates);
      $(element).popover({
        placement: 'top',
        html: true,
        content: 'Name: ' + feature.get('name')
          + '<br>' + 'Country: ' + feature.get('country')
          + '<br>' + 'Address: ' + feature.get('address')
      });
      $(element).popover('show');
    } else {
      $(element).popover('dispose');
    }
  });
}