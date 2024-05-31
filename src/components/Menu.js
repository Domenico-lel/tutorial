import MyButton from "./MyButton";



function Menu(
    {
        items = []
    }
) {
    console.log("menu rendered")

    return (
        <div>


            {
                //per ogni item all' interno di items ritorna un conponente myButton con label
                items.map(
                    (item )=> {
                        // callback anonimous function (similar to renderItem)
                        return (
                            <>
                        
                               <MyButton label={item}/>
                                <br />
                            </>
                        )
                    }
                )
            }
        </div>
    )
}

function renderItem(item){
    return (
        <>
           <MyButton label={item}/>
            <br />
        </>
    )
}


export default Menu;