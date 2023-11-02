import { Box, Button, Container, Heading, Input, Text } from "@chakra-ui/react"
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {setIsAuth} = useContext(AuthContext)
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errorMsg,setErrorMsg] = useState('')
  const navigate = useNavigate()

  async function login () {
    try {
      await axios
      .post("http://localhost:5000/auth/login",{
        username:email,
        password,
      })
      .then((result) =>{
        if(result.status === 200){
          localStorage.setItem("token",JSON.stringify(result.data.token));
          setIsAuth(true);
          navigate("/")
        }
      })
    } catch (error) {
     setErrorMsg(error.response.data.message);
    }
  }

  const onLogin = () => {
    if(email.length> 3 && password.length>3 ){
      login()
    }
    else{
      setErrorMsg("input ichiga 3 dan kop malumot kiriting")
    }
  }

    return(
        <Container>
            <Box border={"1px solid gray"} my={"100px"} p={"20px"} borderRadius={"8px"}>
                <Heading mb={"20px"} size={"md"} textAlign={"center"}>Login</Heading>
                <Input  
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder="email"/>
                <Input  
                onChange={(e)=>setPassword(e.target.value)} 
                my={"20px"} 
                placeholder="password"/>
                <Text as={"b"} color={"red"}>{errorMsg}</Text>
                <Button onClick={onLogin} mb={"10px"} w={"100%"} colorScheme="green">Login</Button>
                <Link to={"/register"}>Register</Link>
            </Box>
        </Container>
    )
}
export default Login