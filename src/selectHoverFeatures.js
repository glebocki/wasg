import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Overlay from 'ol/Overlay';

import { colors } from './assets/colors.js'

var highlightStyle = new Style({
  image: new CircleStyle({
    radius: 10,
    fill: new Fill({
      color: colors.epam.raspberry,
    }),
    stroke: new Stroke({
      color: colors.epam.grey,
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
    // Skip for Clusters
    let features = map.getFeaturesAtPixel(e.pixel);
    if (features.length > 0) {
      // Cluster is a feature containing other features
      if (features[0].values_.features.length > 1) {
        return false;
      }
    }

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
