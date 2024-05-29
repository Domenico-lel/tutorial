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