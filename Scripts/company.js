class Company {
    constructor(employees) {
        this.employees = employees;
    }

    hire(employee) {
        return this.employees.add(employee);
    }

    fire(id) {
        return this.employees.remove(id);
    }

    computeBudget() {
        return this.employees.getAll().forEach(this.employees.salary)
    }

    processEmployees(processingFunction) {
        this.employees.getAll().forEach(processingFunction);
    }
}