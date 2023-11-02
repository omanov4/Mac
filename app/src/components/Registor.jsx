import { Box, Button, Container, Heading, Input, Text } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import axios from "axios";
// import { useState } from "react"
// import { Link } from "react-router-dom"


const Register = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorMsg,setErrorMsg] = useState('')
    const navigate = useNavigate()


    async function register(){
        try{
          await axios 
          .post("http://localhost:5000/auth/register",{
            username:email,
            password,
          })
          .then((result) => {
            if (result.status === 200) {
                navigate("/login")
            } else {
                
            }
          })
        }
        catch(e){
          setErrorMsg(e.response.data.message);
        }
      }
      const onRegister = () =>{
        register();
      }


    return(
        <Container >
            <Box border={"1px solid gray"} my={"100px"} p={"20px"} borderRadius={"8px"}>
                <Heading mb={"20px"} size={"md"} textAlign={"center"}>Registor</Heading>
                <Input  onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
                <Input  onChange={(e)=>setPassword(e.target.value)} my={"20px"} placeholder="password"/>
                <Text  as={"b"} color={"red"}>{errorMsg}</Text><br/>
                <Button onClick={onRegister} mb={"10px"} w={"100%"} variant={"outline"} border={"1px solid green"}>
                    Registor
                    </Button>
                <Text color={"red"}></Text>
                <Link color="blue" to={"/login"}>Login</Link>
            </Box>
        </Container>
    )
}
export default Register