import api from "./api";

export default class Service {

    static service = '';

    static list(params = {}) {
        return api.get(`${this.service}`, { params });
    }

    static get(id) {
        return api.get(`${this.service}/${id}`);
    }

    static create(data) {
        return api.post( `${this.service}`, data);
    }

    static update(data) {
        return api.put(`${this.service}/${data.id}`, data);
    }

    static save(data) {
        return data.id ? this.update(data) : this.create(data);
    }

}
