
function Counter({
    onClick ,
    counter ,
}) {


    return (
        <>
            <h1>{counter}</h1>
            <button onClick={onClick}>incrementa</button>
        </>
    )
}




export default Counter;