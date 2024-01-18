import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { useResume } from "../../context/ResumeContext";

const ResumeName = () => {
  const { dispatch } = useResume();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newName = {
      name: data.get("name") as string,
    };

    dispatch({ type: "UPDATE_RESUME", field: "name", value: newName.name });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Resume Name</FormLabel>
        <Input
          name="name"
          type="text"
          placeholder="Software Developer Resume"
        />
        <Button marginTop={3} type="submit">
          Save
        </Button>
      </FormControl>
    </Form>
  );
};

export default ResumeName;
