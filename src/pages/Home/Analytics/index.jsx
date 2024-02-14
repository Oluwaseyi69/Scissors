import { FilledButton } from '../../../components/Button/FilledButton'
import style from './index.module.css'


export function Analytics(){
  return (
    <div className={style.mainThirdSection}>
      <div className={style.thirdSection}>
        
        <form className={style.form} typeof='submit' method='post'>
          <input
            placeholder='Paste URL here...'
            className={style.input}
          />
  
          <div className={style.innerForm}>
            <select name="domain" id="domain" className={style.newInput1}>
              <option>Choose Domain</option>
              <option>Hospital</option>
              <option>Church</option>
              <option>Social Media</option>
              <option>Building</option>
            </select>
  
            <input
              placeholder='Type Alias here'
              className= {style.newInput}
            />
          </div>
  
          <div>
            <FilledButton text={`Trim URL `} padding={"15px 175px"}/>
            
            <p>
              By clicking TrimURL, I agree to the <span>Terms of Service,</span><br/>
              <span>Privacy Policy</span> and Use of Cookies.
            </p>
          </div>
        </form>
          
      </div>

    </div>
  )
}

