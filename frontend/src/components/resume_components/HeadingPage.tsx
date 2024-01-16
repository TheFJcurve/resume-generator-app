import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

interface HeadingPage {
  name: string;
  email: string;
  phone: string;
  website?: string;
  linkedin?: string;
}

const HeadingPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const headingData: HeadingPage = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      phone: data.get("phoneNumber") as string,
      website: data.get("websiteUrl") as string,
      linkedin: data.get("linkedinUrl") as string,
    };
    console.log(headingData);
  };

  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <Form onSubmit={handleSubmit}>
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
