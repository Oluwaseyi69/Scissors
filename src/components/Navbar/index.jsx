
import  { FilledButton } from "../Button/FilledButton";
import { GhostButton } from "../Button/GhostButton";
import { MdKeyboardArrowDown } from "react-icons/md";
import style from './index.module.css';
import {Link, useNavigate} from "react-router-dom";

const Logo = require('../../assets/images/Logo.png');

function Navbar() {
    const navigate = useNavigate();

    function gotoLoginForm(){
        navigate('/login')
    }



  return (

      <div className={style.navbar}>
          <div>
              <img src={Logo} alt="logo"/>
          </div>

          <div className={style.navbarList}>
              <p style={{color: "#0065FE"}}>MyURLs</p>
              <div style={{display: "flex", alignItems: "center"}}>
                  <Link to={"/features"}>Features</Link>
                  <MdKeyboardArrowDown size={30}/>
              </div>
              <p>
                  <Link to={"/pricing"}>Pricing</Link>
              </p>
              <p>
                  <Link to={"/analytics"}>Analytics</Link>
              </p>
              <p>
                  <Link to={"/faq"}>FAQs</Link>
              </p>
          </div>


          <div>
              <GhostButton text="Login" color="#0065FE" padding="12px 24px" callBack={gotoLoginForm}/>
              <FilledButton bgColor="blue" text="Try for free"/>
          </div>
      </div>
  );
}

export default Navbar;