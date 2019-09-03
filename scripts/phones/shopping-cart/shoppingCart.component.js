import {BaseComponent} from "../../shared/componets/base.component.js";

export class ShoppingCartComponent extends BaseComponent{
    constructor({element, phone}) {
        super({element});
        this._phone = phone;
        this._render();
    }

    _render() {
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
