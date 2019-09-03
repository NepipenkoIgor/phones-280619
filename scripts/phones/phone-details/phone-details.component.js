import {BaseComponent} from "../../shared/componets/base.component.js";


export class PhoneDetailsComponent extends BaseComponent{
    constructor({element, onBack, onAdd}) {
        super({element});
        this._onBack = onBack;
        this._onAdd = onAdd;
    }

    show(phone) {
        this._phone = phone;
        this._render();
        this._element.querySelector('.btn-back').addEventListener('click', this._onBack);
        this._element.querySelector('.phone-add').addEventListener('click', (e) =>{
            this._onAdd(phone.id);
        });
        super.show();
    }

    _render() {
        this._element.innerHTML = `
          <div>

    <img class="phone" src="img/phones/${this._phone.id}.0.jpg">

    <button class="btn-back">Back</button>
    <button class="phone-add">Add to basket</button>


    <h1>${this._phone.name}</h1>

    <p>${this._phone.snippet}</p>

    <ul class="phone-thumbs">
      <li>
        <img src="img/phones/${this._phone.id}.0.jpg">
      </li>
      <li>
        <img src="img/phones/${this._phone.id}.1.jpg">
      </li>
      <li>
        <img src="img/phones/${this._phone.id}.2.jpg">
      </li>
      <li>
        <img src="img/phones/${this._phone.id}.3.jpg">
      </li>
      <li>
        <img src="img/phones/${this._phone.id}.4.jpg">
      </li>
      <li>
        <img src="img/phones/${this._phone.id}.5.jpg">
      </li>
    </ul>
  </div>
        `
    }

}
