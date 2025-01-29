const employees = [
    {
      empId: 465,
      empName: "Sandeep",
      empCompany: "Tech mahindra",
      empSalary: 80000,
      empAddress: {
        empCity: "Hyderabad",
        area: "mind speace",
      },
    },
    {
        empId: 466,
        empName: "Varun",
        empCompany: "HCL",
        empSalary: 80000,
        empAddress: {
            empCity: "Hyderabad",
            area: "Hitch city",
        },
    },
    {
        empId: 468,
        empName: "Rahul",
        empCompany: "infosys",
        empSalary: 80000,
        empAddress: {
            empCity: "Hyderabad",
            area: "nanakramguda",
        },
    },
    {
        empId: 469,
        empName: "Mahesh",
        empCompany: "Google",
        empSalary: 100000,
        empAddress: {
            empCity: "Hyderabad",
            area: "Gachibowli",
        },
    },
];

const table = document.createElement('table');
const tableHead = table.createTHead();
const headerRow = tableHead.insertRow();

const headers = [
    'Emp ID',
    'Emp Name',
    'Company',
    'Salary',
    'City',
    'Area',
  ];
  
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  
  const tableBody = table.createTBody();
  
  employees.forEach(employee => {
    const row = tableBody.insertRow();
  
    const cells = [
      employee.empId,
      employee.empName,
      employee.empCompany,
      employee.empSalary,
      employee.empAddress.empCity,
      employee.empAddress.area,
    ];
  
    cells.forEach(cellData => {
      const cell = row.insertCell();
      cell.textContent = cellData;
    });
  });
  
  document.body.appendChild(table);

