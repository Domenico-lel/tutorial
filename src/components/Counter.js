import { useState } from "react"

function Counter() {

    const [conto, setConto] = useState(1)


    
    function countIncrement(){
        setConto(conto + 1)
    }



    return (
        <>
            <h1>{conto}</h1>
            <button onClick={countIncrement}>incrementa</button>
        </>
    )
}




export default Counter;