import React  , {useState} from 'react'

export default function COunter() {
  let [number , setNumber] = useState(0) ; 
  return (
<>
<h1>{number}</h1>
    <button onClick = {() => setNumber(++number)}>Add</button>
    <button onClick = {() => setNumber(--number)}>Subtract</button>
    <button onClick = {() => setNumber(0)}>Reset</button>
    
</>
  )
}
