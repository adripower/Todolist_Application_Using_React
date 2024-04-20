import React, {useState}from "react";




//create your first component
const Home = () => {
	//let nuevoTodo="cua cua";

	//el valor que vamos a mostrar  unafuncion para modificar ese valor
	const [nuevoTodo,setNuevoTodo]= useState("tarea ");
	const [todos,setTodos] = useState ([]);


	const handleClick=()=>{
		console.log("holi");
		//el setTodos nos permite modificar todos
		setTodos([...todos, nuevoTodo])
		// Limpia el campo de entrada
		setNuevoTodo("");
	};

	// las funciones de js que usan eventos de suelen llamar handle
	const handleChange =(eventos)=>{
		
		
		setNuevoTodo (eventos.target.value);

	}



//------------aqui la API.


//-----Aqui termina la Api.

	return (

	

		
		<div className="container">
			<h1>My Todos</h1>
			<div>
				<input type="text" onChange={handleChange} />
				<button onClick={handleClick}>
					Agregar tarea
				</button>
				<p>nueva tarea: {nuevoTodo}</p>
				<ul>
					{todos.map((todo) =>{
						return (
							<li>
								{todo}
							</li>
						)
					})}
				</ul>
			</div>








		
		</div>
	);
};



export default Home;
