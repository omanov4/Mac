import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../pages/Macbro/Home"
import Favorite from "../pages/Favorite"
import Mac from "../pages/Mac"
import Iphone from "../pages/Iphone"
import Login from "../components/Login"
import Registor from "../components/Registor"

const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/mac",
                element:<Mac/>
            },
            {
                path:"/iphone",
                element:<Iphone/>
            },
            {
                path:"/ipad",
                element:<h1>iPad</h1>
            },
            {
                path:"/watch",
                element:<h1>Watch </h1>
            },
            {
                path:"/airpods",
                element:<h1>AirPods</h1>
            },
            {
                path:"/akustika",
                element:<h1>Akustika</h1>
            },
            {
                path:"/aksessuarlar",
                element:<h1>Aksessuarlar</h1>
            },
            {
                path:"/search",
                element:<h1>Search</h1>
            },
            {
                path:"/favorites",
                element:<Favorite/>
            },
            {
                path:"/cart",
                element:<h1>korzinka</h1>
            },
            {
                path:"/login",
                element:<Login/>,
            },
            {
                path:"/register",
                element:<Registor/>
            }
        ]
    }
])
export default router

