import VectorSource from 'ol/source/Vector';
import {Vector as VectorLayer} from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {fromLonLat} from 'ol/proj';
import {Circle, Fill, Stroke, Style} from 'ol/style';

import { offices } from './assets/offices.js';
import { epam } from './assets/colors.js';

let citiesFeatures = offices.map((e) => { return new Feature({
    geometry: new Point(fromLonLat(e.lonLat)),
  });
});

let vectorSource = new VectorSource({
  features: citiesFeatures,
})

export const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: () => {
    return new Style({
      image: new Circle({
          radius: 5,
          fill: new Fill({
            color: epam.blue,
          }),
          stroke: new Stroke({
              color: epam.grey,
          }),
      }),
      // text: new ol.style.Text({
      //   text: size.toString(),
      //   font: '14px arial',
      //   textAlign: 'center',
      //   offsetY: -15,
      //   fill: new ol.style.Fill({
      //       color: '#000',
      //   }),
      // }),
    })
  }
})