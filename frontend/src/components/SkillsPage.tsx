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
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";
import { Skill } from "../services/resumeService";
import ImportComponent from "./ImportComponent";

const SkillsPage = () => {
  const { resume, dispatch } = useResume();
  const defaultField = [
    {
      skillHeading: "",
      skill: "",
    },
  ];

  const [inputFields, setInputFields] = useState<Skill[]>(
    resume
      ? resume.skills.length !== 0
        ? resume.skills
        : defaultField
      : defaultField
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const newSkill = Array.from({ length: inputFields.length }, (_, index) => ({
      skillHeading: data.get(`skillHeading${index}`) as string,
      skill: data.get(`skill${index}`) as string,
    }));

    dispatch({ type: "UPDATE_RESUME", field: "skills", value: newSkill });

    setInputFields(newSkill);
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
      <Heading marginBottom={5}>Resume Skills</Heading>
      <ImportComponent componentName="skills" />
      <Form onSubmit={handleSubmit}>
        {inputFields?.map((input, index) => (
          <Box key={index}>
            <FormControl>
              <HStack>
                <FormLabel>Skill Heading {index + 1}</FormLabel>
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
                name={`skillHeading${index}`}
                placeholder="Programming"
                defaultValue={input.skillHeading ? input.skillHeading : ""}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Skills</FormLabel>
              <Textarea
                name={`skill${index}`}
                placeholder="C++, Java, Python"
                defaultValue={input.skill ? input.skill : ""}
              />
              <FormHelperText>Seperated by ',' </FormHelperText>
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

export default SkillsPage;
