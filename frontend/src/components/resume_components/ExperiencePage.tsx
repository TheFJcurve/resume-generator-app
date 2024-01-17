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

const ExperiencePage = () => {
  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <Form>
        <FormControl isRequired>
          <FormLabel>Company Name</FormLabel>
          <Input name="company" placeholder="Sweat Free Apparel" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Position</FormLabel>
          <Input
            name="position"
            placeholder="Machine Learning and Mobile Developer co-op"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input name="location" placeholder="Waterloo, ON, Canada" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Start Date</FormLabel>
          <Input
            name="startDate"
            type="date"
            placeholder="May 2023 - August 2023"
          />
        </FormControl>
        <FormControl>
          <FormLabel>End Date</FormLabel>
          <Input
            name="endDate"
            type="date"
            placeholder="May 2023 - August 2023"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Job Description</FormLabel>
          <Textarea
            name="description"
            placeholder="Description of the Job or Experience"
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

export default ExperiencePage;
