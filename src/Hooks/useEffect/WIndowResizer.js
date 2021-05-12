import React, { useEffect, useState } from 'react'

export default function WIndowResizer() {
  let [width, setWidth] = useState(window.innerWidth) ; 
  let [height , setHeight] = useState(window.innerHeight) ; 
  useEffect(() => {
      window.addEventListener("resize" , () => {
          setWidth(window.innerWidth) ; 
          setHeight(window.innerHeight) ; 
      })
  } , [width , height])
  return (
      <>
      <h1>{width}</h1>
      <h1>{height}</h1>
      </>

  ) 
}

