import {BaseComponent} from "../../shared/componets/base.component.js";

export class CartComponent extends BaseComponent {

    constructor({element}) {
        super({element});
        this._phones = {};
        this._render();
        this._element.addEventListener('click', (e) => {
            const button = e.target.closest('.remove')
            if (!button) {
                return;
            }
            const {phoneId} = button.dataset;
            this._phones[phoneId] -= 1;
            if (this._phones[phoneId] === 0) {
                delete this._phones[phoneId]
            }
            this._render();
        })
    }

    add(phoneId) {
        if (!this._phones[phoneId]) {
            this._phones[phoneId] = 0;
        }
        this._phones[phoneId] += 1;
        this._render();
    }


    _render() {
        this._element.innerHTML = `
               <p>Shopping Cart</p>
                <ul>
       ${Object.entries(this._phones).map(([phoneId, count]) => {
            return `<li>${phoneId} - ${count}</li>
         <button class="remove" data-phone-id=${phoneId}>x</button>
        `
        }).join('')}
                </ul>
        `
    }

}

