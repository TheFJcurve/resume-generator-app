import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

const HeadingPage = () => {
  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <Form>
        <FormControl isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input name="name" placeholder="Full name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" placeholder="Email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input name="phoneNumber" placeholder="Phone No." />
        </FormControl>
        <FormControl>
          <FormLabel>Personal Website</FormLabel>
          <Input name="websiteUrl" placeholder="Personal Website" />
        </FormControl>
        <FormControl>
          <FormLabel>LinkdIn URL</FormLabel>
          <Input name="linkedinUrl" placeholder="LinkdIn Url" />
        </FormControl>
        <Button marginTop={3} type="submit">
          Save
        </Button>
      </Form>
    </SimpleGrid>
  );
};

export default HeadingPage;
