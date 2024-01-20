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
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";
import "react-quill/dist/quill.snow.css";

const ExperiencePage = () => {
  const { resume, dispatch } = useResume();
  const defaultField = [
    {
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ];
  const [inputFields, setInputFields] = useState(
    resume
      ? resume.experience?.length === 0
        ? defaultField
        : resume?.experience
      : defaultField
  );
  const [quillContent, setQuillContent] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Create an array of education objects from the form data
    const newExperiences = Array.from(
      { length: inputFields.length },
      (_, index) => ({
        company: data.get(`company${index}`) as string,
        position: data.get(`position${index}`) as string,
        location: data.get(`location${index}`) as string,
        startDate: data.get(`startDate${index}`) as string,
        endDate: data.get(`endDate${index}`) as string,
        description: quillContent[index],
      })
    );

    dispatch({
      type: "UPDATE_RESUME",
      field: "experience",
      value: newExperiences,
    });

    setInputFields(newExperiences);
    setQuillContent([]);
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
      <Heading marginBottom={5}>Resume Experience</Heading>
      <Button colorScheme="teal">Import from another Resume</Button>
      <Form onSubmit={handleSubmit}>
        {inputFields?.map((input, index) => {
          return (
            <Box key={index}>
              <FormControl isRequired>
                <HStack>
                  <FormLabel>Company Name {index + 1}</FormLabel>
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
                  name={`company${index}`}
                  placeholder="Sweat Free Apparel"
                  defaultValue={input.company}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Position</FormLabel>
                <Input
                  name={`position${index}`}
                  placeholder="Machine Learning and Mobile Developer co-op"
                  defaultValue={input.position}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input
                  name={`location${index}`}
                  placeholder="Waterloo, ON, Canada"
                  defaultValue={input.location ? input.location : ""}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Start Date</FormLabel>
                <Input
                  name={`startDate${index}`}
                  type="date"
                  placeholder="May 2023 - August 2023"
                  defaultValue={input.startDate}
                />
              </FormControl>
              <FormControl>
                <FormLabel>End Date</FormLabel>
                <Input
                  name={`endDate${index}`}
                  type="date"
                  placeholder="May 2023 - August 2023"
                  defaultValue={input.endDate ? input.endDate : ""}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Job Description</FormLabel>
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
          );
        })}
        <HStack>
          <Button marginTop={3} type="submit" colorScheme="teal">
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

export default ExperiencePage;
