import React, { useEffect, useState } from 'react'

export default function Example (){
    let [name , setName] = useState('') ; 
    let changeName = () => {
        let newName = prompt('What is your name ?') ; 
        if(newName === ''){
            changeName() ; 
        }
        else{
            setName(newName)
        }
    }
    useEffect(() => {
        console.log('Name was changed') ; 
    } , [name])
    return (
        <div>
            <h1>
            {name}
             </h1>
                
                <br/>
            <button onClick = {changeName}>Change Name</button>
        </div>
    )
}
