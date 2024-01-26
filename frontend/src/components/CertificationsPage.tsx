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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
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

  const [quillContent, setQuillContent] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const newCertification = Array.from(
      { length: inputFields.length },
      (_, index) => ({
        name: data.get(`name${index}`) as string,
        description: quillContent[index],
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
              <ReactQuill
                id={`description${index}`}
                theme="snow"
                defaultValue={input.description}
                onChange={(value) => {
                  const updatedQuillContents = [...quillContent];
                  updatedQuillContents[index] = value;
                  setQuillContent(updatedQuillContents);
                }}
                modules={{
                  toolbar: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ list: "ordered" }, { list: "bullet" }],
                  ],
                }}
                formats={[
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "blockquote",
                  "list",
                  "bullet",
                ]}
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
