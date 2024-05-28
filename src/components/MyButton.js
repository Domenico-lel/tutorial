function MyButton(
    {
        label = "default-label",
        callback = ()=>{
          
        }
    }
){

  
  return(
      <button onClick={callback}>{label}</button>
    )
  }


export default MyButton;