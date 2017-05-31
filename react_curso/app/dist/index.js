import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
	constructor(){
		super();
		this.nombre = "Edward Almanzar";
	}
	obtenerNombre(){
		return "Edward :)";
	}
	render() {
		// return( <h1>Hola {this.nombre}</h1> );
		return( <h1>Hola {this.obtenerNombre()}</h1> );
	}
}

const app = document.getElementById('app');

ReactDom.render(<Layout/>, app);
