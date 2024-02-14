import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import style from './index.module.css'

export function Card({title, charge, chargeText, info}){
  return (
    <div className={style.card}>
      <p>{title}</p>
      <span>
        <h4>{charge}</h4>
        <p>{chargeText}</p>
      </span>
      
      
      <div className={style.subCard}>
        {info.map((item, index) => (
          <p key={index}><IoMdCheckmarkCircleOutline color={"#0065FE"}/>   {item}</p>
        ))}
      </div>
      
    </div>
  )
}