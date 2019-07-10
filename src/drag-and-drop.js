import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class DragAndDrop extends Plugin {
	static get pluginName() {
		return 'DragAndDrop';
	}
	constructor( editor ) {
        super(arguments);
        this.editor = editor;
    }
	init() {
		let me = this,
			editor = me.editor;
		let selector = editor.config.get('dragId'),
			elements = document.querySelectorAll(selector);
		elements.forEach((element) => {
		    element.onclick = (evt) => {
		    	let target = evt.target;
				evt.preventDefault();
				editor.model.change( writer => {
					const insertPosition = editor.model.document.selection.getFirstPosition();
					writer.insertText(target.textContent, insertPosition );
				});
		    };
		    element.ondragend = (evt) => {
		    	let target = evt.target;
				evt.preventDefault();
				editor.model.change( writer => {
					const insertPosition = editor.model.document.selection.getFirstPosition();
					console.log('insertPosition ', insertPosition)
					writer.insertText(target.textContent, insertPosition );
				});
		    };
		});
	}
}
