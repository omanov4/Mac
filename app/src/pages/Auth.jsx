import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { Box, Button, Container } from "@chakra-ui/react";

const Auth = () => {
  const [variant, setVariant] = useState("login");

  return (
    <Container
      maxW={1300}
      mx={"auto"}
      w={"100%"}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      mt={100}
    >
      <Box
        border={"1px solid gray"}
        width={"500px"}
        padding={"20px"}
        borderRadius={"8px"}
      >
        {variant === "login" ? <Login /> : <Register />}

        <Button
          variant={"link"}
          fontSize={"18px"}
          fontWeight={"bold"}
        >
          {variant === "login" ? "Register" : "Login"}
        </Button>
      </Box>
    </Container>
  );
};

export default Auth;
