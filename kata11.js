const organizeInstructors = function(instructors) {
  let sortByCourse = {};
  let courseNames = [];
  let teacherNames = [];
  for (i = 0; i < instructors.length; i++) {
    courseNames.push(instructors[i].course)
  }
  courseNames = [...new Set(courseNames)];
  for (c = 0; c < courseNames.length; c++) {
    sortByCourse[courseNames[c]] = getTeachers(courseNames[c], instructors);
  }
  return (sortByCourse);
};

const getTeachers = function(courseName, originalList) {
  let nameList = [];
  for (i = 0; i < originalList.length; i++) {
    if (originalList[i].course == courseName) {
      nameList.push(originalList[i].name);
    }
  }
  return (nameList);
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
