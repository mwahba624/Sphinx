// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];
// Collect employee data
const collectEmployees = function() {
      const firstName = prompt("Enter Employee's first name");
      const lastName = prompt("Enter Employee's last name:");
      const salary = parseFloat(prompt("Enter Employee's salary:"));

      const employee = { //add an employee 
        firstName : firstName,
        lastName : lastName,
        salary : salary,
      };

      employeesArray.push(employee);
    

    const continueAdding = confirm("Do you want to add another employee?");
    if (continueAdding) {

      collectEmployees ();

    } else {
      employeesArray.sort((a,b) => a.lastName.localeCompare(b.lastName));
    displayEmployees(employeesArray);
    displayAverageSalary(employeesArray);

    console.log('==============================');
    console.table(employeesArray);
    getRandomEmployee(employeesArray);
    }
  
}

// TODO: Get user input to create and return an array of employee objects

// Display the total salary
const displayAverageSalary = function(employeesArray) {

  // calculate the total salary
  
  const totalSalary = employeesArray.reduce((total, employee) => total + employee.salary, 0);
  console.log(`Total Salary: ${totalSalary}`);


  // TODO: Calculate and display the average salary

  const averageSalary = totalSalary / employeesArray.length;

  console.log('Average Salary:', averageSalary.toLocaleString("en-US",{
  style: "currency",
  currency: "USD"
  }));
}
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  const randomEmployee = employeesArray[randomIndex];
// displayer winner
  console.log("Congratulations, " + randomEmployee.firstName + " " + randomEmployee.lastName + "! our random drawing winner");
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
