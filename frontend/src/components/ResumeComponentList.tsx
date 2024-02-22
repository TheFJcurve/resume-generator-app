import {
  Button,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import useResume from "../hooks/useResume";
import { MdDragIndicator } from "react-icons/md";
import { Link } from "react-router-dom";

const componentNames = [
  "Resume Name",
  "Heading",
  "Education",
  "Experience",
  "Projects",
  "Skills",
  "Certifications",
];

const componentUrls = [
  "./name",
  "./heading",
  "./education",
  "./experience",
  "./project",
  "./skills",
  "./certifications",
];

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

  return (
    <TableContainer>
      <Table variant="simple">
        {componentNames.map((component, index) => (
          <Tbody>
            <Tr>
              <Td>
                {componentUrls[index] !== "./name" &&
                componentUrls[index] !== "./heading" ? (
                  <IconButton
                    aria-label="button"
                    type="button"
                    icon={<MdDragIndicator style={{ cursor: "grab" }} />}
                    variant={"ghost"}
                    color={"teal.300"}
                    marginRight={5}
                  />
                ) : null}
                <Link to={componentUrls[index]}>{component}</Link>
              </Td>
            </Tr>
          </Tbody>
        ))}
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
  );
};

export default ResumeComponentList;
