import {BaseComponent} from "../../shared/componets/base.component.js";

export class FilterComponent extends BaseComponent{
    constructor ({element, search, change}) {
        super({element});
        this._search = search;
        this._change = change;
        this._render();
        this._element.querySelector('.search').addEventListener('input', (e) => {
            let searchEl = e.target.value;
            console.log(searchEl);
        });
        this._element.querySelector('.sort').addEventListener('change', (e) => {
            let changeEl = e.target.value;
            console.log(changeEl);
        });
    }
    _render () {
        this._element.innerHTML = `
                <p>
                    Search:
                    <input class="search">
                </p>

                <p>
                    Sort by:
                    <select class="sort">
                        <option value="name">Alphabetical</option>
                        <option value="age">Newest</option>
                    </select>
                </p>
        `;
    }
}