import React, { useState }  from 'react';
import {useDispatch} from 'react-redux'
import {filterTodo} from '../redux/Todo/actionTodo'

function FilterControl() {
    const [filterF, setFilterF] = useState("0")
    const dispatch = useDispatch()

    const selectTodo=(e)=>{
        setFilterF(Number(e.target.value))
        console.log(filterF)
    }

    return (
        <form className="mt-4"  >
        <div className="card border-primary mb-3" style={{width: 260}}>
            <div className="card-header text-white bg-primary">FILTRER</div>
            <div className="card-body">
                <h5 className="card-title">Filtrer les tâches par</h5>
                <select className="form-select" value={filterF} onChange={selectTodo} required aria-label="select example">
                    <option value="0">Filter Par...</option>
                    <option value="1">Fait</option>
                    <option value="2">Pas Fait</option>
                </select>      
            </div>
            <button type="button" className="btn btn-primary " onClick={()=>dispatch(filterTodo(filterF))}>Filtrer</button>

        </div>
        
</form>
    )
}

export default FilterControl
