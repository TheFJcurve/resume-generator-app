import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";

const HeadingPage = () => {
  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input type="name" placeholder="Full name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Email" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Phone Number</FormLabel>
        <Input type="phone-number" placeholder="Phone No." />
      </FormControl>
      <FormControl>
        <FormLabel>Personal Website</FormLabel>
        <Input type="website-url" placeholder="Personal Website" />
      </FormControl>
      <FormControl>
        <FormLabel>LinkdIn URL</FormLabel>
        <Input type="linkedin-url" placeholder="LinkdIn Url" />
      </FormControl>
      <Button marginTop={3} type="submit">
        Save
      </Button>
    </SimpleGrid>
  );
};

export default HeadingPage;
