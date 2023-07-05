const updateStudentGradeByCity = (arr, city, newGrades) => {
  const studentOfSpecificCities = arr.filter((item) => item.location === city);
  for (const student of studentOfSpecificCities) {
    student.grade = 'N/A';
  }

  const gradeOfStudent = studentOfSpecificCities.map((studentOfSpecificCities) => {
    const student1 = studentOfSpecificCities;
    for (const grade of newGrades) {
      if (student1.id === grade.studentId) {
        student1.grade = grade.grade;
      }
    }
    return student1;
  });
  return gradeOfStudent;
};
