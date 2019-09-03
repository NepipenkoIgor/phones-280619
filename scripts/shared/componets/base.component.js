export class BaseComponent {
    constructor({element}) {
        this._element = element;
    }

    show(){
        this._element.hidden = false;
    }

    hide(){
        this._element.hidden = true;
    }
}
