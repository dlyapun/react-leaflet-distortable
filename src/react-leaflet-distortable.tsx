import ReactLeafletDistortable from './leaflet-distortable';

type Props = { 
	url: string,
	corners: any,
	opacity: number,
	editMode: string, // 'rotate', 'distort', 'translate' or 'scale'
	onUpdate: (corners: string) => void;
};

const ReactLeaflet: Props = ReactLeafletDistortable;

export default ReactLeaflet;
