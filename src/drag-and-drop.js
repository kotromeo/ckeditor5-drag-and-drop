import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class DragAndDrop extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'DragAndDrop';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		console.log('DragAndDrop init');
	}
}
