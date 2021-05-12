import React , {useEffect, useRef, useState} from 'react'
function Ref(){
    return <center>
    <form onSubmit = {(e) => {
        e.preventDefault() ; 
        setPeople([...people , inputRef.current.value]) ; 
        inputRef.current.style.backgroundColor = "green" ; 
    }}>
        <input type="text" ref = {inputRef} /><br/>
        <button type="submit" className="btn">
            Submit Form
        </button>
    </form>
    <div className="people">
        {people && people.length > 0 && people.map(person => <div>{person}</div>)}
    </div>
</center>
}
export default Ref ; 
