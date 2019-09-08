import {BaseComponent} from "../../shared/componets/base.component.js";

export class PhoneDetailsComponent extends BaseComponent {
    constructor({element, backButtonSelect, addToBasket}) {
        super({element});
        this._backButtonSelect = backButtonSelect;
        this._addToBasket = addToBasket;
    }

    show(phonesDetails) {
        this._phone = phonesDetails;
        this.adaptElementImageUrl = this._phone.imageUrl.slice(0, -5);
        this._render();
        super.show();
        this._element.querySelector('.back').addEventListener('click', (e) => {
            return this._backButtonSelect();
        });
        this._element.addEventListener('click' , (e) => {
            let currentImg = e.target.closest('.phone-thumbs li img');
            if (!currentImg) {
                return;
            }
            this._element.querySelector('.phone').src = currentImg.src;
            return;
        });
        this._element.querySelector('.basket').addEventListener('click', (e) => {
            // let phone
            this._addToBasket(this._phone.id);
            return;
        })
    }


    _render() {                                // render only 3 img because not all element have 6
        this._element.innerHTML = `
  <div>
    <img class="phone" src="${this._phone.imageUrl}">
    <button class="back">Back</button>
    <button class="basket">Add to basket</button>
    <h1>${this._phone.name}</h1>
    <p>${this._phone.snippet}</p>
    <ul class="phone-thumbs">
      <li>
        <img src="${this.adaptElementImageUrl}0.jpg">
      </li>
      <li>
        <img src="${this.adaptElementImageUrl}1.jpg"> 
      </li>
      <li>
        <img src="${this.adaptElementImageUrl}2.jpg">
      </li>
    </ul>
   <ul class="specs">
      <li>
        <span>Storage and Memory</span>
        <dl>
          <dt>RAM</dt>
          <dd>1000MB</dd>
          <dt>Internal Storage</dt>
          <dd>32000MB</dd>
        </dl>
      </li>
      <li>
        <span>Connectivity</span>
        <dl>
          <dt>Network Support</dt>
          <dd></dd>
          <dt>WiFi</dt>
          <dd>802.11 b/g/n</dd>
          <dt>Bluetooth</dt>
          <dd>Bluetooth 2.1</dd>
          <dt>Infrared</dt>
          <dd>✘</dd>
          <dt>GPS</dt>
          <dd>✓</dd>
        </dl>
      </li>
      <li>
        <span>Size and Weight</span>
        <dl>
          <dt>Dimensions</dt>
          <dd>249.1 mm (w)</dd>
          <dd>167.8 mm (h)</dd>
          <dd>12.9 mm (d)</dd>
          <dt>Weight</dt>
          <dd>708.0 grams</dd>
        </dl>
      </li>
      <li>
        <span>Display</span>
        <dl>
          <dt>Screen size</dt>
          <dd>10.1 inches</dd>
          <dt>Screen resolution</dt>
          <dd>WXGA (1200 x 800)</dd>
          <dt>Touch screen</dt>
          <dd>✓</dd>
        </dl>
      </li>
      <li>
        <span>Hardware</span>
        <dl>
          <dt>CPU</dt>
          <dd>1 GHz Dual Core Tegra 2</dd>
          <dt>USB</dt>
          <dd>USB 2.0</dd>
          <dt>Audio / headphone jack</dt>
          <dd>3.5mm</dd>
          <dt>FM Radio</dt>
          <dd>✘</dd>
          <dt>Accelerometer</dt>
          <dd>✓</dd>
        </dl>
      </li>
      <li>
        <span>Additional Features</span>
        <dd>Sensors: proximity, ambient light, barometer, gyroscope</dd>
      </li>
    </ul> 
  </div>
        `
    }

}

