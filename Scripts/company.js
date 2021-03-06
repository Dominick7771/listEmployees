class Company {
    constructor(employees) {
        this.employees=employees
    }

        hire = function(employee)
        {
            return this.employees.add(employee)
        }

        fire = function(id)
        {
            return this.employees.remove(id)
        }

        computeBudget = function()
        {
            let allEmployees=this.employees.getAll()
            let budget=0;
            allEmployees.forEach(function (employee)
            {
                budget+=employee.salary
            })
            return budget
        }

        processEmployees = function(processingFunction)
        {
            this.employees.getAll().then(function (employees){
                employees.forEach(processingFunction);
            }).catch(function (error){
                alert(error.responseText);
            })
        }
}