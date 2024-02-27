import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ResumeContainer = ({ children }: Props) => {
  return (
    <Box width={"100%"} padding={2}>
      {children}
    </Box>
  );
};

export default ResumeContainer;
