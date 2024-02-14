import {FilledButton} from "../../../components/Button/FilledButton";
import {GhostButton} from "../../../components/Button/GhostButton";
import style from './index.module.css'
import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoThin } from "react-icons/pi";
import {IFilledButton} from "../../../components/Button/IFilledButton";

export const Form = () => {

    return(
        <div className={style.login}>
            <p>Log in with: </p>

            <div className={style.authButtons}>
                <IFilledButton
                    text={"Google"}
                    padding={"5px 25px"}
                    borderRadius={"3px"}
                    icon={<FcGoogle/>}
                />

                <IFilledButton
                    text={"Apple"}
                    padding={"5px 25px"}
                    borderRadius={"3px"}
                    icon={<PiAppleLogoThin/>}
                />
            </div>
            <div className={style.lineAndOr}>
                <hr />
                <p>Or</p>
                <hr/>
            </div>

            <form className={style.forms}>
                <input placeholder={"Email address or username"}/>
                <input placeholder={"Password"}/>

                <div className={style.forget}>
                    <p>Forgot your Password?</p>
                </div>

                <FilledButton text={"Login"} padding={"12px 50px"}/>
            </form>

            <div className={style.hasLogin}>
                <p>Don't have an account</p>
                <GhostButton text={"Sign Up"} padding={"12px 12px"} color={"#005AE2"}/>
            </div>

        </div>
    )
}