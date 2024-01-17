import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <Grid
      gap={3}
      templateAreas={`" header" "main"`}
      width={"1080px"}
    >
      <GridItem area={"header"}>
        <Navbar />
      </GridItem>
      <GridItem area={"main"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Layout;
