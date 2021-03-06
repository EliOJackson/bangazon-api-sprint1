'use strict';

const { createWriteStream } = require('fs');
const { generateCustomers } = require("../data/customers");
const { generatePaymentTypes } = require("../data/payment_types");
const { generateProducts } = require("../data/products");

const { generateEmployees } = require("../data/employees");
const { generateActiveComputers, generateDeadComputers } = require("../data/computers");
const { generateTrainingPrograms } = require("../data/training");
const { generateDepartments } = require("../data/departments");
const { generateEmployeeTraining } = require("../data/employee_training");
const { generateEmployeeComputer } = require("../data/employee_computer");

// customers data
let customers = generateCustomers();
let custStream = createWriteStream(`./json/customers.json`);
custStream.write(JSON.stringify(customers));

let paymentTypes = generatePaymentTypes();
let payStream = createWriteStream(`./json/payment_types.json`);
payStream.write(JSON.stringify(paymentTypes));

let products = generateProducts();
let productStream = createWriteStream(`./json/products.json`);
productStream.write(JSON.stringify(products));



// employee data
let employees = generateEmployees();
let empStream = createWriteStream(`./json/employees.json`);
empStream.write(JSON.stringify(employees));

let activeComputers = generateActiveComputers();
let compActiveStream = createWriteStream(`./json/active_computers.json`);
compActiveStream.write(JSON.stringify(activeComputers));

let deadComputers = generateDeadComputers();
let compDeadStream = createWriteStream(`./json/dead_computers.json`);
compDeadStream.write(JSON.stringify(deadComputers));

let trainingPrograms = generateTrainingPrograms();
let trainingStream = createWriteStream(`./json/training.json`);
trainingStream.write(JSON.stringify(trainingPrograms));

let departments = generateDepartments();
let departmentStream = createWriteStream(`./json/departments.json`);
departmentStream.write(JSON.stringify(departments));

let employeeTraining = generateEmployeeTraining();
let empTrainStream = createWriteStream(`./json/employee_training.json`);
empTrainStream.write(JSON.stringify(employeeTraining));

let employeeComputer = generateEmployeeComputer();
let empCompStream = createWriteStream(`./json/employee_computer.json`);
empCompStream.write(JSON.stringify(employeeComputer));