import { Cluster, Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Circle, Fill, Stroke, Style, Text } from 'ol/style';

import { colors } from './assets/colors.js';

import { americas } from './assets/locations/americas';
import { europe } from './assets/locations/europe';
import { cis } from './assets/locations/cis';
import { asia } from './assets/locations/asia';

const officesRegions = [americas, europe, asia, cis];

const fromLatLon2LonLat = (latLon) => {
  return [latLon[1], latLon[0]];
}

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, []);
};

let officesByCountry = groupBy([...americas, ...europe, ...asia, ...cis], 'country');

console.log(officesByCountry);

let layers = [];

for (let country in officesByCountry) {
  let countryOffices = officesByCountry[country];
  let officesFeatures = countryOffices.map((e) => { 
    return new Feature({
      geometry: new Point(fromLonLat(fromLatLon2LonLat(e.latLon))),
      name: e.city,
      country: e.country,
      description: e.description,
    });
  });
  
  let officesVectorSource = new VectorSource({
    features: officesFeatures,
  })
  
  let officesCluster = new Cluster({
    distance: 450,
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
  const regionOfficesVectorLayer = new VectorLayer({
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
  regionOfficesVectorLayer.set('name', 'offices');
  layers.push(regionOfficesVectorLayer);
}

export { layers as officesVectorLayers };
