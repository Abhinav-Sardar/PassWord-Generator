import React, { useReducer, useState } from 'react';
import { act } from 'react-dom/test-utils';
// import Modal from './Modal';
// import Modal from './Modal';
// import Modal from './Modal';
import ModalCompoenet from './Modal' ; 
const People = () => {
    let reducer = (state , action) => {
        if(action.type === 'add'){
            return {...state , People:[...state.People , action.value] , modalContent:'Person Added' , modalHidden:false}
        }
        else if(action.type === 'empty'){
            return {...state , modalContent:'Empty' , modalHidden:false}
        }
        else if(action.type === 'remove'){
            let filtered = state.People.filter(person => {
                if(person!==state.People[action.value]){
                    return person ; 
                }
            }) ; 
            return {...state , People:filtered , modalHidden:false , modalContent:'Person Removed'}
        }
        else if(action === 'clear'){
            // alert('Hi')
            // return {...state , People:[] , modalContent:'List Was Cleared' , modalHidden:false}
            return {...state , People:[] , modalHidden:'Cleared' , modalHidden:false}
        }
        
    }
    let [name , setName] = useState('')  ; 
    let [state , dispatch] = useReducer(reducer , {People:[] , modalContent:'Person Added' , modalHidden:true}) ; 
    return (
        <div>
            {state.modalHidden ? "":<ModalCompoenet modalContent = {state.modalContent}/>}
            <form onSubmit = {e => {
                e.preventDefault() ; 
                if(name){
                    dispatch({type:'add' , value:name})
                }
                else{
                    dispatch({type:'empty'})
                }
            }}>
                <input value = {name} onChange = {(e) => setName(e.target.value)} type="text" />
                <button type="submit">
                    Add Item
                </button>
                <button onClick = {() => dispatch('clear')}>Clear All</button>
            </form>
            <div>
                {state.People.map((person , index) => {
                    return <React.Fragment>
                        <h2>{person}</h2>
                        <button onClick ={() => dispatch({type:'remove' , value:index})}>Delete</button>
                    </React.Fragment>
                })}
            </div>
        </div>
    )
    }

export default People
