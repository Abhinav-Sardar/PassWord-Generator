import React, { forwardRef, useEffect, useState } from 'react' ; 
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom' ; 

export default function Basics() { 
    let [name , setName] = useState(''); 
    let [email , setEmail] = useState('') ; 
    let [password , setPwd] = useState('') ; 
    return (
        <React.Fragment>
            <form>
                Name<input
                 type="text"
                 value = {name}
                 
                 /><br/>
                Email<input 
                type="text"
                value = {email}
                /><br/>
                Password<input
                 type="password"
                 value = {password}
                 /><br/>
                <button type="submit">Submit Data</button>
            </form>
        </React.Fragment>
    )
}
