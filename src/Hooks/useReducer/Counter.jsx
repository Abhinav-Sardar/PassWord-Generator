import React, { useRef, useState , useReducer} from 'react'
import '../../../src/index.css'
function useReducerExample() {
    let reducer = (currState , type) => {
        if(type === 'inc'){
            return currState+1  ;
        }
        else if(type === 'dec'){
            return currState-1 ; 
        }
        else if(type === 'res'){
            return 0;  
            
        }
        else{
            return currState ; 
        }
    }
    let [count , setCount] = useReducer(reducer , 0) ; 
return(
    <React.Fragment>
        <center>
            <h1>
                useReducer
            </h1>
            <h2>{count}</h2>
            <button className="btn" onClick = {() => setCount('inc')} >Increment</button>
            <button className="btn" onClick = {() => setCount('dec')}>Decrement</button>
            <button className="btn" onClick = {() => setCount('res')}>Reset</button>

        </center>
    </React.Fragment>
)

} 


export default useReducerExample ; 