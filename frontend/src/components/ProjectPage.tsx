import {
  SimpleGrid,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
  Heading,
  HStack,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ImportComponent from "./ImportComponent";

const ProjectPage = () => {
  const { resume, dispatch } = useResume();
  const defaultField = [
    {
      projectName: "",
      projectLink: "",
      additionalLink: "",
      description: "",
    },
  ];
  const [inputFields, setInputFields] = useState(
    resume
      ? resume.projects?.length === 0
        ? defaultField
        : resume?.projects
      : defaultField
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Create an array of education objects from the form data
    const newProjects = Array.from(
      { length: inputFields.length },
      (_, index) => ({
        projectName: data.get(`projectName${index}`) as string,
        projectLink: data.get(`projectLink${index}`) as string,
        additionalLink: data.get(`additionalLink${index}`) as string,
        description: data.get(`description${index}`) as string,
      })
    );

    dispatch({
      type: "UPDATE_RESUME",
      field: "projects",
      value: newProjects,
    });

    setInputFields(newProjects);
  };

  const addField = () => {
    setInputFields([...inputFields, defaultField[0]]);
  };

  const removeField = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <SimpleGrid gap={3}>
      <Heading marginBottom={5}>Resume Projects</Heading>
      <ImportComponent componentName="projects" />
      <Form onSubmit={handleSubmit}>
        {inputFields.map((input, index) => (
          <Box key={index}>
            <FormControl isRequired>
              <HStack>
                <FormLabel>Project Name {index + 1}</FormLabel>
                <IconButton
                  style={{ marginLeft: "auto" }}
                  onClick={() => removeField(index)}
                  colorScheme="red"
                  marginTop={3}
                  icon={<DeleteIcon />}
                  aria-label="remove"
                />
              </HStack>
              <Input
                marginTop={3}
                name={`projectName${index}`}
                placeholder="Resume Generator App"
                defaultValue={input.projectName}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Project Link</FormLabel>
              <Input
                name={`projectLink${index}`}
                placeholder="https://www.google.com"
                defaultValue={input.projectLink}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Any Additional Link</FormLabel>
              <Input
                name={`additionalLink${index}`}
                placeholder="https://www.google.com"
                defaultValue={input.additionalLink ? input.additionalLink : ""}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Project Description</FormLabel>
              <Textarea
                name={`description${index}`}
                placeholder="Description of the Project"
                defaultValue={input.description ? input.description : ""}
              />
              <FormHelperText>Seperated by ',' </FormHelperText>
            </FormControl>
          </Box>
        ))}
        <HStack>
          <Button colorScheme="teal" marginTop={3} type="submit">
            Save
          </Button>
          <IconButton
            style={{ marginLeft: "auto" }}
            onClick={addField}
            colorScheme="blue"
            marginTop={3}
            icon={<AddIcon />}
            aria-label="add"
          />
        </HStack>
      </Form>
    </SimpleGrid>
  );
};

export default ProjectPage;
