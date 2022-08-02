import React, { useState } from "react";
import Lista from "./Lista.jsx";
import Footer from "./Footer.jsx";

const App = (props) => {

	const [pendArray, setPendArray] = useState ([]);
	const [pendiente, setPendiente] = useState("");

	const Change = (e) => setPendiente(e.target.value);
	
	const SubmitForm = (e) => {
		e.preventDefault();
		if (pendiente !== ""){
			if (pendArray.includes(pendiente) === false) setPendArray([...pendArray, pendiente]);
			else alert ("Esa tarea ya esta incluída");
		}
		else alert ("Introduzca una tarea por hacer");
		//pendiente == ""? alert ("Introduzca una tarea por hacer") : setPendArray([...pendArray, pendiente]);
		setPendiente("");
	}

	return (
		<div>
			<h1 className="text-center mt-5">todos</h1>
			<div className="container text-center list-group-item listBox">
				<form onSubmit={SubmitForm}>
					<input type="text" className="d-flex justify-content-start list-group-item inBox" placeholder="Tarea pendiente" value={pendiente} onChange={(e)=> Change(e)} />
				</form>
				<Lista pendArray={pendArray} setPendArray={setPendArray}/>
				<div className="footer list-group-item d-flex justify-content-start p-0">
					<Footer pendArray = {pendArray}/>
				</div>
			</div>
		</div>
	);
};

export default App;
