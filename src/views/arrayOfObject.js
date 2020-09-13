import React, { useState } from "react";

const ArrayOfobject = () => {
  const [studentsDetails, setStudentDetails] = useState([
    { id: 1, name: "ben" },
  ]);
  const setStudents = () => {
    setStudentDetails((names) => [
      ...names,
      { id: studentsDetails.length + 1, name: "tim" },
    ]);
  };
  return (
    <>
      <button onClick={setStudents}> setStudent </button>
      <ul>
        {studentsDetails.map((e) => (
          <li key={e.id}> {e.name} </li>
        ))}
      </ul>
    </>
  );
};

export default ArrayOfobject;
