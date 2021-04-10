import{ADD_TODO} from './typsTodo'
import{FILTER_TODO} from './typsTodo'

const initialStateTodo=[
    {id:1,todo:'Acheter du lait',isDone: true},
    {id:2,todo:'Acheter du pain',isDone:false},
    {id:3,todo:'Acheter du fromage',isDone:true}
]
  
    
const todoReducer= (state=initialStateTodo,action)=>{
    console.log(action,"******** ",state)
    switch(action.type){
        case ADD_TODO:
            return([
                ...state,{
                    id:state.length+1,
                    todo:action.payload,
                    isDone:false
                }
            ])
        case FILTER_TODO:
            console.log( "state : " ,state)
            if (action.payload===1){
               let tofoFait= state.filter(todo =>{return todo.isDone===true})
               console.log(tofoFait)

                return tofoFait
                

            }else if(action.payload===2){
                console.log( "state : " ,state)

                let todoPasFait= state.filter(todo =>{return todo.isDone===false})
                console.log(todoPasFait)
 
                 return todoPasFait 
            }else{
                return state
            }
             
        default: return state
                
    }

}
export default todoReducer