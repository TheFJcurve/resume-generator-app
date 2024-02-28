import { GridItem, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ResumeComponents from "../pages/create-pages/ResumeComponents";
import CreateLatexPDF from "../pages/create-pages/CreateLatexPDF";

const LayoutCreate = () => {
  return (
    <SimpleGrid
      gap={5}
      minWidth={"100vw"}
      width={"100%"}
      minHeight={"100vh"}
      height={"100%"}
    >
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <SimpleGrid columns={{ sm: 1, lg: 2 }} marginLeft={3}>
          <GridItem width={"100%"} marginRight={5} marginBottom={4}>
            <ResumeComponents />
          </GridItem>
          <GridItem>
            <CreateLatexPDF />
          </GridItem>
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  );
};

export default LayoutCreate;
