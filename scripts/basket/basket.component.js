export class BasketComponent {
    constructor({element}) {
        this._element = element;
        this._render();
        this._list = this._element.querySelector('.phones-list');
        this._phones = [];
    }

    _render() {
        this._element.innerHTML = `<p>Shopping Cart</p>
                <ul class="phones-list">
                </ul>`;
    }

    addPhone(phone) {
        this._phones.push(phone);
        this._list.insertAdjacentHTML('beforeend', `<li>${phone.name}</li>`);
    }

    removePhone(phone) {
        let liElements = this._list.getElementsByTagName('li');
        for (let elem of liElements){
            if (elem.innerText === phone.name) {
                elem.remove();
            }
        }
    }
}