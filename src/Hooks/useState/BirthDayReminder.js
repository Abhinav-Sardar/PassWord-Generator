import React, { useState } from 'react'   ; 



export default function BirthDayReminder() {
  
    let names = ["ABhinav" , "Mosh" , 'Sarah' , 'Tom' , 'Peter' , 'Rahul' , 'ROhit' , 'Anika' , 'James' , 'RandomBoi69'] ; 
    let [nameList , setNameList] = useState(names) ;
    let removeName = (index) => {
      let filteredNames = nameList.filter(name => {
        if(name !== nameList[index]){
          return name ; 
        }
      }) ; 
      setNameList(filteredNames); 
    }
  
    let BirthDayCard = ({name , index}) => {
      let randomDate = Math.floor(Math.random()*31) ; 
      return(
        <div style = {{border:"1px solid black"}}>
          <h1>{index} . Wish {name} a very happy birthday on {randomDate} 🍰 </h1>
          <button onClick = {() => removeName(index - 1)}>Remove Name</button>
        </div>
      )
    }
   
    return (
      <>
      {nameList.map(( name , index) => {
        return (
          <>
          <BirthDayCard name = {name} index = {index + 1} />
         
          </>
        )
      })}
      <button onClick = {() => setNameList([])}>Clear Names</button>
      </>
    )
}
