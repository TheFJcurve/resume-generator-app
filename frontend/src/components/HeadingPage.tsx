import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const HeadingPage = () => {
  return (
    <Box margin={2}>
      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input type="name" placeholder="Full name" />
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Email" />
        <FormLabel>Phone Number</FormLabel>
        <Input type="phone-number" placeholder="Phone No." />
        <FormLabel>LinkdIn URL</FormLabel>
        <Input type="linkedin-url" placeholder="LinkdIn Url" />
        <Button type="submit">Submit</Button>
      </FormControl>
      <Button>Import from another Resume</Button>
    </Box>
  );
};

export default HeadingPage;
