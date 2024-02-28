import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Image
      display={"block"}
      marginLeft={"auto"}
      marginRight={"auto"}
      width={"40%"}
      src={logo}
      onClick={() => navigate("/")}
      _hover={{ cursor: "pointer" }}
    />
  );
};

export default Navbar;
