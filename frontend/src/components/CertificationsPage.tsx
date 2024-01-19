import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";

const CertificationsPage = () => {
  const { resume, dispatch } = useResume();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newCertification = [
      {
        name: data.get("certificate") as string,
        description: data.get("description") as string,
      },
    ];
    dispatch({
      type: "UPDATE_RESUME",
      field: "certifications",
      value: newCertification,
    });
  };

  return (
    <SimpleGrid gap={2}>
      <Heading marginBottom={5}>Resume Certifications</Heading>
      <Button>Import from another Resume</Button>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Certification Name</FormLabel>
          <Input
            name="certificate"
            placeholder="Cognizant Virtual Experience Program"
            defaultValue={resume?.certifications.map((e) => e.name)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Certification Description</FormLabel>
          <Textarea
            name="description"
            placeholder="Learnt Machine Learning on Edx"
            defaultValue={resume?.certifications.map((e) =>
              e.description ? e.description : ""
            )}
          />
        </FormControl>
        <Button marginTop={3} type="submit">
          Save
        </Button>
      </Form>
    </SimpleGrid>
  );
};

export default CertificationsPage;
