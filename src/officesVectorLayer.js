import { Cluster, Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Circle, Fill, Stroke, Style, Text } from 'ol/style';

import { offices } from './assets/offices.js';
import { colors } from './assets/colors.js';

let fromLatLon2LonLat = (latLon) => {
  return [latLon[1], latLon[0]];
}

let officesFeatures = offices.map((e) => { 
  return new Feature({
    geometry: new Point(fromLonLat(fromLatLon2LonLat(e.latLon))),
    id: e.id,
    city: e.city,
    name: e.city,
    country: e.country,
    description: e.description,
  });
});

let officesVectorSource = new VectorSource({
  features: officesFeatures,
})

let officesCluster = new Cluster({
  distance: 50,
  source: officesVectorSource,
});

let markerStyle = (size) => {
  return new Style({
    image: new Circle({
        radius: 10,
        fill: new Fill({
          color: colors.epam.blue,
        }),
        stroke: new Stroke({
          color: colors.epam.grey,
        }),
    }),
    text: new Text({
      text: size > 1 ? size.toString() : '',
        fill: new Fill({
          color: '#fff',
        }),
    })
  })
};

let styleCache = {};
const officesVectorLayer = new VectorLayer({
  source: officesCluster,
  style: (feature) => {
    let size = feature.get('features').length;
    let style = styleCache[size];
    if (!style) {
      style = markerStyle(size);
      styleCache[size] = style;
    }
    return style;
  }
});
officesVectorLayer.set('name', 'offices');

export { officesVectorLayer };
