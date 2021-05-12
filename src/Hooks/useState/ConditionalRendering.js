import React, { useEffect, useState } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

export default function ConditionalRendering() {
    let [isLoding , setLoading] = useState(true) ; 
    let [isError , setError] = useState(false) ; 
    let [data , setData] = useState('Default Data') ; 
    useEffect(() => {
        fetch('https://api.github.com/users/QuincyLarson').then(result => {
            if(result.status >= 200 && result.status <= 300){
                return result.json().then(data => {
                    setLoading(false) ; 
                    setData(data.name) ; 
                })

            }
            else{
                // alert('')
                setLoading(false)
                setError(true) ; 
            }
        })
    } , [])

    let ConditionalRendering = () => {
        if(isLoding){
            return <center>
                <h2>
                    Loading....
                </h2>
            </center>
        }
        else if (isError){
            return <center>
                <h2>
                    Error!!!
                </h2>
            </center>
        }
        else{
            return <h1>{data}</h1>
        }
    }
    return (
        <>
        <ConditionalRendering/>
        </>
    )
}
console.log(__filename)
