import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import useResume from "../../hooks/useResume";

const HeadingPage = () => {
  const { dispatch } = useResume();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const heading = {
      fullName: data.get("name") as string,
      email: data.get("email") as string,
      phone: data.get("phoneNumber") as string,
      websiteUrl: data.get("websiteUrl") as string,
      linkedinUrl: data.get("linkedinUrl") as string,
    };

    dispatch({ type: "UPDATE_RESUME", field: "heading", value: heading });
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
