import Topnav from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
         <Topnav/>
         <Outlet/>
        </>
    )
}
export default Layout;