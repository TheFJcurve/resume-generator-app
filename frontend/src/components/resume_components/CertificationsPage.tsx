import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { useResume } from "../../context/ResumeContext";

const CertificationsPage = () => {
  const { dispatch } = useResume();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newCertification = [
      {
        certificate: data.get("certificate") as string,
        description: data.get("description") as string,
      },
    ];
    dispatch({
      type: "UPDATE_RESUME",
      field: "certification",
      value: newCertification,
    });
  };

  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Certification Name</FormLabel>
          <Input
            name="certificate"
            placeholder="Cognizant Virtual Experience Program"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Certification Description</FormLabel>
          <Textarea
            name="description"
            placeholder="Learnt Machine Learning on Edx"
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
