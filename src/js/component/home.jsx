import React, { useEffect, useState } from "react";




//create your first component
const Home = () => {
	const [ inputValue, setInputValue] = useState("")
	const [ todos, setTodos] = useState([])



////////----------estoy super atascado no consigo que deje de saltar error 
// entiendo que es porque intenta cargar todo el rato el POST y al estar creado ya el usuario da error
	
useEffect(()=>{
	subirList()
},[])



//------------aqui la API.
function createUser(){
fetch ("https://playground.4geeks.com/contact/agendas/adri",{
	
		method:"POST",
		body: JSON.stringify([]),
		headers:{
			"Content-Type": "application/json"
		}
	}
)
.then((response)=>response.json())
.then((data)=>{
	console.log(data);
	getList()
})
.catch((error)=>console.log(error))

}
//---------------- aqui hacemos el get de la API , se solicita informacion 

function getList(){
	fetch("https://playground.4geeks.com/contact/agendas/adri",{
		method:"GET",})
		.then((response)=>{
			console.log(response);
			if ( response.status === 404) {
				createUser()
			}else return(response.json())
		})
		.then((data)=>{
			console.log(data);
			setTodos(data.todos)})
		.catch((error)=>console.log(error))
	
}
//--------------- aqui hacemos el put de la API, que es subir lo escrito 

function subirList(){
	fetch("https://playground.4geeks.com/contact/agendas/adri",{
		method:"PUT",
		body: JSON.stringify([]),
		headers:{
			"Content.Type":"application/json"
		}
	})
		.then((response)=>response.json())
		.then((data)=>getList(data))
		.catch((error)=>console.log(error))
	
}
//aqui hacemos el delete de la API

// const borrarTodos = () => {
// 	fetch('https://playground.4geeks.com/contact/agendas/adri', {
// 	  method: "DELETE",
// 	  headers:{
// 		"Content-Type": "application/json"
// 		}
// 	})
// 	.then(response => response.json())
// 	.then(data => setTodos([]))
// 	.catch(error => console.log(error));
// };





//-----Aqui termina la Api.

	return (



		
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li> 
					<input 
					type="text" 
					onChange={(e)=> setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e)=>{						
						if(e.key==="Enter" ){																													
							setTodos(todos.concat(inputValue));setInputValue("")
							}
					
						}}

					placeholder="Escribe lo que quieres recordar..."/>	</li>
					{todos.map((item, index)=> (
				<li key={index}>{item}<i className="fas fa-trash" 
				onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}  > </i></li>))}
			</ul>
			<div>{todos.length} Tasks</div>
		</div>
	);
};



export default Home;
