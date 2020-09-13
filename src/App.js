import React from "react";

import "./App.css";
import One from "./views/one.js";
import ArrayHooks from "./views/arrayHooks.js";
import ArrayOfobject from "./views/arrayOfObject.js";
import UseEffectsHooks from "./views/useEffectshooks.js";

function App() {
  return (
    <div className="App">
      <h1>Hai hooks 1</h1>
      <One />
      <h1>Spilt opretor Array Hooks 2</h1>

      <ArrayHooks />
      <h2>Spilt opretor ArrayOfobject Hooks 2</h2>
      <ArrayOfobject />
      <h2>UseEffects.....</h2>
      <UseEffectsHooks />
      <h2>useContext ....</h2>

      {/* <UseContextHooks1 /> */}
      {/* <UseContextHooks2 /> */}
    </div>
  );
}

export default App;
