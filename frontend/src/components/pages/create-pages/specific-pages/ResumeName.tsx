import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import { Form, useNavigate } from "react-router-dom";
import useResume from "../../../../context/useResume";

const ResumeName = () => {
  const { resume, dispatch } = useResume();
  const navigate = useNavigate();

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

    navigate("../heading");
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
          <Button type="submit" marginTop={3} colorScheme="teal" width={"100%"}>
            Next
          </Button>
        </FormControl>
      </Form>
    </Box>
  );
};

export default ResumeName;
