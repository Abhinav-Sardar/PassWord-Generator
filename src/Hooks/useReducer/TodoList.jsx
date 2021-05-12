import React, { useReducer, useState } from 'react'
import '../../index.css' ; 
function TodoList() {
    function reducer(state , action){
        return [...state , text] ; 
    }
    let [text , setText] = useState('') ; 
    let [todolist , dispatchTodos] = useReducer(reducer, []) ; 
    return (
        <div>
            <center>
                <h1>
                    TodoList
                </h1>
            </center>
            <form onSubmit = {(e) => {
                e.preventDefault() ; 
                dispatchTodos() ; 
            }}>
                <input type="text" value={text} onChange = {(e) => setText(e.target.value)} />
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
            <h3>
                {todolist.map(todo => {
                    return <div>{todo}<br/></div>
                })}
            </h3>
        </div>
    )
}

export default TodoList
