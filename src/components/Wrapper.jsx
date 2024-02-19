import React, { useState } from 'react'

export default function Wrapper(props) {

  const [counter, setCounter] = useState(0);

  const handleIncreament = ()=>{
    setCounter(counter+1);
  }

  return (
    <div>
      {props.render(counter, handleIncreament)}
    </div>
  )
}