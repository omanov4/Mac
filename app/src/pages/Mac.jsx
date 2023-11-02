import { Box, Button, Card, CardBody, Heading, Image, Link, Text } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { BasketContext } from "../../src/context/BasketContext"
import BasicUsage from "../Menu/Modal"



const Mac = () => {


    const [data,setData] = useState([])
    useEffect(()=>{
    axios
    .get('https://dummyjson.com/products')
    .then((res)=>setData(res.data.products))
    .catch((error)=>console.log(error))
    },[])


    const {setBasket} = useContext(BasketContext)
    const addToBasket = (products)=>{
        setBasket(products);
    }


    return(
        <Box mb={"50px"} bg={"#EBEDE8"}>
            <Box px={"50px"} pt={"40px"}>
                <Heading size={"xl"} >Mac</Heading>
                <Text mt={"15px"}>
                    MacBro internet-do‘koni Toshkentda MacBook noutbuklarini xarid qilishni taklif qiladi . Kompaniya 14 yildan ortiq vaqt davomida ushbu elektronikani yetkazib berishga ixtisoslashgan. Biz Apple kompaniyasining O'zbekistondagi distribyutorimiz bo'lib, Amerikaning yetakchi ishlab chiqaruvchisidan mashhur noutbuklarni xarid qilish uchun maqbul shart-sharoitlarni ta'minlash imkonini beradi. Katalogning ushbu bo'limida keltirilgan mahsulotlar haqida ma'lumot va MacBro internet do'konida Macbook noutbuklarini O'zbekistonda xarid qilishning afzalliklari bilan tanishing . Sharh shuningdek, xaridorlarning tez-tez so'raladigan savollariga javob beradi.
                </Text>
            </Box>
            <Box my={"50px"} bg={"white"}>
                
                <Box border={"1px solid gray"}
                h={"70px"}
                borderX={"none"}
                >
                    <Box display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    px={"50px"}
                    pt={"20px"}
                    >
                    <Link>Barchasini ko'rish</Link>
                    <Box display={{base:"none",md:"flex"}}>
                    <Link _hover={"none"} display={"flex"} alignItems={"center"} gap={"10px"}>
                        <Text size={"xl"}>Saralash turi:</Text>
                        <Text>Eng yangi</Text>
                    </Link>
                    </Box>
                    </Box>
                </Box>

                <Box display={"flex"}
                flexWrap={"wrap"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"30px"}
                >
                    {
                        data.map((product) =>{
                            return(
                                <Card w={"300px"}
                                marginBottom={"30px"}
                                boxShadow={"2xl"}
                                p={"6"}
                                rounded={"md"}
                                bg={"white"}
                                key={product.id}
                                mt={"40px"}
                                >
                                    <Box display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                    >
                                        <Button  bg={"none"} borderRadius={"50%"} onClick={()=>{addToBasket(product)}}>
                                            <svg width="20" height="20" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.467 9.55034L10.9167 18L19.3663 9.55034C20.3056 8.61103 20.8333 7.33706 20.8333 6.00867C20.8333 3.24246 18.5909 1 15.8247 1C14.4963 1 13.2223 1.5277 12.283 2.46701L10.9167 3.83333L9.55034 2.46701C8.61103 1.5277 7.33706 1 6.00867 1C3.24246 1 1 3.24246 1 6.00867C1 7.33706 1.5277 8.61103 2.467 9.55034Z" stroke="black" stroke-linejoin="round"/>
                                            </svg>
                                        </Button>
                                                </Box>
                                        <Box>
                                            <CardBody textAlign={"center"}>
                                                <Image 
                                                mb={"15px"} 
                                                w={"100%"}
                                                h={"200px"}
                                                objectFit={"cover"}
                                                 src={product.images[0]}/>
                                                 <Heading pb={"10px"} size={"sm"}>{product.title}</Heading>
                                                 <Heading pb={"10px"} size={"sm"} color={"red"}>${product.price}</Heading>
                                                 <BasicUsage/>
                                            </CardBody>
                                        </Box>
                                </Card>
                            )
                        })
                    }
                </Box>
                <Box px={"50px"} my={"50px"}>
                    <Heading size={"md"}>MacBro onlayn-do'konida Apple noutbuklari assortimenti</Heading>
                    <Text py={"15px"} size={"sm"}>
                        Apple ishlab chiqaruvchi kompaniyasining eng mashhur pozitsiyalaridan birining qatorini taqdim etadi . Bu yerda taklif qilingan MacBook modellari Pro , Air va Mini . Assortimentda turli xil displey o'lchamlari va protsessorlariga ega noutbuklar mavjud. Katalogda siz turli xil rangdagi modellarni tanlashingiz mumkin, turli hajmdagi RAM va o'rnatilgan xotira. Onlayn do'konimizda taqdim etilgan Apple noutbuklarining har biri haqida batafsil ma'lumotni uning tavsifi bilan sahifada topishingiz mumkin. Agar qo'shimcha savollaringiz bo'lsa, yordam xizmatiga murojaat qilishingizni tavsiya qilamiz. 
                    </Text>
                    <Heading size={"md"}>MacBook’ga qayerdan buyurtma berish mumkin: MacBro’da xaridorlar uchun imkoniyatlar</Heading>
                    <Text pt={"15px"} size={"sm"}>
                        Katta tanlov bizning taklifimizning afzalliklaridan biridir. Toshkentda Apple noutbuklarini xarid qilish uchun MacBro internet-do‘koniga murojaat qilib , siz o‘zingiz uchun quyidagi qulay shart-sharoitlarni ham topasiz
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}
export default Mac