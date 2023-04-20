import React from "react";
import { Box, Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Logo from "../assets/imgs/Pokemon_Logo.svg";
import { goToHomePage, goToPokedexPage } from "../routes/coordinator";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { PokemonModal } from "./Modal";

export const Header = ({ pokemon }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const { pokedex, addToPokedex, removeFromPokedex } =
    useContext(GlobalContext);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const addModal = () => {
    onOpen();
    setTimeout(() => {
      addToPokedex({
        id: pokemon.id,
        name: pokemon.name,
      });
      onClose();
    }, 1500);
  };

  const deleteModal = () => {
    onOpen();
    setTimeout(() => {
      removeFromPokedex(pokemon.name);
      onClose();
    }, 1500);
  };

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <div>
            <Flex align={'center'}>
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"19rem"}
                w={{ base: "19rem", sm: "14rem", lg: "fit-content" }}
                justify={'center'}
                ml="45rem"
              />
              <Button
                onClick={() => {
                  goToPokedexPage(navigate);
                }}
                ml="27rem"
              >
                Pokédex
              </Button>
            </Flex>
          </div>
        );
      case `/page/${params.pageNumber}`:
        return (
          <div>
            <Flex align={'center'}>
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon minW={15} minH={15} /> Voltar ao início
              </Button>
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"19rem"}
                w={{ base: "19rem", sm: "14rem", lg: "fit-content" }}
                justify={'center'}
                ml="32rem"
              />
              <Button
                onClick={() => {
                  goToPokedexPage(navigate);
                }}
                ml="27rem"
              >
                Pokédex
              </Button>
            </Flex>
          </div>
        );
      case "/pokedex":
        return (
          <div>
            <Flex align={'center'}>
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon minW={15} minH={15} /> Todos Pokémons
              </Button>
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"19rem"}
                w={{ base: "19rem", sm: "14rem", lg: "fit-content" }}
                justify={'center'}
                ml="30rem"
              />
            </Flex>
          </div>
        );
      case `/pokedex/${params.pokedexPage}`:
        return (
          <div>
            <Flex align={"center"}>
              <Button variant="link" onClick={() => navigate(-1)}>
                <ChevronLeftIcon minW={15} minH={15} /> Página anterior
              </Button>
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"19rem"}
                w={{ base: "19rem", sm: "14rem", lg: "fit-content" }}
                justify={'center'}
                ml="32rem"
              />
            </Flex>
          </div>
        );
      case `/pokemon/${params.pokemon}`:
        return (
          <div>
            <Flex align={'center'}>
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon minW={15} minH={15} /> Todos Pokémons
              </Button>
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"19rem"}
                w={{ base: "19rem", sm: "14rem", lg: "fit-content" }}
                justify={'center'}
                ml="30rem"
              />
              {pokedex.find(
                (pokemonInPokedex) => pokemon.name === pokemonInPokedex.name
              ) ? (
                <div>
                  <Button variant="delPokedex" onClick={deleteModal} ml="31rem">
                    Excluir da Pokédex
                  </Button>
                  <PokemonModal
                    isOpen={isOpen}
                    onClose={onClose}
                    title={"Oh, no!"}
                    body={"O Pokémon foi removido da sua Pokedéx"}
                  />
                </div>
              ) : (
                <div>
                  <Button variant="addPokedex" onClick={addModal} ml="31rem">
                    Adicionar na Pokédex
                  </Button>
                  <PokemonModal
                    isOpen={isOpen}
                    onClose={onClose}
                    title={"Gotcha!"}
                    body={"O Pokémon foi adicionado a sua Pokédex"}
                  />
                </div>
              )}
            </Flex>
          </div>
        );
      default:
        return (
          <Box
            display="flex"
            justifyContent="center"
            alignItems={"center"}
            gridColumn={2}
          >
            <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"19rem"}
                w={{ base: "19rem", sm: "14rem", lg: "fit-content" }}
                justify={'center'}
                ml="45rem"
              />
          </Box>
        );
    }
  };

  return (
    <Box
      as="header"
      bg="white"
      px={{ md: "1rem", lg: "2rem", "2xl": "3rem", "4xl": "5rem" }}
      py={"3rem"}
      display={{ base: "flex", lg: "grid" }}
      gridTemplateColumns="repeat(3, 1fr)"
      alignItems={"center"}
      justifyContent={["center", "space-between"]}
      flexWrap={"wrap"}
      gridColumnGap={"1rem"}
      flexDirection={"column"}
      rowGap={"1rem"}
    >
      {renderHeader()}
    </Box>
  );
};