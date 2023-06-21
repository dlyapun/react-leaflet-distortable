import { createLayerComponent, updateMediaOverlay } from "@react-leaflet/core";
import "leaflet";
import L from "leaflet";
import "leaflet-toolbar";
import "leaflet-distortableimage";
import "leaflet-distortableimage/dist/leaflet.distortableimage";
import "leaflet-distortableimage/dist/vendor.js";
import "leaflet/dist/leaflet.css";
import "leaflet-toolbar/dist/leaflet.toolbar.css";
import "leaflet-distortableimage/dist/leaflet.distortableimage.css";

function createDistortableImageOverlay(props, context) {
  const img = new L.distortableImageOverlay(props.url, {
    mode: props.mode,
    actions: props.actions,
    selected: props.selected,
    suppressToolbar: props.suppressToolbar,
    zIndex: props.zIndex,
    corners: props.corners,
  });

  img.on("update", () => {
    return props.onUpdate(img._corners);
  });

  return {
    instance: img,
    context,
  };
}

function updateDistortableImageOverlay(overlay, props, prevProps) {
  updateMediaOverlay(overlay, props, prevProps);
  if (props.url !== prevProps.url) {
    overlay.setUrl(props.url);
  }
}

const ReactLeafletDistortable = createLayerComponent(createDistortableImageOverlay, updateDistortableImageOverlay);
export default ReactLeafletDistortable;
