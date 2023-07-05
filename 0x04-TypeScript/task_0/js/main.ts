//create the sudent interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//create two student objects
const firstStudent: Student {
    firstName: "Davies",
    lastName: "Aniefiok",
    age: 34,
    location: "ugep"
}

const seconStudent: Student {
    firstName: "Joseph",
    lastName: "Eno",
    age: 29,
    location: "ugep"
}

const studentsList: Student[] = [firstStudent, secondStudent];

const table = document.createElement("table");

studentList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
}
document.body.appendChild(table);
