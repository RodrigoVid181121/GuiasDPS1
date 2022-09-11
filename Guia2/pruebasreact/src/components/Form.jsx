import React,{useState} from 'react';
import Todo from '../components/Todo';


    const Form = () => {
        const [numero, setNumero] = useState({})
        const [todo, setTodo] = useState({})
        const [todos, setTodos] = useState([
            {numero: '1',  todo: 'todo1'},
            {numero: '2', todo: 'todo2'},
            {numero: '3', todo: 'todo3'}
        ])

        const handleChange = e => {
            setTodo({[e.target.name]: e.target.value})
            setNumero({[e.target.name]: e.target.value})
        }
        const handleClick = e => {
            if(Object.keys(todo).length === 0 || todo.todo.trim()===''){
                alert ('El campo no puede estar vacio')
                return
            }
            else if(Object.keys(numero).length===0 || numero.numero.trim() === '')
            {
                alert ('El campo no puede estar vacio')
                return
            }

            setTodos([...todos, numero, todo])
        }

        const deleteTodo = indice => {
            const newTodos = [...todos]
            newTodos.splice (indice,1)
            setTodos(newTodos)
        }

        return (
            <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar Tareas</label><br />
                <input type="text" name = "todo" onChange={handleChange} />
                <input type="number" name = "numero" onChange={handleChange} />
                <button onClick={handleClick}>Agregar</button>
            </form>
            {
                todos.map((value, index) => (<Todo todo={value.todo} numero ={value.numero} key={index} index={index} deleteTodo={deleteTodo}/>
))

            }
            </>
            
        )
    }


export default Form
