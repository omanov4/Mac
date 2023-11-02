import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer"





const Layout = () => {
    return(
        <Box>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Box height={"auto"}>
                <Footer/>
            </Box>
        </Box>
    )
}

export default Layout