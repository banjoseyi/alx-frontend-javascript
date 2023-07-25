interface Student {
 firstName: string;
 lastName: string;
 age: number;
 location: string;
}

const student1: Student = {
 firstName: 'John',
 lastName: 'Scott',
 age: 34,
 location: 'United Kingdom',
}

const student2: Student = {
 firstName: 'Amanda',
 lastName: 'Williams',
 age: 25,
 location: 'Australia',
}

const studentList: Student[] = [student1, student2]

studentList.forEach((pupil) => {
 const table = document .createElement('table');
 const row = table.insertRow();

 const pupilName = row.insertCell();
 pupilName.textContent = pupil.firstName;

 const pupilAge = row.insertCell();
 pupilAge.textContent = pupil.age;
)}
document.body.appendChild(table);
