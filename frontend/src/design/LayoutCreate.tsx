import { GridItem, SimpleGrid } from "@chakra-ui/react";
import LatexPDF from "../components/LatexPDF";
import Navbar from "../components/Navbar";
import ResumeComponentList from "../components/ResumeComponentList";

const LayoutCreate = () => {
  return (
    <SimpleGrid columns={1} gap={5}>
      <GridItem>
        <Navbar />
      </GridItem>
      <SimpleGrid columns={{ sm: 1, md: 2 }} gap={10} marginLeft={10}>
        <GridItem>
          <ResumeComponentList />
        </GridItem>
        <GridItem >
          <LatexPDF />
        </GridItem>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default LayoutCreate;
