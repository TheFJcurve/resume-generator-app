import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";
import ImportComponent from "./ImportComponent";

const CertificationsPage = () => {
  const { resume, dispatch } = useResume();
  const defaultField = [
    {
      name: "",
      description: "",
    },
  ];
  const [inputFields, setInputFields] = useState(
    resume
      ? resume.certifications?.length === 0
        ? defaultField
        : resume?.certifications
      : defaultField
  );

  useEffect(() => {
    setInputFields(
      resume
        ? resume.certifications.length == 0
          ? defaultField
          : resume.certifications
        : defaultField
    );
  }, [resume]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const newCertification = Array.from(
      { length: inputFields.length },
      (_, index) => ({
        name: data.get(`name${index}`) as string,
        description: data.get(`description${index}`) as string,
      })
    );

    dispatch({
      type: "UPDATE_RESUME",
      field: "certifications",
      value: newCertification,
    });

    setInputFields(newCertification);
  };

  const addField = () => {
    setInputFields([...inputFields, defaultField[0]]);
  };

  const removeField = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <SimpleGrid gap={2}>
      <Heading marginBottom={5}>Resume Certifications</Heading>
      <ImportComponent componentName="certifications" />
      <Form onSubmit={handleSubmit}>
        {inputFields?.map((input, index) => (
          <Box key={index}>
            <FormControl isRequired>
              <HStack>
                <FormLabel>Certification Name {index + 1}</FormLabel>
                <IconButton
                  style={{ marginLeft: "auto" }}
                  onClick={() => removeField(index)}
                  colorScheme="red"
                  marginTop={3}
                  icon={<DeleteIcon />}
                  aria-label="remove"
                />
              </HStack>
              <Input
                marginTop={3}
                name={`name${index}`}
                placeholder="Cognizant Virtual Experience Program"
                defaultValue={input.name}
              />
            </FormControl>
            <FormControl marginTop={2}>
              <FormLabel>Certification Description</FormLabel>
              <Textarea
                placeholder="Details about the Course or Certification"
                defaultValue={input.description}
                name={`description${index}`}
              />
            </FormControl>
          </Box>
        ))}
        <HStack>
          <Button colorScheme="teal" marginTop={3} type="submit">
            Save
          </Button>
          <IconButton
            style={{ marginLeft: "auto" }}
            onClick={addField}
            colorScheme="blue"
            marginTop={3}
            icon={<AddIcon />}
            aria-label="add"
          />
        </HStack>
      </Form>
    </SimpleGrid>
  );
};

export default CertificationsPage;
