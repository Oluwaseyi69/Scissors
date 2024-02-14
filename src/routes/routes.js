import Home from "../pages/Home";
import {Layout} from "../Layout/Layout";
import About from "../pages/About"
import {Form} from "../pages/Login/Form";
import {Login} from "../pages/Login";
import Features from "../pages/Features";
import Analytics from "../pages/Analytics";
import FAQ from "../pages/FAQ";
import Pricing from "../pages/Pricing";
import {Signup} from "../pages/Signup";
import {Sign} from "../pages/Signup/Signupform";

export const ROUTES = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "features/",
        element: <Features/>,
      },
      {
        path: "analytics/",
        element: <Analytics/>,
      },
      {
        path: "faq/",
        element: <FAQ/>,
      },
      {
        path: "pricing/",
        element: <Pricing/>,
      },
      {
        path: "about/",
        element: <About/>,
      },
    ]
  },
  {
    path: '/login',
    element: <Login/>,
    children: [
      {
        path: '',
        element: <Form/>,
      }
    ]
  },
  {
    path: '/signup',
    element: <Signup/>,
    children: [
      {
        path: '',
        element: <Sign/>,
      }
    ]
  }

]
