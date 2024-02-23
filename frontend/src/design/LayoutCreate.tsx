import { GridItem, SimpleGrid } from "@chakra-ui/react";
import LatexPDF from "../components/LatexPDF";
import Navbar from "../components/Navbar";
import ResumeComponents from "../components/ResumeComponents";

const LayoutCreate = () => {
  return (
    <SimpleGrid columns={1} gap={5}>
      <GridItem>
        <Navbar />
      </GridItem>
      <SimpleGrid columns={{ sm: 1, md: 2 }} gap={10} marginLeft={10}>
        <GridItem width={"100%"}>
          <ResumeComponents />
        </GridItem>
        <GridItem width={"100%"}>
          <LatexPDF />
        </GridItem>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default LayoutCreate;
