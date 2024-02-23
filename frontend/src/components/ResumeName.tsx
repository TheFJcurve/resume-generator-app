import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
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

    const newFont = {
      font: data.get("font") as string,
    };
    dispatch({ type: "UPDATE_RESUME", field: "font", value: newFont.font });
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
          <FormControl marginTop={3}>
            <FormLabel>Default Font</FormLabel>
            <Select
              name="font"
              placeholder="Default Font"
              defaultValue={"lmodern"}
            >
              <option value="utopia" style={{ font: "" }}>
                Utopia
              </option>
              <option value="mathptmx">Times New Roman</option>
              <option value="tgtermes">Gyre Termes</option>
              <option value="tgheros">Gyre Heros</option>
              <option value="helvet">Helvetica</option>
            </Select>
          </FormControl>
          <HStack>
            <Button
              colorScheme="teal"
              marginTop={3}
              type="submit"
              width={"100%"}
            >
              Save
            </Button>
            <Link to={"./heading"} style={{ width: "100%" }}>
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
