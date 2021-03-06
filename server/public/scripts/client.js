console.log('JS');
$(document).ready(atLoad);

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

function atLoad() {
    console.log('ready!');
    $('.submitButton').on('click', addEmployee);
    $('.deleteButton').on('click', deleteEmployee);
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
    let totalMonthly = 0;
    for (let employee of allEmployees) {
       totalMonthly += (employee.salary/ 12);
    };// end for
    // append to DOM
    $('#totalSpot').empty();
    $('#totalSpot').append('<div>Total Monthly Salary Expense: $' + totalMonthly.toFixed(2) + '</div>');
    // if monthly >$20k change background to red
    if(totalMonthly >= 20000.00){
        $('#totalSpot').addClass('red');
    } else {
        $('#totalSpot').removeClass('red');
    }//end if/else
    console.log(totalMonthly);
}// end calcMonthly

function deleteEmployee(){
    console.log('in deleteEmployee');
    //get element by ID/class
    for (let i = 0; i < allEmployees.length; i++) {
        if ($('#deleteIn').val() == allEmployees[i].id) {
            allEmployees.splice(i, 1);
        };
    }
    $('#deleteIn').val('');
    displayEmployees();
    calcMonthly();
}// end deleteEmployee

function displayEmployees() {
    console.log('in displayEmployees');
    //target output to save as variable
    let employeeInfo = $('#tableBody');
    //empty output div
    employeeInfo.empty();
    //loop through array
    for (let employee of allEmployees) {
        // append employee info to DOM
        let outputString = '<tr id="tableRows">';
        outputString += '<td>' + employee.first + '</td>';
        outputString += '<td>' + employee.last + '</td>';
        outputString += '<td>' + employee.id + '</td>';
        outputString += '<td>' + employee.title + '</td>';
        outputString += '<td>' + employee.salary + '</td>';
        outputString += '</tr>'
        employeeInfo.append(outputString);
    }// end for
}// end displayEmployees

