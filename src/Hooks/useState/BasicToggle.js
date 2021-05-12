import React  , {useState}from 'react'

export default function BasicToggle() {
  let firstMsg = "This is the first message"; 
  let secondMsg = 'THis is the second message' ;
  let [message , setMessage] = useState(firstMsg) ; 
  let handleToggle = () =>  {
    if(message === firstMsg){
      setMessage(secondMsg)
    }
    else{
      setMessage(firstMsg) ; 
    }
  }
    return (
      <>
      <h1>{message}</h1>
      <button onClick = {handleToggle}>ToggleMessage</button>
      </>
    )

}
