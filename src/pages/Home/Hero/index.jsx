import style from './index.module.css'
import blueLine from '../../../assets/images/Vector 3.png'
import { FilledButton } from '../../../components/Button/FilledButton'
import { GhostButton } from '../../../components/Button/GhostButton'
import triangle from '../../../assets/images/Vector 2.png'
import bracketDash from '../../../assets/images/dashbracket.png'
import layDown from '../../../assets/images/Rectangle 9.png';
import ellipse from '../../../assets/images/Ellipse 1.png'
import {useNavigate} from "react-router-dom";

export function Hero(){
  const navigate = useNavigate();


  function signupForm(){
    navigate('/signup')
  }
  
  return(

    <div className={style.heroMain}>
      <div className={style.heroFirst}>

        <>
          <p className={style.heroText}>
            Optimize Your Online Experience with Our
          </p>
          <p className={style.heroText}>
            Advanced <span>URL Shortening</span> Solution
          </p>
          <img 
            src={blueLine}
            alt='line'
          />
        </>
        
        <div className={style.lower}>
          <p>
            Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.
          </p>

          <div className={style.lowerButtons}>
            <FilledButton text="Sign Up" bgColor="#005AE2" color="white" padding="15px 40px" callBack={signupForm}/>
            <GhostButton text="Learn more" color="#005AE2" padding="10px 24px"/>cursor
          </div>
        </div>
        

      </div>

      <div className={style.overlap}>
        <img src={triangle} alt="" />

        <div className={style.bracketDash}>
          <img src={bracketDash} alt=''/>
          <p>
            Seamlessly transform your long URLs into concise and shareable links with just few clicks.
          </p>
        </div>
      </div>

      <div className={style.heroEnd}>
        <img src={layDown} alt='' className={style.layDown}/>
        <img src={ellipse} alt='' className={style.ellipse}/>
      </div>
      
    </div>
  )
}