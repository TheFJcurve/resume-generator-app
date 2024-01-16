import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";

const CertificationsPage = () => {
  return (
    <SimpleGrid gap={2}>
      <Button>Import from another Resume</Button>
      <FormControl>
        <FormLabel>Certification Name</FormLabel>
        <Input placeholder="Cognizant Virtual Experience Program" />
      </FormControl>
      <FormControl>
        <FormLabel>Certification Description</FormLabel>
        <Textarea placeholder="Learnt Machine Learning on Edx" />
      </FormControl>
      <Button type="submit">Save</Button>
    </SimpleGrid>
  );
};

export default CertificationsPage;
