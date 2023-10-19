"use strict"

// this script looks up the student's major code through the if else statements and display the name of the major and the location of the department's office
// if the major code doesn't exists (not included in the if else statements), then it will display <unknown>

const studentName = "Micah Kashiwabara";
const studentMajor = "ENG"; // options: BIOL, CSCI, ENG, HIST, MKT
let majorName = "";
let departmentOffice = "";

if (studentMajor == "BIOL") {
    majorName = "Biology";
    departmentOffice = "Science Bldg, Room 310";
}
else if (studentMajor == "CSCI") {
    majorName = "Computer Science";
    departmentOffice = "Sheppard Hall, Room 314";
}
else if (studentMajor == "ENG") {
    majorName = "English";
    departmentOffice = "Kerr Hall, Room 201";
}
else if (studentMajor == "HIST") {
    majorName = "History";
    departmentOffice = "Kerr Hall, Room 114";
}
else if (studentMajor == "MKT") {
    majorName = "Marketing";
    departmentOffice = "Westly Hall, Room 310";
}
else {
    majorName = "<unknown>";
    departmentOffice = "<unknown>";
}

console.log("Student: " + studentName);
console.log("Major: " + majorName);
console.log("Advising Location: " + departmentOffice);