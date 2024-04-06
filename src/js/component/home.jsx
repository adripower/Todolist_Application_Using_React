import React, {useInsertionEffect, useState }from "react";



//------------aqui la API.
function createUser(){
fetch ("playground.4geeks.com/contact/agendas/adrian1234",{
	
		method:"POST",
		body: JSON.stringify([]),
		headers:{
			"Content-Type": "application/json"
		}
	}
)
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))

}

//-----Aqui termina la Api.



//create your first component
const Home = () => {
	const [ inputValue, setInputValue] = useState("")
	const [ todos, setTodos] = useState([])


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

					placeholder="What do you need to do "/>	</li>
					{todos.map((item, index)=> (
				<li key={index}>{item}<i className="fas fa-trash" 
				onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}  > </i></li>))}
			</ul>
			<div>23 tasks</div>
		</div>
	);
};



export default Home;
