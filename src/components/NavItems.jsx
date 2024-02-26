import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

// Array of Page Links
const links = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "About" },
  { id: 3, name: "Menu", path: "Menu" },
  { id: 4, name: "Reservations", path: "Reservations" },
  { id: 5, name: "Order Online", path: "OrderOnline" },
  { id: 6, name: "Login", path: "Login" },
];

export default function NavItem({ ...rest }) {
  return (
    <>
      {/* Cycle Through each item in the array and create a Stylable NavLink */}
      {
        links.map((link) => (
          <Box
            key={link.id}
            as={NavLink}
            to={link.path}
            px="1rem"
            borderRadius="0.3rem"
            _activeLink={{ color: "highlight.2", bg:"primary.2", fontWeight:'bold' }}
            _hover={{ bg: "secondary.2" }}
            {...rest}
          >
            {link.name}
          </Box>
        ))
      }
    </>
  );
}
