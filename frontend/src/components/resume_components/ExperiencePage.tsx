import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";

const ExperiencePage = () => {
  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <FormControl isRequired>
        <FormLabel>Company Name</FormLabel>
        <Input placeholder="Sweat Free Apparel" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Position</FormLabel>
        <Input placeholder="Machine Learning and Mobile Developer co-op" />
      </FormControl>
      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input placeholder="Waterloo, ON, Canada" />
      </FormControl>
      <FormControl>
        <FormLabel>Start Date</FormLabel>
        <Input type="date" placeholder="May 2023 - August 2023" />
      </FormControl>
      <FormControl>
        <FormLabel>End Date</FormLabel>
        <Input type="date" placeholder="May 2023 - August 2023" />
      </FormControl>
      <FormControl>
        <FormLabel>Job Description</FormLabel>
        <Textarea placeholder="sample placeholder" />
        <FormHelperText>Seperated by ',' </FormHelperText>
      </FormControl>
      <Button marginTop={3} type="submit">
        Save
      </Button>
    </SimpleGrid>
  );
};

export default ExperiencePage;
