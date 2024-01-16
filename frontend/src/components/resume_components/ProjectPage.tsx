import {
  SimpleGrid,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";

const ProjectPage = () => {
  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <FormControl isRequired>
        <FormLabel>Project Name</FormLabel>
        <Input placeholder="Resume Generator App" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Project Link</FormLabel>
        <Input placeholder="https://www.google.com" />
      </FormControl>
      <FormControl>
        <FormLabel>Any Additional Link</FormLabel>
        <Input placeholder="https://www.google.com" />
      </FormControl>
      <FormControl>
        <FormLabel>Project Description</FormLabel>
        <Textarea placeholder="Description of the Project" />
        <FormHelperText>Seperated by ',' </FormHelperText>
      </FormControl>
      <Button marginTop={3} type="submit">
        Save
      </Button>
    </SimpleGrid>
  );
};

export default ProjectPage;
