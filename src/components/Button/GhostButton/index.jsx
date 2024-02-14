
export function GhostButton({color, padding, callBack, text}){

  return(
    <button 
    className="ghost-button"
    style={{
      border: "none",
      color: color,
      padding: padding,
      background: "none",
      fontWeight: "bold",
        cursor: "pointer",
    }} onClick={() => callBack()}>
      {text}
      
    </button>
  )
}