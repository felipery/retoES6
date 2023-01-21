const courses = [
  { _id: 1, title: 'JavaScript I' },
  { _id: 2, title: 'HTML y CSS I' },
];

const students = [
  { _id: 1, name: 'Pedro Perez' },
  { _id: 2, name: 'Maria Gomez' },
];

const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 },
];

courses.forEach((courses) => {
  console.log(`- ${courses.title}`);
  enrollments.forEach((element) => {
    if (courses._id === element.course_id) {
      students.forEach((elem) => {
        if (element.student_id === elem._id) {
          console.log(` * ${elem.name}`);
        }
      });
    }
  });
});

students.forEach((students) => {
  console.log(`- ${students.name}`);
  enrollments.forEach((element) => {
    if (students._id === element.student_id) {
      courses.forEach((elem) => {
        if (element.course_id === elem._id) {
          console.log(` * ${elem.title}`);
        }
      });
    }
  });
});
