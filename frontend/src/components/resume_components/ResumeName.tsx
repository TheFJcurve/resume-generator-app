import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import resumeService from "../../services/resumeService";

const ResumeName = () => {
  const [resumeName, setResumeName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newName = {
      resumeName: data.get("resumeName") as string,
    };
    setResumeName(newName.resumeName);

    resumeService.create({ name: resumeName });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Resume Name</FormLabel>
        <Input
          name="resumeName"
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
