import {PhonesCatalogComponent} from './phones-catalog/phones-catalog.component.js';
import {PhoneDetailsComponent} from './phone-details/phone-details.component.js';
import {CartComponent} from './cart/cart.component.js';
import {PhonesService} from './phones.service.js'

export class PhonesComponent {
    constructor({element}) {
        this._element = element;
        this._render();
        this._initCatalog();
        this._initDetails();
        this._initCart();
    }

    _initCatalog() {
        this._catalog = new PhonesCatalogComponent({
            element: this._element.querySelector('.phones-catalog'),
            phones: PhonesService.getAll()
        });
        this._catalog.onEvent('phone-select', ({detail: phoneId}) => {
            this._phoneId = phoneId;
            const phonesDetails = PhonesService.getOneById(phoneId);
            this._catalog.hide();
            this._details.show(phonesDetails);
        });
        this._catalog.onEvent('add-to-cart', ({detail: phoneId}) => {
            this._cart.add(phoneId);
        });

    }

    _initDetails() {
        this._details = new PhoneDetailsComponent({
            element: this._element.querySelector('.phone-details'),
        });

        this._details.onEvent('back',()=>{
            this._catalog.show();
            this._details.hide();
        })
        this._details.onEvent('add-to-cart',({detail: phoneId})=>{
            console.log(this)
            this._cart.add(this._phoneId);
        })
    }

    _initCart() {
        this._cart = new CartComponent({
            element: this._element.querySelector('.cart'),
        })
    }

    _render() {
        this._element.innerHTML = `
            <div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
            <section>
                <p>
                    Search:
                    <input>
                </p>

                <p>
                    Sort by:
                    <select>
                        <option value="name">Alphabetical</option>
                        <option value="age">Newest</option>
                    </select>
                </p>
            </section >

            <section class='cart'>
            
            </section>
        </div>

        <!--Main content-->
        <div class="col-md-10">
            <div class="phones-catalog"></div>
            <div class="phone-details"></div>
        </div>
    </div>`
    }

}
