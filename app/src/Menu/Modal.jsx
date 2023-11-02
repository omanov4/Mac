import { Button, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"


function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
      <>
        <Button w={"100%"} _hover={"none"} colorScheme="telegram" onClick={onOpen}>Xarid qilish</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Malumotlarni to'ldiring</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <InputGroup>
              <InputLeftAddon children='+998' />
              <Input type='tel' placeholder='phone number' />
            </InputGroup>
            <Input my={"10px"} placeholder="Name"/>
            <Input placeholder="Password"/>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Yopish
              </Button>
              <Button colorScheme="cyan">Sotib olish</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default BasicUsage