const employees = new Employees();
const company = new Company(employees);

let my_table = new Table(['id','sex','name', 'salary','title'], '#employee', removeFn);
new Navigator(['#li_new_employee', '#li_list_employees'], 0);

const formHandler = new FormHandler('form');
formHandler.addHandler(function (employee) {
    let res = company.hire(employee);
    if (res)
        my_table.addRow(employee);
    return res?'':'employee with id ' + employee.id + ' already exists';
});

function removeFn(employee)
{
    if(!confirm('you going to delete order with email: ' + employee.id))
        return false
    return company.fire(employee.id)
}