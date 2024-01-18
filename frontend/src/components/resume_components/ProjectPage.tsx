import {
  SimpleGrid,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { useResume } from "../../context/ResumeContext";

const ProjectPage = () => {
  const { dispatch } = useResume();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newProject = [
      {
        projectName: data.get("projectName") as string,
        projectLink: data.get("projectLink") as string,
        additionalLink: data.get("additionalLink") as string,
        projectDescription: data.get("projectDescription") as string,
      },
    ];

    dispatch({
      type: "UPDATE_RESUME",
      field: "project",
      value: newProject,
    });
  };

  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <Form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Project Name</FormLabel>
          <Input name="projectName" placeholder="Resume Generator App" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Project Link</FormLabel>
          <Input name="projectLink" placeholder="https://www.google.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Any Additional Link</FormLabel>
          <Input name="additionalLink" placeholder="https://www.google.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Project Description</FormLabel>
          <Textarea
            name="projectDescription"
            placeholder="Description of the Project"
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
