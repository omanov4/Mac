import { Box, Button, Heading, Image, useDisclosure } from "@chakra-ui/react"
import React from "react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { Link } from "react-router-dom"
// import { DragHandleIcon } from '@chakra-ui/icons'
import HamburgerMenu from "../../assets/svg/menu-icon.svg"


export const BurgerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return(
        <Box minW={"60px"}
        >
            <Box>
                <Button _hover={"none"} bg={"212121"} ref={btnRef} onClick={onOpen}>
                    <Image src={HamburgerMenu}/>
                </Button>
            </Box>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader >
            <Link to="/">
              <Heading size={"xl"} textAlign={"center"}>MacBro</Heading>
            </Link>
          </DrawerHeader>

          <DrawerBody fontSize={"md"} marginLeft={"20px"}>
            <ul style={{marginTop:"40px"}}>

            <li><Link to={"/mac"}>Mac</Link></li><br/>
            <li><Link to={"/iphone"}>iPhone</Link></li><br/> 
            <li><Link to={"/iphone"}>iPhone</Link></li><br/> 
            <li><Link to={"/ipad"}>iPad</Link></li><br/> 
            <li><Link to={"/watch"}>Watch</Link></li><br/> 
            <li><Link to={"/airpods"}>AirPods</Link></li><br/> 
            <li><Link to={"/akustika"}>Akustika</Link></li><br/>  
            <li><Link to={"/aksessuarlar"}>Aksessuarlar</Link></li>

            </ul>
          </DrawerBody>

          <DrawerFooter>
            <Link to={"/login"}>
                <Button colorScheme="blue">Login</Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
    )
}
