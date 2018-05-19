console.log('JS');
$(document).ready(onReady);

let allEmployees = [];

class Employee {
    constructor (first, last, id, title, salary){
        this.first = first;
        this.last = last;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }
} //end Employee
function onReady(){
    console.log('ready!');
    $('#submitButton').on('click', addEmployee);
}//end onReady

function addEmployee(){
    console.log('in storeEmployee');
    // get employee info
    let newEmployee = new Employee($('#firstIn').val(), $('#lastIn').val(), $('#idIn').val(), $('#jobTitleIn').val(), $('#annualIn').val());
    console.log(newEmployee);
    // store Employee in allEmployees array
    allEmployees.push(newEmployee);
    displayEmployees();
}//end storeEmployee

function calcMonthly(){
    console.log('in calcMonthly');
    // use stored employee info to calc totalMonthly
    // append totalMonthly to DOM
    // if monthly >$20k change background to red
}// end calcMonthly

function displayEmployees(){
    console.log('in displayEmployees');
    //target output to save as variable
    let employeeInfo = $('#outputElement');
    //empty output div
    employeeInfo.empty();
    //loop through array
    for(employee of allEmployees){
        // append employee info to DOM
        let outputString = '<div>';
            outputString += employee.first;
            outputString += ' ';
            outputString += employee.last;
            outputString += ' ';
            outputString += employee.id;
            outputString += ' ';
            outputString += employee.title;
            outputString += ' ';
            outputString += employee.salary;
        employeeInfo.append(outputString);
    }// end for
    // clear input fields
}// end displayEmployees

