import React  from 'react'
import Addtask from './Addtask'
import FilterControl from './FilterControl'
import ListTask from './ListTask'
function Task() {
       return(
        <div>
            <h1 className="text-center">To-do</h1>
            <ListTask/>
            <Addtask/>
            <FilterControl />
        </div>
    )
}

export default Task