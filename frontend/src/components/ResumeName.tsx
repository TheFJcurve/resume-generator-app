import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Form, Link } from "react-router-dom";
import useResume from "../hooks/useResume";

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
          <HStack>
            <Button
              colorScheme="teal"
              marginTop={3}
              type="submit"
              width={"100%"}
            >
              Save
            </Button>
            <Link to={"../heading"} style={{ width: "100%" }}>
              <Button marginTop={3} colorScheme="blue" width={"100%"}>
                Next
              </Button>
            </Link>
          </HStack>
        </FormControl>
      </Form>
    </Box>
  );
};

export default ResumeName;
