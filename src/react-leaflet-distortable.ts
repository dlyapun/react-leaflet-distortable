import "leaflet-toolbar";
import "leaflet-distortableimage";
import "leaflet/dist/leaflet.css";
import "leaflet-toolbar/dist/leaflet.toolbar.css";
import "leaflet-distortableimage/dist/leaflet.distortableimage.css";
import 'leaflet-kml';
import * as L from 'leaflet';
import { LayerProps, LeafletContextInterface, updateMediaOverlay, createLayerComponent } from '@react-leaflet/core';

interface ReactLeafletDistortableProps {
  url: string,
  chilnders?: any,
  mode: string,
  selected: boolean,
  corners: [],
  actions: [],
  suppressToolbar: boolean,
  zIndex: number
  onUpdate: (props: any) => void,
}

const updateOnCanvas = (map: L.Map) => {
  if (map.options.preferCanvas) {
    // @ts-ignore  
    map._renderer._update();
  }   
}

const createLeafletElement = (props: ReactLeafletDistortableProps, context: LeafletContextInterface) => {  
  // @ts-ignore
  const instance = new L.distortableImageOverlay(props.url, {
    mode: props.mode,
    actions: props.actions,
    selected: props.selected,
    suppressToolbar: props.suppressToolbar,
    zIndex: props.zIndex,
    corners: props.corners,
  });

  instance.on("update", () => {
    return props.onUpdate(instance._corners);
  });

  if (context.map.options.preferCanvas) {
    setTimeout((map: L.Map) => {        
        // Handling react-leaflet bug of canvas renderer not updating
        // @ts-ignore
        map._renderer._update();
    }, 0, context.map) 
  }

  return { instance, context }; 
}

const updateLeafletElement = (instance: L.Layer, props: ReactLeafletDistortableProps, prevProps: ReactLeafletDistortableProps) => {
  // @ts-ignore
  updateMediaOverlay(instance, props, prevProps)
}

export default createLayerComponent<L.Layer, LayerProps & ReactLeafletDistortableProps>(createLeafletElement, updateLeafletElement);