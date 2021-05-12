import React , { useState , useEffect } from 'react'


export default function FetchApiResource() {
    let postsUrl = 'https://jsonplaceholder.typicode.com/posts' ; 
    let usersUrl = 'https://jsonplaceholder.typicode.com/users' ; 
    let commentsUrl = 'https://jsonplaceholder.typicode.com/comments' ; 
    let [resourceType , setResourceType] = useState("posts") ; 
    let [resourceData , setResourceData] = useState([]) ; 
    useEffect(() => {
        if(resourceType === "posts"){
            fetch(postsUrl).then(result => {
                return result.json().then(data => {
                    console.log(data) ; 
                    setResourceData(data) ; 
                })
            })
        }
        else if(resourceType === "users"){
            fetch(usersUrl).then(result => {
                return result.json().then(data => {
                    console.log(data) ; 
                    setResourceData(data) ; 
                })
            })
        }
        else{
            fetch(commentsUrl).then(result => {
                return result.json().then(data => {
                    console.log(data) ; 
                    setResourceData(data) ; 
                })
            })
        }
    } , [resourceType])
    return (
        <>
        <button onClick = {() => setResourceType('posts')}>Posts</button>
        <button onClick = {() => setResourceType('users')}>Users</button>
        <button onClick = {() => setResourceType('comments')}>Comments</button>
        <h1>{resourceType}</h1>
        <div>
            {resourceType === 'posts' && <div>
            {resourceData.map(data => {
                return <div key = {data.id}>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                </div>
            })}    
            </div>}
            {resourceType === 'users' && <div>
            {resourceData.map(data => {
 
                return <div style = {{border:'1px solid black'}} key = {data.id}>
                    <h2>{data.name}</h2>
                    <h2>Email :{data.email}</h2>
                </div>
            })}   

            </div>}
            {resourceType === "comments" && <div>
            {resourceData.map(comment => {
                return <div key = {comment.id}>
                    <h1>{comment.email}</h1>
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                </div>
            })}
            
            </div>}
        </div>
        </>
    
    )
}
