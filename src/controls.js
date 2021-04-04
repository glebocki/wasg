import {Attribution, defaults as defaultControls} from 'ol/control';

var attribution = new Attribution({
  collapsible: true,
});

export const controls = defaultControls({attribution:false}).extend([attribution]);