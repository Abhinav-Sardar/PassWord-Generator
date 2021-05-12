import React, { useEffect, useState } from 'react'

export default function ToggleHidAndShow() {
    let [isHidden , setIsHidden] = useState(false) ; 
    let displayText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi perspiciatis ad esse, consectetur id nostrum dolore quia! Eos, architecto sapiente facilis optio delectus repellendus deleniti aliquam alias nostrum, voluptatibus culpa placeat omnis debitis illo ullam obcaecati amet saepe dicta aperiam." ; 
    return (
        <>
        <center>
            <h1>
                Toggle Text
            </h1>
            <h3>
                {isHidden ? "" : String(displayText) }
            </h3>
            <button onClick = {() => setIsHidden(prevState => !prevState)}>Toggle Text</button>
        </center>
        </>
    )
}