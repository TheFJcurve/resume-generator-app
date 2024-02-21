import {
  Button,
  GridItem,
  SimpleGrid,
  Table,
  TableContainer,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import useResume from "../hooks/useResume";
import LinkTableItem from "./LinkTableItem";

const ResumeComponentList = () => {
  const { resume, dispatch } = useResume();

  const postResume = async () => {
    const response = await fetch("/api/resumes", {
      method: "POST",
      body: JSON.stringify(resume),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message);
    } else {
      console.log("Resume created successfully!");
      dispatch({ type: "UPDATE_RESUME", field: "name", value: "" });
      dispatch({ type: "UPDATE_RESUME", field: "heading", value: {} });
      dispatch({ type: "UPDATE_RESUME", field: "education", value: [] });
      dispatch({ type: "UPDATE_RESUME", field: "experience", value: [] });
      dispatch({ type: "UPDATE_RESUME", field: "projects", value: [] });
      dispatch({ type: "UPDATE_RESUME", field: "skills", value: [] });
      dispatch({ type: "UPDATE_RESUME", field: "certifications", value: [] });
    }
  };

  console.log(resume);
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} margin={3}>
      <GridItem width={"250px"}>
        <TableContainer>
          <Table variant="simple">
            <LinkTableItem link="./name">Resume Name</LinkTableItem>
            <LinkTableItem link="./heading">Heading</LinkTableItem>
            <LinkTableItem link="./education">Education</LinkTableItem>
            <LinkTableItem link="./experience">Experience</LinkTableItem>
            <LinkTableItem link="./project">Project</LinkTableItem>
            <LinkTableItem link="./skills">Skills</LinkTableItem>
            <LinkTableItem link="./certifications">
              Certifications
            </LinkTableItem>
          </Table>
          <Button
            colorScheme="teal"
            marginTop={3}
            width={"100%"}
            onClick={postResume}
            type="submit"
          >
            Make
          </Button>
        </TableContainer>
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </SimpleGrid>
  );
};

export default ResumeComponentList;
