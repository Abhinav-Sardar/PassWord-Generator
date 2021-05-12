import React  , {useState}from 'react'

export default function Arrayexample() {
    let data = [
        {id:1 , name:'ABhinav'} , 
        {id:2 , name:"Rahul"} , 
        {id:3 , name:"Rohit"} , 
        {id:4 , name:"Peter"}
      ]
      let [people , setPeople] = useState(data) ;
      let removePerson = (removeIndex) => {
        let notRemoved  = people.filter(person => {
          if(person.id !== removeIndex){
            return person ; 
          }
        }) ; 
        setPeople(notRemoved)
      }
    
      return(
        <>
        <h1>
          {people.map(person => <>
          <span key = {person.id}>{person.id}:{person.name}</span>
          <br/>
          <button onClick = {()=>removePerson(person.id)}>Remove Person</button><br/>
          </>)}
        </h1>
        <button onClick = {()=> setPeople([])}>CLear People</button>
        </>
      )
}
