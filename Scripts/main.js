const employees = new Employees(4000)
const company = new Company(employees)
const formEmployee = new FormHandler("#form_employee")
const formGeneration = new FormHandler('#form_generation')
const table = new Table('#employees', ['id', 'emailAddress', 'name', 'gender', 'salary',
    'title'], removeFn)
const random = new Random()
const generator = new EmployeesGenerator(random)
new Navigator(['#li_new_employee', '#li_generation', '#li_list_employees'], 0)
const $total = $('#total_salary')

formEmployee.addHandler(function (employee) {
    return company.hire(employee).then(function (res) {
        if (res) {
            addEmployeeToTable(employee)
        }
        return res ? '' : ' employee with id ' + employee.id + ' already exists'
    }).catch(errorHandler)
})

formGeneration.addHandler(function (genData) {
    for (let i = 0; i < genData.n_employees; i++) {
        let employee = generator.createEmployee(genData.n_digits, parseInt(genData.min_salary),
            parseInt(genData.max_salary))
        if (company.hire(employee)) {
            addEmployeeToTable(employee)
        } else {
            i--;
        }
    }
})

formGeneration.addHandler(function (genData) {
    let employees = []
    for (let i = 0; i < genData.n_employees; i++) {
        let employee = generator.createEmployee(genData.n_digits, parseInt(genData.min_salary),
            parseInt(genData.max_salary))
        employees.push(employee)
    }

    employees.forEach(function (employee) {
        company.hire(employee).then(function (res) {
            if (res) {
                addEmployeeToTable(employee)
            }

        }).catch(errorHandler)
    })
    return new Promise(function (resolve) {
        resolve('')
    })
})

function errorHandler(error) {
    alert(error.responseText);
    throw new Error(error);
}

function addEmployeeToTable(employee) {
    $total.text(parseInt($total.text()) + parseInt(employee.salary))
    table.addRow(employee)
}

function removeFn(employee) {
    if (!confirm('you are going to fire\nemployee id:' + employee.id)) {
        return false
    }
    if (company.fire(employee.id)) {
        reduceTotalSalary(parseInt(employee.salary))
        return true
    }
    return false
}

function reduceTotalSalary(salary) {
    $total.text(parseInt($total.text()) - salary)
}


