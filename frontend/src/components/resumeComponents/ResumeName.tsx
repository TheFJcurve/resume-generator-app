import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import useResume from "../../hooks/useResume";

const ResumeName = () => {
  const { resume, dispatch } = useResume();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newName = {
      name: data.get("name") as string,
    };

    dispatch({ type: "UPDATE_RESUME", field: "name", value: newName.name });
  };

  return (
    <Box>
      <Heading marginBottom={5}>Resume Name</Heading>
      <Form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Resume Name</FormLabel>
          <Input
            name="name"
            type="text"
            placeholder="Software Developer Resume"
            defaultValue={resume?.name}
          />
          <Button marginTop={3} type="submit">
            Save
          </Button>
        </FormControl>
      </Form>
    </Box>
  );
};

export default ResumeName;
