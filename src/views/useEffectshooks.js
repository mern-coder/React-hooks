import React, { useState, useEffect } from "react";

const UseEffectsHooks = () => {
  const [values, setValues] = useState([]);
  const [name, setNames] = useState("");
  useEffect(
    () => {
      //    console.log("useEffect")
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => setValues([json]));
      //   .then(json => console.log(json))
    },
    /*[] one time api call using empty array
     */
    //[name] any database chenge call api
    [name]
  );
  return (
    <>
      <h1>example of UseEffect</h1>
      <button onClick={() => setNames("mark")}>Api call database change</button>
      <h1>
        {values.map((e) => (
          <p>{e.title}</p>
        ))}
      </h1>
    </>
  );
};

export default UseEffectsHooks;
