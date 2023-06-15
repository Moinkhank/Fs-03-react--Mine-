import { useState } from "react";
import B from "./B";
import myContext from "./myContext";

function A(props) {
  const [state, setState] = useState("Geeks"); //string
  const [name,changeName] = useState("Moin")
  return (
    <div>
      <h2>A Component</h2>
      <button
        onClick={() => {
          setState("Geekster");
        }}
      >
        Change Data
      </button>
      <button
        onClick={() => {
         changeName("Mohd Moin");
        }}
      >
        Change Name
      </button>
      <hr />
      <myContext.Provider value={[name,state]}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
