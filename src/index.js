import ReactDOM from 'react-dom' ; 
import React, { useEffect, useState  } from 'react' ;
import './index.css' ;  

let App = () => {

    const [checkboxes, setCheckboxes] = useState({alpha:false , number:false  , SC:false}) ; 
    const [password , setPassword] = useState('') ; 
    const [input , setInput] = useState('') ; 
    const Alphabets = 'abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ' ; 
    const numbers = '1234567890' ; 
    const specialCharacters = '!@#$%^&*()' ; 
    const handleSubmit = (e) => {
        e.preventDefault() ; 
        if(isNaN(input)){
            alert('Invalid Length!')
        }
        else if(!checkboxes.alpha&&!checkboxes.number&&!checkboxes.SC){
            alert('Please Select A field')
        }
        else {
            let arr = [] ; 
            if(checkboxes.alpha){
                arr.push('alpha')

            }
            if(checkboxes.number){
                arr.push('number') ; 
            }
            if(checkboxes.SC){
                arr.push('SC')
            }
            let word = '' ; 
            while (word.length !== Number(input)) {
                let randomField = arr[Math.floor(Math.random()*arr.length)] ; 
                switch (randomField) {
                    case 'alpha':
                        word += Alphabets[Math.floor(Math.random()*Alphabets.length)] ;
                        break ;  
                    case 'number' :
                        word += numbers[Math.floor(Math.random()*numbers.length)] ; 
                        break ; 
                    case 'SC':
                        word += specialCharacters[Math.floor(Math.random()*specialCharacters.length)]; 
                    default : 

                }
                
            }
            console.log(word);
            setPassword(word) ;  
        }
    }
    return(
    
        <React.Fragment>
            <center><h1>Password Generator</h1></center>
            <h2>Criterias</h2>
            <form onSubmit ={handleSubmit}>
            <div className="cont">
        <input type="checkbox" name="" id=""  
        checked = {checkboxes.alpha}
        onChange = {() => setCheckboxes({...checkboxes , alpha:!checkboxes.alpha})}
        
        /><span>Should Contain ALphabets</span><br />
        </div>
        <div className="cont">
        <input type="checkbox" name="" id="" 
        checked = {checkboxes.number}
        onChange = {(e) => setCheckboxes({...checkboxes , number:!checkboxes.number}) }
        
        /><span>Should Contain Numbers</span> <br />
        </div>
        <div className="cont"><input type="checkbox" name="" id=""
        checked = {checkboxes.SC}
        onChange = {() => setCheckboxes({...checkboxes , SC:!checkboxes.SC})}
        
        /><span>Should Contain Special Characters</span></div>
        <h2>What should Be the lengh of your password ?( number expected )</h2>
        <input type="text" style = {{marginLeft:'10px'}} 
        value = {input}
        onChange = {(e) => setInput(e.target.value) }
        /> <br /><br />
        <button type="submit" className="btn" style = {{marginLeft:10}}>Submit</button>
        </form>

        <center>
            <div className="answer">{password}</div>
        </center>

        </React.Fragment>
    )
}

/*
1.useState
 i)Changing a vaiable in the page using useState.
 ii)Makes real-time changes to componenets in DOM
 iii)declared using an array []; 
 iv)First param id the value itself while the second param is the function that changes the value.
 v)Takes Care of DOM manipulations too ; 


2.Useeffect
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