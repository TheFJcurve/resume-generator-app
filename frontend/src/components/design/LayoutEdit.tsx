import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const LayoutEdit = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      gap={3}
      templateAreas={`"header header" "main main"`}
      minHeight={"100vh"}
      height={"100%"}
    >
      <GridItem area={"header"}>
        <Navbar />
      </GridItem>
      <GridItem area={"main"}>
        <Outlet />
      </GridItem>
    </SimpleGrid>
  );
};

export default LayoutEdit;
