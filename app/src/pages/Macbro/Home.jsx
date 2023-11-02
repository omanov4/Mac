import { Box, Button, Card, CardBody, Grid, Heading, Image, } from "@chakra-ui/react"
import Carousel from "./MainCarousel"
import { useEffect, useState,useContext } from "react"
import axios from "axios"
import { BasketContext } from "../../context/BasketContext"
import BasicUsage from "../../Menu/Modal"



const Home = () => {


    const [data,setData] = useState([])
    useEffect(()=>{
        axios
        .get('https://dummyjson.com/products')
        .then((result)=>setData(result.data.products))
    },[])


    const [post,setPost] = useState([])
        useEffect(()=>{
        axios
        .get('https://dummyjson.com/products/category/smartphones')
        .then((res)=>setPost(res.data.products))
        .catch((error)=>console.log(error))
        },[])

        const {setBasket} = useContext(BasketContext)

        const addToBasket = (products)=>{
            setBasket(products);
        }

    return(
        <Box bg={"#EBEDE8"}>
            <Box>
                <Carousel/>
                <Heading mt={"20px"} textAlign={"center"}>Yangi Mahsulotlar</Heading>
                <Grid 
                mt={"40px"}
                display={"flex"}
                flexWrap={"wrap"} 
                alignItems={"center"}
                justifyContent={"center"}
                gap={"30px"}

                >
                {data.map((item) => {
                        return(
                            <Card 
                             w={"300px"} 
                             marginBottom={"30px"}
                             boxShadow='lg' 
                             p='6' 
                             rounded='md' 
                             bg='white'
                             textAlign={"center"}
                             key={item.id}
                             
                             >
                                <Box display={"flex"}
                                alignItems={"center"}
                                justifyContent={"space-between"}
                             >
                                <Button borderRadius={"150px"} onClick={()=>addToBasket(item)} bg={"none"} >

                                    <svg width="23" height="23" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.467 9.55034L10.9167 18L19.3663 9.55034C20.3056 8.61103 20.8333 7.33706 20.8333 6.00867C20.8333 3.24246 18.5909 1 15.8247 1C14.4963 1 13.2223 1.5277 12.283 2.46701L10.9167 3.83333L9.55034 2.46701C8.61103 1.5277 7.33706 1 6.00867 1C3.24246 1 1 3.24246 1 6.00867C1 7.33706 1.5277 8.61103 2.467 9.55034Z" stroke="black" stroke-linejoin="round"/>
                                    </svg>

                                </Button>
                                </Box>
                                <CardBody textAlign={"center"}>
                                    <Image 
                                    mb={"15px"}
                                    w={"100%"} 
                                    h={"200px"} 
                                    objectFit={"cover"}
                                    src={item.images[0]}
                                    />
                                    <Heading pb={"10px"} size={"sm"}>{item.title}</Heading>
                                    <Heading color={"red"} size={'sm'} pb={"10px"}>${item.price}</Heading>
                                        <BasicUsage/>
                                </CardBody>
                            </Card>
                        )
                    })}
                </Grid>
                <Box display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                my={"50px"}
                >
                    <Box h={"600px"}>
                        <Image borderRadius={"12px"} h={"550px"} src="https://cdn.macbro.uz/macbro/8b59a7e3-6940-4f65-9d97-8cedc615e98d"/>
                    </Box>
                </Box>

                <Box>
                    <Heading  textAlign={"center"}>Apple</Heading>
                    <Box display={"flex"}
                    mt={"40px"}
                    flexWrap={"wrap"} 
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"30px"}
                   >
                    {
                        post.map((item) =>{
                            return(

                                <Card 
                                w={"300px"} 
                                marginBottom={"30px"}
                                boxShadow='lg' 
                                p='6' 
                                rounded='md' 
                                bg='white'
                                key={item.id}
                                >
                                    <Box display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                    >
                                        <Button borderRadius={"150px"} onClick={()=>{addToBasket(item)}} bg={"none"}>

                                <svg width="20" height="20" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.467 9.55034L10.9167 18L19.3663 9.55034C20.3056 8.61103 20.8333 7.33706 20.8333 6.00867C20.8333 3.24246 18.5909 1 15.8247 1C14.4963 1 13.2223 1.5277 12.283 2.46701L10.9167 3.83333L9.55034 2.46701C8.61103 1.5277 7.33706 1 6.00867 1C3.24246 1 1 3.24246 1 6.00867C1 7.33706 1.5277 8.61103 2.467 9.55034Z" stroke="black" stroke-linejoin="round"/>
                                </svg>

                                        </Button>
                                    </Box>
                               <CardBody textAlign={"center"}>

                                   <Image 
                                   mb={"15px"}
                                   w={"100%"} 
                                   h={"200px"} 
                                   objectFit={"cover"}
                                   src={item.images[0]}
                                   />
                                   <Heading pb={"10px"} size={"sm"}>{item.title}</Heading>
                                   <Heading color={"red"} size={'sm'} pb={"10px"}>${item.price}</Heading>
                                   <BasicUsage/>
                               </CardBody>
                            </Card>
                            )
                        })
                    }
                    </Box>
                </Box>
                <Box 
                h={"600px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                >
                    <Image borderRadius={"12px"} h={"550px"} src="https://cdn.macbro.uz/macbro/1bfffc3a-bc1d-4336-a80a-efc2bd3fee73"/>
                </Box>
            </Box>
        </Box>
    )
}
export default Home