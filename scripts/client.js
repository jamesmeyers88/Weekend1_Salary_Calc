console.log('JS');
$(document).ready(onReady);

function onReady(){
    console.log('ready!');
    $('#submitButton').on('click', addEmployee);
}//end onReady

function addEmployee(){
    console.log('in storeEmployee');
    // get employee info
    // store employee
    // append employee info to DOM
    // clear input fields
}//end storeEmployee

function calcMonthly(){
    console.log('in calcMonthly');
    // use stored employee info to calc totalMonthly
    // append totalMonthly to DOM
    // if monthly >$20k change background to red
}// end calcMonthly

