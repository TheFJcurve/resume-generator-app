import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

interface EducationPage {
  institute: string;
  degree: string;
  location?: string;
  graduationDate?: string;
  relevantCourses?: string;
}

const EducationPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const educationData: EducationPage = {
      institute: data.get("institute") as string,
      degree: data.get("degree") as string,
      location: data.get("location") as string,
      graduationDate: data.get("graduationDate") as string,
      relevantCourses: data.get("relevantCourses") as string,
    };
    console.log(educationData);
  };

  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <Form onSubmit={handleSubmit}>
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
