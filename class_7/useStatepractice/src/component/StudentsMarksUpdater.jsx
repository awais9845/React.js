import React, { useState } from "react";

const StudentsMarksUpdater = () => {
  const [students, setStudents] = useState([
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 90 },
  ]);
  const updatedStudents = [...students];

  function student1() {
    updatedStudents[0] = { ...updatedStudents, marks: 90 };
  }

  return (
    <div>
      <p>student1 :{students[0].name}</p>
      <p>marks :{students[0].marks}</p>
      <button onClick={student1}>update student 1 marks</button>
    </div>
  );
};

export default StudentsMarksUpdater;
