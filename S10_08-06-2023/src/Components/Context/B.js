import {React} from "react";
import { useContext } from "react";
import C from "./C";
import myContext from "./myContext";

function B(props) {
  let name1 = useContext(myContext)
  return (
    <div>
      <h2>B Component</h2>
      <p style={{color:"red"}}>{name1}</p>
      <hr />
      <C />
    </div>
  );
}


export default B;
