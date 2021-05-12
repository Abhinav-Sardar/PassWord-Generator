import React, { useState } from 'react'

export default function ChangeTitle() {
    let [title , setTitle] = useState("") ; 
    let [value , setValue] = useState("") ; 
    document.title = title ; 

    return (
        <div>
            <input type="text" value = {value} onChange = {event => {
                setValue(event.target.value) ; 
                setTitle(prevValue => {
                    return value ; 
                })
            }}/>
            {/* <button onClick = {changeTitle}>Change Title</button> */}
        </div>
    )
}

