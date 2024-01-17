import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Form } from "react-router-dom";

const ResumeName = () => {
  return (
    <Form>
      <FormControl isRequired>
        <FormLabel>Resume Name</FormLabel>
        <Input type="text" placeholder="Software Developer Resume" />
        <Button marginTop={3} type="submit">
          Next
        </Button>
      </FormControl>
    </Form>
  );
};

export default ResumeName;
