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

const ProjectPage = () => {
  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <Form>
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
