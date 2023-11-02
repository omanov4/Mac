import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Image, Input, useDisclosure } from "@chakra-ui/react"
import React from "react"
import search from "../assets/svg/search-icon.svg"



function SearchModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <Box>
        <Button colorScheme="none" onClick={onOpen}>
            <Image minW={"18px"} minH={"18px"} src={search}/>
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader mb={"5px"} fontSize='lg' fontWeight='bold'>
              </AlertDialogHeader>
  
              <AlertDialogBody display={"flex"}>
                <Input borderRight={"none"} borderRightRadius={"none"} placeholder="search"/>
                <Button  borderLeft={"none"} borderLeftRadius={"none"} bg={"gray"} colorScheme="black">
                        <Image py={"25px"} src={search}/>
                </Button>
              </AlertDialogBody>
  
              <AlertDialogFooter>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    )
  }
  export default SearchModal