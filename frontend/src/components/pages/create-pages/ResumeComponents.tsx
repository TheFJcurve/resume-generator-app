import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import ResumeComponentList from "./ResumeComponentList";

const ResumeComponents = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} margin={3} gap={5}>
      <GridItem>
        <ResumeComponentList />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </SimpleGrid>
  );
};

export default ResumeComponents;
