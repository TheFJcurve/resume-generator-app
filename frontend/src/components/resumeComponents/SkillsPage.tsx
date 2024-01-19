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
import useResume from "../../hooks/useResume";

const SkillsPage = () => {
  const { dispatch } = useResume();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newSkill = [
      {
        skillHeading: data.get("skillHeading") as string,
        skill: data.get("skills") as string,
      },
    ];
    dispatch({ type: "UPDATE_RESUME", field: "skills", value: newSkill });
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
