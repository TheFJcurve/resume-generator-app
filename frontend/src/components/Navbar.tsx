import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding={5}>
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
    </HStack>
  );
};

export default Navbar;
