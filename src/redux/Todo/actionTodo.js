import{ADD_TODO} from './typsTodo'
import{FILTER_TODO} from './typsTodo'

export const addTodo=(todo)=>{
    console.log(todo)
    return{
        type:ADD_TODO,
        payload : todo
    }
}

export const filterTodo=(etat)=>{
    console.log(etat)
    return{
    type:FILTER_TODO,
    payload:etat
    }
}