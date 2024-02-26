import { GridItem, SimpleGrid } from "@chakra-ui/react";
import LatexPDF from "../pages/LatexPDF";
import Navbar from "./Navbar";
import ResumeComponents from "../pages/create-pages/ResumeComponents";

const LayoutCreate = () => {
  return (
    <SimpleGrid columns={1} gap={5}>
      <GridItem>
        <Navbar />
      </GridItem>
      <SimpleGrid columns={{ sm: 1, lg: 2 }} marginLeft={3}>
        <GridItem width={"100%"} marginRight={5} marginBottom={4}>
          <ResumeComponents />
        </GridItem>
        <GridItem width={{ sm: "400px", md: "800px", lg: "600px" }}>
          <LatexPDF />
        </GridItem>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default LayoutCreate;
