console.log('JS');
$(document).ready(onReady);

let allEmployees = [];

class Employee {
    constructor(first, last, id, title, salary) {
        this.first = first;
        this.last = last;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }
} //end Employee
function onReady() {
    console.log('ready!');
    $('#submitButton').on('click', addEmployee);
}//end onReady

function addEmployee() {
    console.log('in storeEmployee');
    let newEmployee = new Employee($('#firstIn').val(), $('#lastIn').val(), $('#idIn').val(), $('#jobTitleIn').val(), $('#annualIn').val());
    console.log(newEmployee);
    // store Employee in allEmployees array
    allEmployees.push(newEmployee);
    $('.inputField').val('');
    displayEmployees();
    calcMonthly();
}//end storeEmployee

function calcMonthly() {
    let sum = 0;
    for (employee of allEmployees) {
        sum += (employee.salary/12).toFixed(2);
    };// end for
    // append to DOM
    $('#totalSpot').empty();
    $('#totalSpot').append('<div>Total Monthly Salary Expense: ' + sum + '</div>');
    // if monthly >$20k change background to red
}// end calcMonthly

function displayEmployees() {
    console.log('in displayEmployees');
    //target output to save as variable
    let employeeInfo = $('#tableBody');
    //empty output div
    employeeInfo.empty();
    //loop through array
    for (employee of allEmployees) {
        // append employee info to DOM
        let outputString = '<tr>';
        outputString += '<td>' + employee.first + '</td>';
        outputString += '<td>' + employee.last + '</td>';
        outputString += '<td>' + employee.id + '</td>';
        outputString += '<td>' + employee.title + '</td>';
        outputString += '<td>' + employee.salary + '</td>';
        outputString += '</tr>'
        employeeInfo.append(outputString);
    }// end for
}// end displayEmployees

