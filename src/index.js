import ReactDOM from 'react-dom' ; 
import React, { useEffect, useState  } from 'react' ;
import './index.css' ;  
import { PassWordGenerator } from './Projects/PassWordGenerator';

const App = () => {
    return (
        <PassWordGenerator/>
    )
}





/*
1.useState
 i)Changing a vaiable in the page using useState.
 ii)Makes real-time changes to componenets in DOM
 iii)declared using an array []; 
 iv)First param id the value itself while the second param is the function that changes the value.
 v)Takes Care of DOM manipulations too ; 


2.UseEffect 
 i)Runs After every time a componenet is render on the page 
 ii)Cleanup function
 iii)In other words  , runs whenever the document re-renders a componenet.
 iv)Dependency list
 v)Basically a list of variables which are utilised in the useEffect.
 vi)If left empty , only runs once(initial run).
 vii)Cleanup
 runs as a last function to wrap up things.

3) Conditional Rendering
Basically rendering components based on some condition
|| and && and ?
{condition || code to execute or jsx to return if evaluated false}
{condition && code to execute or jsx to return if evaluated true}
{condtion ? code to excute if true : code to execute of false}

4)Forms
vanilla {let value = element.value ; }
React {onChange , value}

5)useRef
i)Preserves values just like useState
ii)Doesnt re render data onchange
iii)Allows us to attach a DOM element to the refContainer.
iv)Allows to ACESS the properties of targeted element.

6)useReducer
i)Similar to useState
ii)Used in more complex use cases
iii)Fucking used in redux
iv)Syntax : 
    let [state , dispatch] = useReducer(reducer , 0) ; 
    dispatch is the fuction that calls the reducer function.
    reducer(state , action){
        
    }
    reducer takes wo parameters [the state itself and the action] ; 
    the action is a param which allows us to perform something based on the condition
    Triggeres re render
    Basically useState but used to handle Complex data.


*/


ReactDOM.render(<App/> , document.getElementById("root")) ;   