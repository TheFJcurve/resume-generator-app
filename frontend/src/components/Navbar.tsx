import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <HStack spacing={5}>
        <Link to="/create">Create New Resume</Link>
        <Link to="/edit">Use Existing Resume</Link>
      </HStack>
    </Box>
  );
};

export default Navbar;
