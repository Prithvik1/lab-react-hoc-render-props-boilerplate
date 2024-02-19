import { useState } from "react"

const WrapperHoc = (WrapperFunction)=>{
  function WrapperHoc(){

    const [counter,setCounter] = useState(0);

    const handleCounter = ()=>{
      setCounter(counter+1)
    }

    return(
      <WrapperFunction counter={counter} handleCounter={handleCounter}/>
    )
  }

  return WrapperHoc;
}

export default WrapperHoc;