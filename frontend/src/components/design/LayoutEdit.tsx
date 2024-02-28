import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const LayoutEdit = () => {
  return (
    <SimpleGrid
      gap={3}
      templateAreas={`"header" "main"`}
      minWidth={"100vw"}
      minHeight={"100vh"}
      height={"100%"}
      width={"100%"}
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
