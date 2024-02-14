import { FaFacebookSquare } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import style from './index.module.css';
import FooterContent from './data';

const logo = require('../../assets/images/Logo1.png')

function Footer() {
  return (
    <div className={style.footer} >
      <div className={style.footerMain}>
        <div className={style.leftFooter}>
          <img src={logo} alt="logo" width={150} />
          <div className={style.logos}>
            <FaTwitter className={style.logoStyle} />
            <LuInstagram className={style.logoStyle}/>
            <FaLinkedin className={style.logoStyle}/>
            <FaFacebookSquare className={style.logoStyle}/>
          </div>
        </div>

        <div className={style.footerRight}>
          {FooterContent.map(item => (
            <div className={style.footerRightChildren} key={item.title}>
              <h3>{item.title}</h3>

                {item.text.map((item, index) => (
                  <p key={index}>
                    {item}
                  </p>
                ))}

            </div>
          ))}

        </div>
      </div>

      <div className={style.lastLast}>
        <p>Term of Service | Security | Scissor 2023</p>
        
      </div>
      
    </div>
  );
}

export default Footer;