import React from "react";

export default function Footer (props) {

    const Contador = () =>{
		let text = ""
		if (props.pendArray.length >= 1) {
			if (props.pendArray.length > 1) {
				text = props.pendArray.length + " tareas pendientes";
			} else {
				text = props.pendArray.length + " tarea pendiente";
			}
		} else {
			text = "Sin pendientes";
		}
        return (
            text
        )
	}
  return (
		<Contador text/>
  );
}