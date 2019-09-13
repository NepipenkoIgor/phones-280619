const BASE_URL = 'http://localhost:3000';

export const PhonesService = new class {
    constructor() {
        console.log(1);
    }

    getAll({text, orderBy} = {}, cb) {
        return this._sendRequest(`/phones/phones.json`)
            .then((phones) => {
                const searchedPhones = this._filter(phones, text);
                return this._sort(searchedPhones, orderBy);
            });
    }

    getOneById(phoneId) {
        return this._sendRequest(`/phones/${phoneId}.json`)
    }

    _sendRequest(url, {method = 'GET'} = {}) {
        return fetch(`${BASE_URL}${url}`, {
            method,
            headers: [['JWT', 'asd1241easdasd124124asd12412412asd12412']]
        }).then((res) => res.json())
    }

    _filter(phones, text) {
        if (!text) {
            return [...phones]
        }
        return [...phones].filter((phone) => phone.name.toLowerCase().includes(text.toLowerCase()))
    }

    _sort(phones, orderBy) {
        const p = [...phones];
        if (!orderBy) {
            return p
        }
        p.sort((p1, p2) => {
            if (p1[orderBy] > p2[orderBy]) {
                return 1;
            }
            if (p1[orderBy] < p2[orderBy]) {
                return -1
            }
            return 0;
        })

        return p
    }
};
