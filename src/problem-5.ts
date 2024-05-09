{
  interface Student {
    name: string;
    age: number;
    grades: number[];
  }

  const calculateAverageGrade = (stu: Student): number => {
    // console.log(stu);
    const { grades } = stu;
    // console.log(grades);

    const totalMarks = grades.reduce((sum, marks) => sum + marks, 0);
    const averageGrade = totalMarks / grades.length;
    // console.log(averageGrade);
    return averageGrade;
  };

  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };

  const averageGradeBob = calculateAverageGrade(student1);
  console.log(averageGradeBob);
}
