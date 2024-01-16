import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";

const SkillsPage = () => {
  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <FormControl>
        <FormLabel>Skill Heading</FormLabel>
        <Input placeholder="Programming" />
      </FormControl>
      <FormControl>
        <FormLabel>Skills</FormLabel>
        <Textarea placeholder="C++, Java, Python" />
        <FormHelperText>Seperated by ',' </FormHelperText>
      </FormControl>
      <Button marginTop={3} type="submit">
        Save
      </Button>
    </SimpleGrid>
  );
};

export default SkillsPage;
