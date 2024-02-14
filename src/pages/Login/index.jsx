import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer";

export const Login = () => {
    return(
        <>
            <Outlet/>
            <Footer/>
        </>
    )
}