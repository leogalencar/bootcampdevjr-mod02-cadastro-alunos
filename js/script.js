// Objects
var students = [
    {
        id: 1,
        name: 'Leonardo Alencar',
        email: 'teste@teste.com',
        number: '(11) 99999-9999',
        course: 2,
        course_shift: 1
    },
    {
        id: 2,
        name: 'Pessoa 2',
        email: 'teste@teste.com',
        number: '(11) 99999-9999',
        course: 1,
        course_shift: 3
    }
];


var courses = [
    { id: 1, name: 'Java'},
    { id: 2, name: 'Angular'},
    { id: 3, name: 'undefined'}
];


var shifts = [
    { id: 1, name: 'Manhã'},
    { id: 2, name: 'Tarde'},
    { id: 3, name: 'Noite'}
];


// On load
loadStudents();


// Load all students
function loadStudents() {
    for (let student of students) {
        addNewRow(student);
    }
}


// Add new row for a student
function addNewRow(student) {
    var table = document.getElementById('studentsTable');

    var newRow = table.insertRow();

    // Insert student id
    var idNode = document.createTextNode(student.id);
    newRow.insertCell().appendChild(idNode);
    
    // Insert student name
    var nameNode = document.createTextNode(student.name);
    newRow.insertCell().appendChild(nameNode);

    // Insert student email
    var emailNode = document.createTextNode(student.email);
    newRow.insertCell().appendChild(emailNode);

    // Insert student number
    var numberNode = document.createTextNode(student.number);
    newRow.insertCell().appendChild(numberNode);

    // Insert student course
    var courseNode = document.createTextNode(courses[student.course - 1].name);
    newRow.insertCell().appendChild(courseNode);

    // Insert student shift
    var shiftNode = document.createTextNode(shifts[student.course_shift - 1].name);
    newRow.insertCell().appendChild(shiftNode);
}


// Alternative addNewRow function
// function addNewRow(student) {
//     var table = document.getElementById('studentsTable');

//     table.innerHTML += 
//     `
//     <tr>
//         <td>${student.id}</td>
//         <td>${student.name}</td>
//         <td>${student.email}</td>
//         <td>${student.number}</td>
//         <td>${courses[student.course - 1].name}</td>
//         <td>${shifts[student.course_shift - 1].name}</td>
//     </tr>
//     `
// }