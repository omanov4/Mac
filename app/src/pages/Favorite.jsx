import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { BasketContext } from "../context/BasketContext"


const Favorite = () => {
    const {setStore,store} = useContext(BasketContext)

    const onDelete = ()=>{
        localStorage.removeItem("basket-product")
        setStore({})
    }

    const deleteOne = (id) => {
        const newData = store.filter((item) =>item.id !== id)
            setStore(newData)
    }
    return(
        <Box px={"10px"}>
            <Heading mt={"30px"} mb={"50px"} textAlign={"center"}>Sizning sevimli tovarlaringiz</Heading>
            {
                !store.length && <Heading size={"md"} textAlign={"center"} mb={"50px"}>Malumot yo'q</Heading>
            }
                {
                    store.map((products)=>{
                        return(
                            <HStack 
                            border={"1px solid gray"}
                            p={"10px"}
                            mb={"20px"}
                            key={products.id}
                            >
                            <Image
                            src={products.images[0]}
                            w={"250px"}
                            h={"250px"}
                            objectFit={"cover"}
                            />
                            <Box>
                                <Heading size={"md"}>{products.title}</Heading>
                                <Text>{products.description}</Text>
                                <Text as={"b"}>${products.price}</Text>
                            </Box>
                           <Box display={"flex"}
                           alignItems={"end"}
                           justifyContent={"end"}
                           textAlign={"end"}
                           >
                                <Button onClick={()=>deleteOne(products.id)} colorScheme="red">Delete</Button>
                            </Box>
                          </HStack>
                               )
                        })
                }
                <Box 
                display={"flex"} 
                alignItems={"end"} 
                justifyContent={"end"} 
                mb={"10px"} 
                pr={"10px"}
                >
                    <Button 
                    textAlign={"end"} 
                    colorScheme="red"
                    onClick={onDelete}
                    >Delete all</Button>
                </Box>
        </Box>
    )
}
export default Favorite