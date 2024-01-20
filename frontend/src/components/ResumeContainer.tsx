import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ResumeContainer = ({ children }: Props) => {
  return (
    <Box
      width={"100%"}
      borderRadius={10}
      _hover={{
        transform: "scale(1.015)",
        transition: "transform 0.15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default ResumeContainer;
