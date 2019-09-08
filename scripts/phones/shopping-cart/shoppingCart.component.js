import {BaseComponent} from "../../shared/componets/base.component.js";

export class ShoppingCartComponent extends BaseComponent {
    constructor({element, addToBasket}) {
        super({element});
        this._addToBasket = addToBasket;
        this.basket = {};
        this._sum();
        this._render();
        this._element.addEventListener('click', (e) => {
            let removeButton = e.target.closest('.remove');
            if (!removeButton) {
                return;
            }
            const {phoneId} = removeButton.dataset;
            this.basket[phoneId] -= 1;
            if (this.basket[phoneId] === 0) {
                delete this.basket[phoneId];
            }
            this._render();
        });
    }

    add(phoneid) {                        // TODO wtf add?
        if (!this.basket[phoneid]) {
            this.basket[phoneid] = 1;
            this._render();
            return;
        }
        this.basket[phoneid] += 1;
        this._render();
    }

     _sum(obj) {
        let sum = 0;
        for (let el in obj) {
            if (obj.hasOwnProperty(el)) {
                sum += parseFloat(obj[el]);
            }
        }
        return sum;
    }

    _render() {
        this._element.innerHTML = `
            <p>Shopping Cart</p>
                <ul class="inCart">
                ${Object.entries(this.basket).map(([phoneid, count]) => `
                <li>${phoneid} : ${count}</li>
                <span class="badge badge-pill badge-danger cursor-pointer remove" data-phone-id=${phoneid}>remove</span>
                `).join('')}
                </ul>
             <span class="label label-success cursor-pointer">TOTAL: ${this._sum(this.basket)}</span>
             <span class="label label-danger cursor-pointer removeall">CLEAR BASKET</span>
        `;
    }
}
