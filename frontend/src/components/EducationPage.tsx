import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";
import { Education } from "../services/resumeService";
import { useEffect, useState } from "react";
import ImportComponent from "./ImportComponent";

const EducationPage = () => {
  const { resume, dispatch } = useResume();
  const defaultField = [
    {
      institute: "",
      degree: "",
      location: "",
      graduationDate: "",
      relevantCourses: "",
    },
  ];

  const [inputFields, setInputFields] = useState<Education[]>(
    resume
      ? resume.education.length !== 0
        ? resume.education
        : defaultField
      : defaultField
  );

  useEffect(() => {
    setInputFields(
      resume
        ? resume.education.length == 0
          ? defaultField
          : resume.education
        : defaultField
    );
  }, [resume]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Create an array of education objects from the form data
    const newEducations = Array.from(
      { length: inputFields.length },
      (_, index) => ({
        institute: data.get(`institute${index}`) as string,
        degree: data.get(`degree${index}`) as string,
        location: data.get(`location${index}`) as string,
        graduationDate: data.get(`graduationDate${index}`) as string,
        relevantCourses: data.get(`relevantCourses${index}`) as string,
      })
    );

    dispatch({
      type: "UPDATE_RESUME",
      field: "education",
      value: newEducations,
    });

    setInputFields(newEducations);
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
      <Heading marginBottom={5}>Resume Education</Heading>
      <ImportComponent componentName="education" />
      <Form onSubmit={handleSubmit}>
        {inputFields?.map((input, index) => {
          return (
            <Box key={index}>
              <FormControl isRequired>
                <HStack>
                  <FormLabel>Institute {index + 1}</FormLabel>
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
                  name={`institute${index}`}
                  placeholder="The University of Waterloo"
                  defaultValue={input.institute}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Degree or Major</FormLabel>
                <Input
                  name={`degree${index}`}
                  placeholder="Computer Science with Statistics Minor"
                  defaultValue={input.degree}
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
              <FormControl>
                <FormLabel>Graduation Date</FormLabel>
                <Input
                  name={`graduationDate${index}`}
                  placeholder="April 2027"
                  defaultValue={
                    input.graduationDate ? input.graduationDate : ""
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Relevant Courses</FormLabel>
                <Input
                  name={`relevantCourses${index}`}
                  placeholder="Object Oriented Programming"
                  defaultValue={
                    input.relevantCourses ? input.relevantCourses : ""
                  }
                />
                <FormHelperText>Seperated by ',' </FormHelperText>
              </FormControl>
            </Box>
          );
        })}
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

export default EducationPage;
