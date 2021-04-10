import React, { useState }  from 'react';
import {addTodo} from '../redux/Todo/actionTodo'
import {useDispatch} from 'react-redux'
function Addtask() {
    const[todo,setTodo]=useState('')
        const dispatch = useDispatch()
    return(
        <form className="mt-4">
            <div className="card card-body">
                <div className="form-group">
                    <label>Ajouter Todo</label>
                    <input className="form-control" value={todo} type="text" onChange={(e)=>setTodo(e.target.value)}/>
                    <button type="button" className="btn btn-primary mt-2" onClick={()=>dispatch(addTodo(todo))}>Ajouter</button>
                </div>
            </div>
        </form>

    )
}

export default Addtask