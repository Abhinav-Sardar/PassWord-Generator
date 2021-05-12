import React, { useEffect, useState } from 'react'

export default function APIFetch() {
    let urldAdress = 'https://api.github.com/users' ; 
    let [users , setUsers]  = useState([]); 
    let fetchPeople = async()  => {
        let result = await fetch(urldAdress) ; 
        let data = await result.json() ; 
        // document.write(data) ; 

        setUsers(data) ; 
    }
    useEffect(() => {
        fetchPeople() ; 
        console.log('First Triggered done')
    } , [])
    return (
        <div>
            <center>
                <h1>
                    GitHub Users
                </h1>
                <div className="parent">
                    {users.map(user => {
                        return (
                            <div>
                                <h1>
                                    {user.login}
                                </h1>
                                <img src={user.avatar_url} alt=""/>
                            </div>
                        )
                    })}
                </div>
            </center>
        </div>
    )
}
