import style from './index.module.css'
import Content from './data'
import Icon1 from '../../../assets/images/Group 6.png'
import Icon2 from '../../../assets/images/Group2.png'
import Icon3 from '../../../assets/images/Group3.png'
import Icon4 from '../../../assets/images/Group4.png'

export function Features(){

  return(
    <div className={style.FirstSectionMain}>

      <div className={style.upperFirstSection}>
        <div className={style.LeftUpperFirstSection}>
          <p>
            One Stop.<br/>
            Four <span>Possibilities.</span>
          </p>
        </div>

        <div className={style.RightUpperFirstSection}>
          {Content.map(item => (
            <div className={style.rightContent} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>

      <div className={style.lowerFirstSection}>
          
        <div className={style.leftLowerFirstSection}>
          <p className={style.whyChoose}>
            Why choose 
            <span> Scissors</span>
            
          </p>
          <p className={style.leftLowerSecond}>
            Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. 

          </p>
        </div>

        <div className={style.rightLowerSection}>
          <div className={style.subRight}>
            <img src={Icon1} alt=''/>
            <div className={style.subSubRight}>
              <p className={style.urlShortening}>
                URL Shortening
              </p>
              <p className={style.scissors}>
                Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.
              </p>
            </div>
          </div>


          <div className={style.subRight}>
              <img src={Icon2} alt=''/>
            <div className={style.subSubRight}>
              <p className={style.urlShortening}>
                Custom URLs
              </p>
              <p className={style.scissors}>
                With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.
              </p>
            </div>
          </div>

          <div className={style.subRight}>
              <img src={Icon3} alt=''/>
            <div className={style.subSubRight}>
              <p className={style.urlShortening}>
                QR Codes
              </p>
              <p className={style.scissors}>
                Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.
              </p>
            </div>
          </div>

          <div className={style.subRight}>
              <img src={Icon4} alt=''/>
            <div className={style.subSubRight}>
              <p className={style.urlShortening}>
                Data Analytics
              </p>
              <p className={style.scissors}>
                Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}

