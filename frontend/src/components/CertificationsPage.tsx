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
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";

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
      <Button colorScheme="teal">Import from another Resume</Button>
      <Form onSubmit={handleSubmit}>
        {inputFields?.map((input, index) => (
          <Box key={index}>
            <FormControl>
              <HStack>
                <FormLabel>Certification Name</FormLabel>
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
            <FormControl>
              <FormLabel>Certification Description</FormLabel>
              <Textarea
                name={`description${index}`}
                placeholder="Learnt Machine Learning on Edx"
                defaultValue={input.description ? input.description : ""}
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
