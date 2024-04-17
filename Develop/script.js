// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = []

// Collect employee data
const collectEmployees = function() {
  
  let addingEmployess = true;
  while (addingEmployess) {
    const continueAdding = confirm("Do you want to add an employee?");
    if (! continueAdding) {
      addingEmployess = false;
    } else {
      const firstName = prompt("Enter Employee's first name");
      const lastName = prompt("Enter Employee's last name:");
      const salary = parseFloat(prompt("Enter Employee's salary:"));

      const employees = { //add an employee 
        firstName : firstName,
        lastName : lastName,
        salary : salary,
      };
      employeesArray.push(employee);
    }
  }
  return employeesArray; // return the Array
}
// TODO: Get user input to create and return an array of employee objects

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

   for (const employee of employeesArray) {// calculate the total salary
        totalSalary += employee.salary;
    }
  // TODO: Calculate and display the average salary

const averageSalary = totalSalary / employeesArray.length;

console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  const randomEmployee = employeesArray[randomIndex];

  console.log("Congratulations, " + randomEmployee.firstName + " " + randomEmployee.lastName + "! our random drawing winner");
  console.log("Random Employee:");
  console.table(randomEmployee);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
