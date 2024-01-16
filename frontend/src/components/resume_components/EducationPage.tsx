import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";

const EducationPage = () => {
  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <FormControl isRequired>
        <FormLabel>Education</FormLabel>
        <Input type="institute" placeholder="The University of Waterloo" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Degree or Major</FormLabel>
        <Input
          type="area-of-study"
          placeholder="Computer Science with Statistics Minor"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input type="location" placeholder="Waterloo, ON, Canada" />
      </FormControl>
      <FormControl>
        <FormLabel>Graduation Date</FormLabel>
        <Input type="graduation-date" placeholder="April 2027" />
      </FormControl>
      <FormControl>
        <FormLabel>Relevant Courses</FormLabel>
        <Input
          type="relevant-courses"
          placeholder="Object Oriented Programming"
        />
        <FormHelperText>Seperated by ',' </FormHelperText>
      </FormControl>
      <Button marginTop={3} type="submit">
        Save
      </Button>
    </SimpleGrid>
  );
};

export default EducationPage;
