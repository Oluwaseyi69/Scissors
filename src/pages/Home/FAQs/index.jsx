import style from './index.module.css'
// import Line from '../../assets/Line 70.png'
import { GoDash } from "react-icons/go";
import { GoPlus } from "react-icons/go";

export function FAQs() {
    return(
        <div className={style.firstDiv}>
            <div className={style.faq}>
                {/*<img src={Line} />*/}
                <p>FAQs</p>
            </div>

            <div className={style.ques}>
                <ul>
                    <p>How does URL shortening work? <GoDash className={style.sign}/></p>
                    <p className={style.span1}>URL shortening works by taking a long URL and creating a shorter, condensed version that redirects<br/>
                        to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                    </p>
                    <hr />
                    <p>Is it necessary to create an account to use the URL shortening service? <GoPlus className={style.sign} /></p>
                    <hr />
                    <p>Are the shortened links permanent? Will they expire? <GoPlus className={style.sign}/></p>
                    <hr />
                    <p>Are there any limitations on the number of URLs I can shorten? <GoPlus className={style.sign}/></p>
                    <hr />
                    <p>Can I customize the shortened URLs to reflect my brand or content? <GoPlus className={style.sign}/></p>
                    <hr />
                    <p>Can I track the performance of my shortened URLs? <GoPlus className={style.sign}/></p>
                    <hr />
                    <p>How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity? <GoPlus className={style.sign}/></p>
                    <hr />
                    <p>What is a QR code and what can it do? <GoPlus className={style.sign}/></p>
                    <hr />
                    <p>Is there an API available for integrating the URL shortening service into my own applications or websites?<GoPlus className={style.sign}/></p>
                    <hr />
                </ul>
            </div>
        </div>
    )
}