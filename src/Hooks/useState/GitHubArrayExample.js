import React, { useEffect, useState } from 'react'

export default function GitHubArrayExample() {
    let APIURL = "https://api.github.com/users";
    let getUser = async() => {
        let response = await fetch(APIURL) ; 
        let data = await response.json() ; 
        console.log(data) ; 
        setUsers(data) ; 
    }

    let deleteUser = (index) => {
        let filtered = users.filter(user => {
            if(user !== users[index]){
                return user ; 
            }
        }) ; 
        setUsers(filtered) ; 
    }

    useEffect(() => {
        getUser() ; 
    } , [])
    let [users , setUsers] = useState([]) ;  
    return(
        <>
        <center>
        {users.length > 0 || <h1>No Users Found</h1>}
        {users.length < 0 || users.map((user , index) => {
            return (
                <div key = {index}>
                    <img src={user.avatar_url} />
                    <h1>{user.login}</h1>
                    <button onClick = {() => deleteUser(index)}>Delete Item</button>
                </div>
            )
        })}

        </center>
        </>
    )

}
