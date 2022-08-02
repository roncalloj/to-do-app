import React from "react";
import "../../styles/index.css";

export default function Lista (props) {
  
  const borrarPend = (index) => {
		props.setPendArray(props.pendArray.filter((val,i)=>index!=i))
	}

  return (
    <ul className="p-0">
      {props.pendArray.map((pendiente,index)=>{
        return (
          <li key={index} className="list-group-item d-flex justify-content-between mt-1 showbttn">
            {pendiente}
            <button className="btn-close hid" onClick={() => borrarPend (index)}/>
          </li>
        )
      })}
    </ul>
  );
}