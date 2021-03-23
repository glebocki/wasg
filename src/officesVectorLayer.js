import VectorSource from 'ol/source/Vector';
import {Vector as VectorLayer} from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {fromLonLat} from 'ol/proj';
import {Circle, Fill, Stroke, Style} from 'ol/style';

import { offices } from './assets/offices.js';
import { colors } from './assets/colors.js';

let officesFeatures = offices.map((e) => { 
  return new Feature({
    geometry: new Point(fromLonLat(e.lonLat)),
    id: e.id,
    city: e.city,
    name: e.city,
    address: e.address,
    country: e.country,
  });
});

let officesVectorSource = new VectorSource({
  features: officesFeatures,
})

const officesVectorLayer = new VectorLayer({
  source: officesVectorSource,
  style: () => {
    return new Style({
      image: new Circle({
          radius: 5,
          fill: new Fill({
            color: colors.epam.blue,
          }),
          stroke: new Stroke({
              color: colors.epam.grey,
          }),
      })
    })
  }
});
officesVectorLayer.set('name', 'offices');

export { officesVectorLayer };
