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

interface SkillsPage {
  skillHeading: string;
  skills: string;
}

const SkillsPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const skillsData: SkillsPage = {
      skillHeading: data.get("skillHeading") as string,
      skills: data.get("skills") as string,
    };
    console.log(skillsData);
  };

  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <Form onSubmit={handleSubmit}>
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
