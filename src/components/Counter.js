
function Counter({
    onClick ,
    counter ,
}) {
    console.log("counter rendered")


    return (
        <>
            <h1>{counter}</h1>
            <button onClick={onClick}>incrementa</button>
        </>
    )
}




export default Counter;