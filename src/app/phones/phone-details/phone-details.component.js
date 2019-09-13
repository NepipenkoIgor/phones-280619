import {BaseComponent} from "../../shared/componets/base.component.js";
import template from './phone-detail.component.hbs'

export class PhoneDetailsComponent extends BaseComponent {

    constructor({element, cb}) {
        super({element});
        this.on('click', '.thumb', (e) => {
            this._currentImg.src = e.delegateTarget.src;
        });
        this.on('click', '.add', (e) => {
            this.emitEvent('add-to-cart', this._phone.id)
        });
        this.on('click', '.back', (e) => {
            this.emitEvent('back')
        });
    }

    show(phoneDetails) {
        this._phone = phoneDetails;
        this._render();
        this._currentImg = this._element.querySelector('.phone');
        [this._currentImg.src] = this._phone.images;
        super.show();
    }

    _render() {
        this._element.innerHTML = template({phone: this._phone})
    }

}
