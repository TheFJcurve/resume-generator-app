import { HStack, VStack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const ResumeComponentList = () => {
  return (
    <HStack>
      <VStack spacing={5}>
        <Link to="./heading">Heading</Link>
        <Link to="./education">Education</Link>
        <Link to="./experience">Experience</Link>
        <Link to="./project">Projects</Link>
        <Link to="./skills">Skills</Link>
        <Link to="./certifications">Certifications</Link>
        <Link to="./resume">Resume</Link>
      </VStack>
      <Outlet />
    </HStack>
  );
};

export default ResumeComponentList;
