import style from "./index.module.css";

export function IFilledButton({icon,text, color, padding, borderRadius}){

    return(
        <button
            className={style.iconFilledButton}
            style={{
                color: color,
                padding: padding,
                borderRadius: borderRadius,

            }}>
            <p>{icon}</p>
            {text}
        </button>
    )
}