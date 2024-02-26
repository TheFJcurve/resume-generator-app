import {
  Button,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import _get from "lodash/get";
import { useEffect, useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import { Link } from "react-router-dom";
import useResume from "../../../hooks/useResume";
import resumeService from "../../../services/resumeService";

const componentUrls = {
  name: "./name",
  heading: "./heading",
  education: "./education",
  experience: "./experience",
  projects: "./projects",
  skills: "./skills",
  certifications: "./certifications",
};

const componentDisplayName = {
  name: "Resume Name",
  heading: "Heading",
  education: "Education",
  experience: "Experience",
  projects: "Projects",
  skills: "Skills",
  certifications: "Certifications",
};

const ResumeComponentList = () => {
  const { resume, dispatch } = useResume();
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  let localOrder = resume?.order || [];

  useEffect(() => {
    localOrder = resume?.order || [];
  }, [resume?.order]);

  const postResume = async () => {
    console.log(resume);
    const response = await resumeService.uploadResume(resume);

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
      dispatch({
        type: "UPDATE_RESUME",
        field: "order",
        value: [
          "name",
          "heading",
          "education",
          "experience",
          "projects",
          "skills",
          "certifications",
        ],
      });
    }
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    if (draggedIndex === null) return;

    const order = resume?.order;
    if (order === undefined) return;

    const draggedItem = order[draggedIndex];
    const changedOrder = [...order];
    changedOrder.splice(draggedIndex, 1);
    changedOrder.splice(index, 0, draggedItem);
    localOrder = changedOrder;
    console.log(localOrder);
  };

  const handleDragEnd = () => {
    dispatch({ type: "UPDATE_RESUME", field: "order", value: localOrder });
    setDraggedIndex(null);
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <Tbody>
          {localOrder.map((component, index) => (
            <Tr
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={() => handleDragOver(index)}
              onDragEnd={handleDragEnd}
            >
              <Td>
                {_get(componentUrls, component) !== "./name" &&
                _get(componentUrls, component) !== "./heading" ? (
                  <IconButton
                    aria-label="button"
                    type="button"
                    icon={<MdDragIndicator style={{ cursor: "grab" }} />}
                    variant={"ghost"}
                    color={"teal.300"}
                    marginRight={5}
                  />
                ) : null}
                <Link to={_get(componentUrls, component)}>
                  {_get(componentDisplayName, component)}
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
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
