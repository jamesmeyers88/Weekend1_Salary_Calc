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
    // get employee info
    let newEmployee = new Employee($('#firstIn').val(), $('#lastIn').val(), $('#idIn').val(), $('#jobTitleIn').val(), $('#annualIn').val());
    console.log(newEmployee);
    // store Employee in allEmployees array
    allEmployees.push(newEmployee);
    displayEmployees();
    emptyFields();
    calcMonthly();
}//end storeEmployee

function calcMonthly() {
    console.log('in calcMonthly');
    let sum = 0;
    // use stored employee info to calc totalMonthly
    for (employee of allEmployees) {
        sum += Number(employee.salary);
    };// end for
    // append totalMonthly to DOM
    let totalMonthly = sum;
    $('#totalSpot').append('<div>' + totalMonthly + '</div>');
    console.log(sum);
    return sum;
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

function emptyFields() {
    console.log('in emptyFields');
    $('.inputField').val('');
}//end emptyFields


