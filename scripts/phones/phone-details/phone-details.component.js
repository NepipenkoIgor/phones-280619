import {BaseComponent} from "../../shared/componets/base.component.js";

export class PhoneDetailsComponent extends BaseComponent {

    constructor({element}) {
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
        const {name, description, images} = this._phone;
        this._element.innerHTML = `
          <div>

    <img class="phone">

    <button class="back">Back</button>
    <button class="add" >Add to basket</button>


    <h1>${name}</h1>

    <p>${description}</p>

    <ul class="phone-thumbs">
    ${images.map((src) => `
         <li>
        <img src=${src} class="thumb">
      </li>
    `).join('')}
    </ul>
  </div>
        `
    }

}
