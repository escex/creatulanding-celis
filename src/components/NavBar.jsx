import { Box, Flex, HStack, IconButton, Image, Button, useDisclosure, VStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';  
import { Link } from "react-router-dom";
import logo from '../assets/images/logo cut.png';
import { forwardRef } from 'react';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <box bg="gray.900" px={4} color="white">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Link to="/" />
        <Image src="logo" alt="Logo" boxSize="40px" />
        <Link />

        <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
          <Button variant="ghost" as={Link} to="/">Home</Button>
          <Button variant="ghost" as={Link} to="/products">Products</Button>
          <Button variant="ghost" as={Link} to="/about">About</Button>
          <Button variant="ghost" as={Link} to="/contact">Contact</Button>
        </HStack>


        {/* Cart Icon */}
        <HStack spacing={3}>
          <IconButton
            icon={<ShoppingCartIcon size={20} />}
            variant="ghost"
            aria-label="Cart"
          />

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Menu"
          />
          </HStack>        
      </Flex>
    </box>
  );
}
export default NavBar;