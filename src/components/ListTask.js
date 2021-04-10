import React from 'react'
import {useSelector} from 'react-redux'

function ListTask() {
    const todos = useSelector(state => state)
    console.log("todos : ",todos)
    const myTodo=todos?.map(todo=>{
        let etat =todo.isDone?"done":"not"
        return(
            <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
                {todo.todo} <span className="badge bg-primary rounded-pill">{etat}</span>
            </li> 
        )
    } 
    
        )
    return (
        <ul className="list-group">
            {myTodo}
        </ul>
    )
}

export default ListTask
