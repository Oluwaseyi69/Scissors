import style from "../../Login/Form/index.module.css";
import {IFilledButton} from "../../../components/Button/IFilledButton";
import {FcGoogle} from "react-icons/fc";
import {PiAppleLogoThin} from "react-icons/pi";
import {FilledButton} from "../../../components/Button/FilledButton";
import {GhostButton} from "../../../components/Button/GhostButton";

export const Sign = () => {

    return(
        <div className={style.login}>
            <p>Sign up with: </p>

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
                <input placeholder={"Username"}/>
                <input placeholder={"Email"}/>
                <input placeholder={"Password"}/>
                <input placeholder={"Retype Password"}/>

                <div className={style.forget}>
                    <p>6 or more characters, one number, one uppercase & one lower case  </p>
                </div>

                <FilledButton text={"Sign up with Email"} padding={"12px 50px"}/>
            </form>

            <div className={style.hasLogin}>
            <p>Already have an account? <span>Log in</span></p>
                <GhostButton text={"Login"} padding={"12px 12px"} color={"#005AE2"}/>
            </div>

        </div>
    )
}