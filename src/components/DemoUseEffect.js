import { useEffect, useState } from "react";

function DemoUseEffect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Conteggio: ${count}`
    console.log("ciao da useEffect")
  })

  return <>
    <p>Conteggio: {count}</p>
    <button onClick={() => setCount(count + 1)}>Incrementa</button>
  </>

}


export default DemoUseEffect;