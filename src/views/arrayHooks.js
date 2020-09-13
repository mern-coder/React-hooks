import React, { useState } from "react";

const ArrayHooks = () => {
  const [studentNames, setStudentName] = useState(["john", "ben"]);
  const setStudents = () => {
    //split opertor type1   setStudentName([...studentNames, "ui","tim"])
    //split opertot type 2
    setStudentName((names) => [...names, "ui", "tim"]);
  };
  return (
    <>
      <button onClick={setStudents}> setStudent </button>
      <ul>
        {studentNames.map((e) => (
          <li key={e}> {e} </li>
        ))}
      </ul>
    </>
  );
};

export default ArrayHooks;
