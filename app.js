const students = [
  { sno: 1, firstName: "Taha", lastName: "Waseem", age: 18, id: 10 },
  { sno: 2, firstName: "Noman", lastName: "Shakir", age: 19, id: 20 },
  { sno: 3, firstName: "Bilal", lastName: "Javed", age: 24, id: 30 },
  { sno: 4, firstName: "Ali", lastName: "Faruqi", age: 23, id: 40 },
  { sno: 5, firstName: "Ahad", lastName: "Khan", age: 20, id: 50 },
];
const tableBody = document.querySelector("#student-table tbody");
students.forEach((student) => {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${student.sno}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.id}</td>
    `;
  tableBody.appendChild(row);
});
