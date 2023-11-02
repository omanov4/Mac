import { Box, Heading, Image, Button, Text, } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import Vector from "../../assets/svg/Vector.svg"
import favorite from "../../assets/svg/favorite.svg"
import {BurgerMenu} from "./BurgerMenu"
import { useContext } from "react"
import { BasketContext } from "../../context/BasketContext"
import { AuthContext } from "../../context/AuthContext"
import SearchModal from "../searchModal"



const Header = () => {
    const {store} = useContext(BasketContext);
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    const check = () => {
        if(isAuth){
            localStorage.removeItem("token");
            navigate("/login")
            setIsAuth(false)
        }
        else{
            navigate("/login")
        }
    }

    return(
        <>
        <Box bg={"#212121"}
        w={"100%"}
        h={"70px"}
        color={"white"}
        >
            <Box as="nav" 
            px={"50px"} 
            color={"white"} 
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            pt={"15px"}
            >
                <Box display={{base:"flex",lg:"none"}}>
                    <BurgerMenu/>
                </Box>
                <Box display={"flex"}
                alignItems={"center"}
                gap={"50px"}
                >
                    <Link to={"/"}><Heading size={{base:"xl",lg:"lg"}}>MacBro</Heading></Link>
                </Box>

                    <Box display={{base:"none",lg:"flex"}}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={"50px"}
                    >
                    <Link to={"/mac"}>Mac</Link>
                    <Link to={"/iphone"}>iPhone</Link>
                    <Link to={"/ipad"}>iPad</Link>
                    <Link to={"/watch"}>Watch</Link>
                    <Link to={"/airpods"}>AirPods</Link>
                    <Link to={"/akustika"}>Akustika</Link>
                    <Link to={"/aksessuarlar"}>Aksessuarlar</Link>
                    </Box>

                    <Box display={{base:"none",sm:"flex"}}
                    alignItems={"center"}
                    gap={{lg:"50px",sm:"20px",md:"40px"}}
                    >
                        <Box>
                            <SearchModal />
                        </Box>
                       

                    <Link to={"/favorites"}>
                        <Box position={"relative"}>

                        <Text 
                        position={"absolute"} 
                        right={"-15px"} 
                        top={"-10px"}
                        borderRadius={"150px"} 
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        bg={"red"} 
                        w={"18px"}
                        h={"18px"}
                        >
                        {store.length}
                        </Text>
                        <Image minW={"18px"} minH={"18px"} src={favorite}/>
                        </Box>
                    </Link>
                    <Link to={"/cart"}>
                        <Image minW={"18px"} minH={"18px"} src={Vector}/>
                    </Link>
                    </Box>
                    <Box>
                        <Link to={"/login"}>
                            <Button onClick={check} colorScheme="facebook">{isAuth ? "sign out" : "login"}</Button>
                        </Link>
                    </Box>

            </Box>
        </Box>
        </>
    )
}
export default Header