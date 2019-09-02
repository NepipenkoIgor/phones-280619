import {BaseComponent} from "../../shared/componets/base.component.js";

// import {PhonesComponent} from "../phones.component.js";

export class PhoneDetailsComponent extends BaseComponent {
    // constructor(element) {
    //     super(element);
    //     this._element.querySelector('.back').addEventListener('click', this.hide);
    // }
    //
    // hide() {
    //     super.hide();
    // }

    show(phone) {
        this._phone = phone;
        this._render();
        super.show();
    }

    _render() {
        this._element.innerHTML = `
          <div>

    <img class="phone" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">

    <button class="back">Back</button>
    <button>Add to basket</button>


    <h1>Motorola XOOM™ with Wi-Fi</h1>

    <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>

    <ul class="phone-thumbs">
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
      </li>
    </ul>
  </div>
        `
    }

}
