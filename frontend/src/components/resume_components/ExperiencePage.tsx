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
import { useResume } from "../../context/ResumeContext";

const ExperiencePage = () => {
  const { dispatch } = useResume();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const newExperience = [
      {
        company: data.get("company") as string,
        position: data.get("position") as string,
        location: data.get("location") as string,
        startDate: data.get("startDate") as string,
        endDate: data.get("endDate") as string,
        description: data.get("description") as string,
      },
    ];

    dispatch({
      type: "UPDATE_RESUME",
      field: "experience",
      value: newExperience,
    });
  };

  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <Form onSubmit={handleSubmit}>
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
