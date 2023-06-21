export interface ReactLeafletDistortableProps {
	url: string,
	corners: any,
	opacity: number,
	editMode: string, // 'rotate', 'distort', 'translate' or 'scale'
	onUpdate: (corners: string) => void;
}
