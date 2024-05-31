import { useState } from "react";

function LocalCounter(){

    console.log("counter rendered")


    const [contoLocale, setContoLocale] = useState(1)

    function contoLocaleIncrement() {
        setContoLocale(contoLocale + 1)
    }


    return(
        <>
            <h1>{contoLocale}</h1>

            <button onClick={contoLocaleIncrement}>incrementa</button>
        
        </>
    )

}



export default LocalCounter;