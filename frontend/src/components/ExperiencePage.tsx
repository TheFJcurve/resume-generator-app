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
import "react-quill/dist/quill.snow.css";
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";
import ImportComponent from "./ImportComponent";

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

  useEffect(() => {
    setInputFields(
      resume
        ? resume.experience.length == 0
          ? defaultField
          : resume.experience
        : defaultField
    );
  }, [resume]);

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
        description: data.get(`description${index}`) as string,
      })
    );

    dispatch({
      type: "UPDATE_RESUME",
      field: "experience",
      value: newExperiences,
    });

    setInputFields(newExperiences);
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
      <ImportComponent componentName="experience" />
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
                  placeholder="2022-05-01"
                  defaultValue={input.startDate}
                />
              </FormControl>
              <FormControl>
                <FormLabel>End Date</FormLabel>
                <Input
                  name={`endDate${index}`}
                  type="date"
                  placeholder="2022-08-30"
                  defaultValue={input.endDate ? input.endDate : ""}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Job Description</FormLabel>
                <Textarea
                  name={`description${index}`}
                  placeholder="Details of the Job or Experience"
                  defaultValue={input.description}
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
