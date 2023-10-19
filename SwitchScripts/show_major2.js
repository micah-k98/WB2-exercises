"use strict"

// this script looks up the student's major code through the if else statements and display the name of the major and the location of the department's office
// if the major code doesn't exists (not included in the if else statements), then it will display <unknown>

const studentName = "Micah Kashiwabara";
const studentMajor = "MKT"; // options: BIOL, CSCI, ENG, HIST, MKT
let majorName = "";
let departmentOffice = "";


switch (studentMajor)
{
    case "BIOL":
    majorName = "Biology";
    departmentOffice = "Science Bldg, Room 310";
    break;

    case "CSCI":
    majorName = "Computer Science";
    departmentOffice = "Sheppard Hall, Room 314";
    break;

    case "ENG":
    majorName = "English";
    departmentOffice = "Kerr Hall, Room 201";
    break;

    case "HIST":
    majorName = "History";
    departmentOffice = "Kerr Hall, Room 114";
    break;

    case "MKT":
    majorName = "Marketing";
    departmentOffice = "Westly Hall, Room 310";
    break;
    
    default:
    majorName = "<unknown>";
    departmentOffice = "<unknown>";
    break;
}


console.log("Student: " + studentName);
console.log("Major: " + majorName);
console.log("Advising Location: " + departmentOffice);