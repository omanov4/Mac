import { Box, Grid, Heading, Image, Link, Text } from "@chakra-ui/react"
import Telegram from "../assets/svg/telegram.svg"
import Instagram from "../assets/svg/instagram.svg"
import Facebook from "../assets/svg/facebook.svg"
import TikTok from "../assets/svg/tik-tok.svg"
import Youtube from "../assets/svg/youtube.svg"


const Footer = () => {
    return(
        <Box mb={"none"} h={"500px"} bg={"#EBEDE8"} borderTop={"1px solid gray"}>
            <Grid gridTemplateColumns={"4,1"} display={"flex"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"space-around"} >
                <Box mt={"45px"}>
                    <Heading mb={"20px"} size={"sm"}>Sotib ol</Heading>
                    <Text  mb={"20px"}>Mac</Text>
                    <Text  mb={"20px"}>iPad</Text>
                    <Text  mb={"20px"}>iPhone</Text>
                    <Text  mb={"20px"}>Watch</Text>
                </Box>

                <Box mt={"75px"}>
                    <Heading mb={"20px"} size={"sm"}>Kompaniya</Heading>
                    <Text   mb={"20px"}>Yangiliklar</Text>
                    <Text   mb={"20px"}>Kompaniya haqida</Text>
                    <Text   mb={"20px"}>Dokon manzillari</Text>
                    <Text   mb={"20px"}>Biznes uchun</Text>
                    <Text   mb={"20px"}>Vakansiyalar</Text>
                </Box>

                <Box mt={"57px"}>
                    <Heading  mb={"20px"} size={"sm"}>Malumot</Heading>
                    <Text    mb={"20px"}>Siz uchun sotib beramiz</Text>
                    <Text    mb={"20px"}>Yetkazib berish</Text>
                    <Text    mb={"20px"}>Aloqa</Text>
                    <Text    mb={"20px"}>Aksiya va chegirmalar</Text>
                    <Text    mb={"20px"}>eSIM haqida</Text>
                </Box>

                <Box >
                    <Heading mb={"20px"} size={"sm"}>Biz bilan bog'laning</Heading>
                    <Box mb={"20px"} display={"flex"} alignItems={"center"} gap={"10px"}>
                        <Image src={Telegram}/>
                        <Image src={Instagram}/>
                        <Image src={Facebook}/>
                        <Image src={Youtube}/>
                        <Image src={TikTok}/>
                    </Box>
                    <Text>+998 91 915 67 95</Text>
                </Box>
            </Grid>
            <Box 
            display={{base:"none",md:"flex"}} 
            alignItems={"center"} 
            justifyContent={"space-around"}
            mt={"100px"}>
                <Box>Onlayn do'kon MacBro.uz barcha huquqlari himoyalangan.</Box>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>Developed by <Link color={"blue"}>Omanov</Link></Box>
            </Box>
        </Box>
    )
}
export default Footer