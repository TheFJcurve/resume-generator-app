import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

const EducationPage = () => {
  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <Form>
        <FormControl isRequired>
          <FormLabel>Education</FormLabel>
          <Input name="institute" placeholder="The University of Waterloo" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Degree or Major</FormLabel>
          <Input
            name="degree"
            placeholder="Computer Science with Statistics Minor"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input name="location" placeholder="Waterloo, ON, Canada" />
        </FormControl>
        <FormControl>
          <FormLabel>Graduation Date</FormLabel>
          <Input name="graduationDate" placeholder="April 2027" />
        </FormControl>
        <FormControl>
          <FormLabel>Relevant Courses</FormLabel>
          <Input
            name="relevantCourses"
            placeholder="Object Oriented Programming"
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

export default EducationPage;
