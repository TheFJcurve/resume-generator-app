import {
  SimpleGrid,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
  Heading,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";

const ProjectPage = () => {
  const { resume, dispatch } = useResume();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newProject = [
      {
        projectName: data.get("projectName") as string,
        projectLink: data.get("projectLink") as string,
        additionalLink: data.get("additionalLink") as string,
        description: data.get("description") as string,
      },
    ];

    dispatch({
      type: "UPDATE_RESUME",
      field: "projects",
      value: newProject,
    });
  };

  return (
    <SimpleGrid gap={3}>
      <Heading marginBottom={5}>Resume Experience</Heading>
      <Button>Import from another Resume</Button>
      <Form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Project Name</FormLabel>
          <Input
            name="projectName"
            placeholder="Resume Generator App"
            defaultValue={resume?.projects.map((e) => e.projectName)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Project Link</FormLabel>
          <Input
            name="projectLink"
            placeholder="https://www.google.com"
            defaultValue={resume?.projects.map((e) => e.projectLink)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Any Additional Link</FormLabel>
          <Input
            name="additionalLink"
            placeholder="https://www.google.com"
            defaultValue={resume?.projects.map((e) =>
              e.additionalLink ? e.additionalLink : ""
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Project Description</FormLabel>
          <Textarea
            name="description"
            placeholder="Description of the Project"
            defaultValue={resume?.projects.map((e) =>
              e.description ? e.description : ""
            )}
          />
          <FormHelperText>Seperated by ',' </FormHelperText>
        </FormControl>
        <Button marginTop={3} type="submit">
          Save
        </Button>
      </Form>
    </SimpleGrid>
  );
};

export default ProjectPage;
