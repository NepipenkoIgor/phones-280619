import {BaseComponent} from "../../shared/componets/base.component.js";
import template from './filter.component.hbs';
export class FilterComponent extends BaseComponent {
    constructor({element}) {
        super({element});
        this._render();
        this.on('input', '.search', ({delegateTarget: {value}}) => {
            this.emitEvent('search', value)
        });
        this.on('change', '.sort', ({delegateTarget: {value}}) => {
            this.emitEvent('change-order', value)
        });
    }

    _render() {
        this._element.innerHTML = template()
    }
}
