import React from 'react'

export default function Basic() {
    let [count , setCOunt] = useState(0); 
    let babaBueeeeeeeeeee = "YH"
    useEffect(() => {
      if(count >= 20){
        document.title = `Messages Count :${count}` ; 
        console.log("Messages have reached the target") ; 
      }
      else{
        console.log("Messages should be atlest 20 in number")
      }
      console.log("Componenet Rendered")
      
    }, [count , document.title  , babaBueeeeeeeeeee]) ; 
    
  
  
    return(
      <> 
      <h1>{count}</h1>
      <button onClick = {()=>setCOunt(count+1)}>Increment</button>
      {/* <button onClick = {()=>setCOunt(count -1)}>Decrement</button> */}
      </>
    )
}
