import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";
import ImportComponent from "./ImportComponent";

const HeadingPage = () => {
  const { resume, dispatch } = useResume();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const heading = {
      fullName: data.get("fullName") as string,
      email: data.get("email") as string,
      phone: data.get("phoneNumber") as string,
      personalWebsite: data.get("personalWebsite") as string,
      linkedinUrl: data.get("linkedinUrl") as string,
    };

    dispatch({ type: "UPDATE_RESUME", field: "heading", value: heading });
  };

  return (
    <SimpleGrid gap={2}>
      <Heading marginBottom={5}>Resume Heading</Heading>
      <ImportComponent componentName="heading" />
      <Form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            name="fullName"
            placeholder="Full name"
            defaultValue={resume?.heading.fullName}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            placeholder="Email"
            defaultValue={resume?.heading.email}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            name="phoneNumber"
            placeholder="Phone No."
            defaultValue={resume?.heading.phone}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Personal Website</FormLabel>
          <Input
            name="personalWebsite"
            placeholder="Personal Website"
            defaultValue={resume?.heading.personalWebsite}
          />
        </FormControl>
        <FormControl>
          <FormLabel>LinkdIn URL</FormLabel>
          <Input
            name="linkedinUrl"
            placeholder="LinkdIn Url"
            defaultValue={resume?.heading.linkedinUrl}
          />
        </FormControl>
        <Button colorScheme="teal" marginTop={3} type="submit">
          Save
        </Button>
      </Form>
    </SimpleGrid>
  );
};

export default HeadingPage;
