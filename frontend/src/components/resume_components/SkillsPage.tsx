import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

const SkillsPage = () => {
  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <Form>
        <FormControl>
          <FormLabel>Skill Heading</FormLabel>
          <Input name="skillHeading" placeholder="Programming" />
        </FormControl>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <Textarea name="skills" placeholder="C++, Java, Python" />
          <FormHelperText>Seperated by ',' </FormHelperText>
        </FormControl>
        <Button marginTop={3} type="submit">
          Save
        </Button>
      </Form>
    </SimpleGrid>
  );
};

export default SkillsPage;
