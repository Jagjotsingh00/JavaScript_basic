var students = [
  { rollNo: 1, name: "Rahul", marks: [78, 82, 91, 66] },
  { rollNo: 2, name: "Aman", marks: [90, 91, 92, 93] },
  { rollNo: 3, name: "Riya", marks: [99, 45, 98, 92] },
  { rollNo: 4, name: "Karan", marks: [35, 40, 20, 60] },
  { rollNo: 5, name: "Neha", marks: [88, 77, 66, 55] },
];

/**********************************************************************
TASK 1: Calculate Result of One Student

Create function:

calculateResult(student)

Return object format:

{
rollNo,
name,
total,
percentage,
status
}

Rules:

* total = sum of 4 subjects
* percentage = total / 4
* PASS only if ALL subjects >= 33
* If any subject < 33 → FAIL
  **********************************************************************/

// function calculateResult(student) {
// // TODO
// }

function calculateResult(students) {
  let total = students.marks.reduce((sum, mark) => sum + mark, 0);
  let percentage = total / 4;
  let status = students.marks.every((mark) => mark >= 33) ? "PASS" : "FAIL";
  return {
    rollNo: students.rollNo,
    name: students.name,
    total: total,
    percentage: percentage,
    status: status,
  };
}
console.log(calculateResult(students[2]));

/**********************************************************************
Generate Results of All Students

Create function:

generateResults(students)

Return array of result objects using calculateResult()
**********************************************************************/

// function generateResults(students) {
// // TODO
// }

function generateResults(students) {
  let results = [];
  for (let i = 0; i < students.length; i++) {
    let result = calculateResult(students[i]);
    results.push(result);
  }
  return results;
}
console.log(generateResults(students));

/**********************************************************************
Find Topper (NO SORT ALLOWED)

Create function:

getTopper(results)

Return student with highest percentage
**********************************************************************/

// function getTopper(results) {
// // TODO
// }
function getTopper(results) {
  let topper = results[0];
  for (let i = 1; i < results.length; i++) {
    if (results[i].percentage > topper.percentage) {
      topper = results[i];
    }
  }
  return topper;
}
let results = generateResults(students);
console.log(getTopper(results));
/**********************************************************************
 Get Failed Students List

Create function:

getFailedStudents(results)

Return array of students where status === "FAIL"
**********************************************************************/

// function getFailedStudents(results) {
// // TODO
// }

function getFailedStudents(results) {
    let failedStudents = [];
    for (let i = 0; i < results.length; i++) {
        if (results[i].status === "FAIL") {
            failedStudents.push(results[i]);
        }
    }
    return failedStudents;
}
let result = generateResults(students);
console.log(getFailedStudents(result));

/**********************************************************************
Subject Toppers

Create function:

getSubjectToppers(students)

Return format:

[
{ subject: 1, name: "StudentName", marks: highestMarks },
{ subject: 2, name: "StudentName", marks: highestMarks },
{ subject: 3, name: "StudentName", marks: highestMarks },
{ subject: 4, name: "StudentName", marks: highestMarks }
]

(No sort allowed)
**********************************************************************/

// function getSubjectToppers(students) {
// // TODO
// }

/**********************************************************************
TEST RUN (DO NOT MODIFY)
**********************************************************************/

// var results = generateResults(students);
// console.log("All Results:", results);

// var topper = getTopper(results);
// console.log("Topper:", topper);

// var failed = getFailedStudents(results);
// console.log("Failed Students:", failed);

// var subjectToppers = getSubjectToppers(students);
// console.log("Subject Toppers:", subjectToppers);

/**********************************************************************
EXPECTED OUTPUT CHECKS (SHOULD MATCH)

Topper should be: Aman
Failed student: Karan
**********************************************************************/
