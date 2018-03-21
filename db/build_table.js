'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');
const { readFileSync } = require('fs');
const custData = JSON.parse(readFileSync("./json/customers.json"));
const empData = JSON.parse(readFileSync("./json/employees.json"));
const supData = JSON.parse(readFileSync("./json/supervisors.json"));

db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS customers`);
    db.run(
        `CREATE TABLE IF NOT EXISTS customers (
    customer_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    address_street TEXT,
    address_city TEXT,
    address_state TEXT,
    address_zip TEXT,
    account_creation_date TEXT
    )`,
        () => {
            custData.forEach(({ firstName, lastName, addressStreet, addressCity, addressState, addressZip, accountCreationDate }) => {
                db.run(`INSERT INTO customers VALUES (
        ${null},
        "${firstName}",
        "${lastName}",
        "${addressStreet}",
        "${addressCity}",
        "${addressState}",
        "${addressZip}",
        "${accountCreationDate}"
        )`);
            });
        }
    );
});


db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS employees`);
    db.run(
        `CREATE TABLE IF NOT EXISTS employees (
    employee_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    dept_id INTEGER,
    position_id INTEGER
    )`,
        () => {
            empData.forEach(({ firstName, lastName, deptId, posId }) => {
                db.run(`INSERT INTO employees VALUES (
                ${null},
                "${firstName}",
                "${lastName}",
                ${deptId},
                ${posId}
                )`);
            });
            supData.forEach(({ firstName, lastName, deptId, posId }) => {
                db.run(`INSERT INTO employees VALUES (
                ${null},
                "${firstName}",
                "${lastName}",
                ${deptId},
                ${posId}
                )`);
            });
        }
    )
});