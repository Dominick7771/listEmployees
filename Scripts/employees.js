class Employees {
    constructor() {
        this.data = {}
    }

    add(employees) {
        if (!employees.id) {
            throw  new Error('Property email must be in order');
        }
        if (this.data[employees.id]) {
            return false;
        }
        this.data[employees.id] = employees;
        return true;
    }

    getAll() {
        return Object.values(this.data);
    }

    get(id) {
        return this.data[id];
    }

    remove(id) {
        if (!this.data[id]) {
            return false;
        }
        delete this.data[id];
        return true;
    }
}