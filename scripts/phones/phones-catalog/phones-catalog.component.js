import {BaseComponent} from "../../shared/componets/base.component.js";
import {PhonesService} from "../phones.service.js";

export const phones = PhonesService.getAll();

export class PhonesCatalogComponent extends BaseComponent {
    constructor({element, phones}) {
        super({element});
        this._phones = phones;
        this._render();
        this.on('click', '.phone', (e) => {
            this.emitEvent('phone-select', e.delegateTarget.dataset.phoneId)
        });
        this.on('click', '.add-to-cart', (e) => {
            this.emitEvent('add-to-cart', e.delegateTarget.dataset.phoneId)
        })
    }

    _render() {
        this._element.innerHTML = `
                    <ul class="phones">
                 ${this._phones.map((phone) => `
               <li class="thumbnail">
                    <a href="#!/phones/${phone.id}" class="thumb">
                        <img class="phone" alt="${phone.name}" data-phone-id=${phone.id} src="${phone.imageUrl}">
                    </a>

                    <div class="phones__btn-buy-wrapper add-to-cart" data-phone-id=${phone.id}>
                        <a class="btn btn-success">
                            Add
                        </a>
                    </div>

                    <a href="#!/phones/${phone.id}">${phone.name}</a>
                    <p>${phone.snippet}</p>
                </li>`).join('')}   
            </ul>
        `
    }

}
