import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Link to={"/"}>
      <Image
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "40%",
        }}
        width={"300px"}
        src={logo}
      />
    </Link>
  );
};

export default Navbar;
