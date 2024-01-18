import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";

const ResumeName = () => {
  const [resumeName, setResumeName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newName = {
      name: data.get("name") as string,
    };
    setResumeName(newName.name);

    console.log(resumeName);
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
