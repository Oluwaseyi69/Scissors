

export function OutlineButton(props){

  return(
    <button 
    className="outlinedButton" 
    style={{
      background: "none", 
      border: "2px solid",
      fontSize: props.fontsize,
      borderColor: props.borderColor,
      padding: "12px 24px",
      borderRadius: "20px",
      color: props.borderColor,
      fontWeight: "600",
      
      }}>
      
      {props.text}
      
    </button>
  )
}