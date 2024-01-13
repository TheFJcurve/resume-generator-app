import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box padding={5} alignContent={"center"}>
      <Link to="/create">
        <Button
          borderRadius={10}
          margin={2}
          borderColor={"red.600"}
          marginRight={4}
        >
          Create New Resume
        </Button>
      </Link>

      <Link to="/edit">
        <Button
          borderRadius={10}
          margin={2}
          borderColor={"green.600"}
          marginRight={4}
        >
          Use Existing Resume
        </Button>
      </Link>
    </Box>
  );
};

export default Navbar;
