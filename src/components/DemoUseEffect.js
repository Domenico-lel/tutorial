import { useEffect, useState } from "react";

function DemoUseEffect() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log("ciao da useEffect")
  }, [count])

  document.title = `Conteggio: ${count}`
  return <>
    <p>Conteggio: {count}</p>
    <button onClick={() => setCount(count + 1)}>Incrementa</button>

    <p>Conteggio: {count2}</p>
    <button onClick={() => setCount2(count2 + 1)}>Incrementa</button>
  </>

}


export default DemoUseEffect;