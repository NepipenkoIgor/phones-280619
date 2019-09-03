import {BaseComponent} from "../../shared/componets/base.component.js";

export class PhonesCatalogComponent  extends BaseComponent {
    constructor({element, phones, onPhoneSelect, onAdd, onRemove}) {
        super({element});
        this._phones = phones;
        this._onPhoneSelect = onPhoneSelect;
        this._onAdd = onAdd;
        this._onRemove = onRemove;
        this._render();
        this._element.addEventListener('click', (e) => {
            let phoneEl = e.target.closest('.phone');
            if (e.target.classList.contains('phone-add')) {
                this._onAdd(phoneEl.dataset.phoneId);
                return;
            }
            if (e.target.classList.contains('phone-remove')) {
                this._onRemove(phoneEl.dataset.phoneId);
                return;
            }
            // debugger;
            if (!phoneEl) {
                return;
            }
            this._onPhoneSelect(phoneEl.dataset.phoneId);
        });
    }

    _render() {
        this._element.innerHTML = `
                    <ul class="phones">
                 ${this._phones.map((phone) => `
               <li class="thumbnail phone" data-phone-id=${phone.id}>
                    <a href="#!/phones/${phone.id}" class="thumb">
                        <img alt="${phone.name}" src="${phone.imageUrl}">
                    </a>

                    <div class="phones__btn-buy-wrapper">
                        <a class="btn btn-success phone-add">
                            Add
                        </a>  
                
                    </div>  
                    <div class="phones__btn-buy-wrapper">
                        <a class="btn btn-success phone-remove">
                            Remove
                        </a>  
                
                    </div>

                    <a href="#!/phones/${phone.id}">${phone.name}</a>
                    <p>${phone.snippet}</p>
                </li>`).join('')}   
            </ul>
        `
    }

}
