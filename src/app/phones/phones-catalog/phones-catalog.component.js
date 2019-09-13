import {BaseComponent} from "../../shared/componets/base.component.js";
import {PhonesService} from "../phones.service.js";
import template from './phones-catalog.component.hbs';
import './phones-catalog.component.css';
export const phones = PhonesService.getAll();

export class PhonesCatalogComponent extends BaseComponent {
    constructor({element}) {
        super({element});
        this._phones = [];
        this.on('click', '.phone', (e) => {
            this.emitEvent('phone-select', e.delegateTarget.dataset.phoneId)
        });
        this.on('click', '.add-to-cart', (e) => {
            this.emitEvent('add-to-cart', e.delegateTarget.dataset.phoneId)
        })
    }

    show(phones) {
        this._phones = phones;
        this._render();
        super.show();
    }

    _render() {
        this._element.innerHTML = template({phones: this._phones})
    }

}
