import {BaseComponent} from "../../shared/componets/base.component.js";

export class ShoppingCartComponent extends BaseComponent{
    constructor({element, addToBasket, phoneid}) {
        super({element});
        this._addToBasket = addToBasket;
        this._phone = phoneid;
        this._render();
    }

    _render() {                             // TODO its a map
        this._element.innerHTML = `
            <p>Shopping Cart</p>
                <ul class="inCart">
                    <li>Phone 1</li>   
                    <li>Phone 2</li>
                    <li>Phone 3</li>
                </ul>
        `;
    }
}
