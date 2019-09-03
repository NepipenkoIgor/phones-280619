import {BaseComponent} from "../../shared/componets/base.component.js";

export class PhoneDetailsComponent extends BaseComponent {

    show(phone) {
        this._phone = phone;
        this.adaptElementImageUrl = this._phone.imageUrl.slice(0, -5);
        this._render();
        super.show();
        this._element.querySelector('.back').addEventListener('click', function () {
            location.reload();
        });
    }


    _render() {                                // render only 3 img because not all element have 6
        this._element.innerHTML = `
          <div>

    <img class="phone" src="${this._phone.imageUrl}">

    <button class="back">Back</button>
    <button>Add to basket</button>


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
    
  </div>
        `
    }

}

// <li>
// <img src="${this.adaptElementImageUrl}3.jpg">
//     </li>
//     <li>
//     <img src="${this.adaptElementImageUrl}4.jpg">
//     </li>
//     <li>
//     <img src="${this.adaptElementImageUrl}5.jpg">
//     </li>
