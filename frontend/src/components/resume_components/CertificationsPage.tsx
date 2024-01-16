import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

interface CertificationsPage {
  certificate: string;
  description: string;
}

const CertificationsPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const certificationsData: CertificationsPage = {
      certificate: data.get("certificate") as string,
      description: data.get("description") as string,
    };
    console.log(certificationsData);
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
