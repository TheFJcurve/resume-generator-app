import { Box, HStack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <HStack spacing={5}>
        <Link to="/heading">Heading</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/project">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/resume">Resume</Link>
      </HStack>
      <Outlet />
    </Box>
  );
};

export default Navbar;
