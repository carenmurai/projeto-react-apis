import React from "react";
import {
    Box,
    chakra,
    Container,
    Image,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from "@chakra-ui/react";
  import { FaLinkedin, FaGithub } from "react-icons/fa";
  import Logo from "../assets/imgs/Pokemon_Logo.svg";
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        target="_blank"
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export const Footer = () => {
    return (
      <Box bg={"white"} color={"black"} as="footer">
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Image w="32" src={Logo} alt="Logo do Pokémon" />
          <Text fontSize={14} textAlign="center">
            Pokédex 2023 © Nintendo. Desenvolvido para fins educativos.
            <br />
            Por Caren Murai
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Linkedin"}
              href={"https://www.linkedin.com/in/caren-murai/"}
              target="blank"
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label={"GitHub"}
              href={"https://github.com/carenmurai"}
            >
              <FaGithub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  };