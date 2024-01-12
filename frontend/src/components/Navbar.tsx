import { HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack spacing={5}>
      <div>Header</div>
      <div>Education</div>
      <div>Experience</div>
      <div>Projects</div>
      <div>Skills</div>
      <div>Certifications</div>
      <div>Final Result</div>
    </HStack>
  );
};

export default Navbar;
