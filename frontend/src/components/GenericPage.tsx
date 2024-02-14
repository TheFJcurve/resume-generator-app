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
import _get from "lodash/get";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";
import ImportComponent from "./ImportComponent";

interface Props {
  title: string;
  componentName: "name" | "heading" | "education";
  components: string[];
  displayName: string[];
  placeHolderValues: string[];
  isRequired: boolean[];
  multiple: boolean;
}

const GenericPage = ({
  title,
  componentName,
  components,
  displayName,
  placeHolderValues,
  isRequired,
  multiple,
}: Props) => {
  const { resume, dispatch } = useResume();
  const [componentCount, setComponentCount] = useState(1);
  const [resumeComponent, setResumeComponent] = useState(
    _get(resume, componentName)
  );

  useEffect(() => {
    const fetchedResumeComponent = _get(resume, componentName);
    setResumeComponent(fetchedResumeComponent);
    if (
      typeof fetchedResumeComponent === "string" ||
      Array.isArray(fetchedResumeComponent)
    ) {
      let length = fetchedResumeComponent.length;
      {
        length === 0 ? (length = 1) : (length = length);
      }
      setComponentCount(length);
    }
  }, [resume]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    if (multiple) {
      const updatedComponent: { [key: string]: string }[] = [];
      for (let i = 0; i < componentCount; i++) {
        updatedComponent.push({});
      }
      for (let i = 0; i < componentCount; i++) {
        components.forEach((component) => {
          updatedComponent[i][component] = data.get(
            `${component}[${i}]`
          ) as string;
        });
      }
      console.log(updatedComponent);

      dispatch({
        type: "UPDATE_RESUME",
        field: componentName,
        value: updatedComponent,
      });
    } else {
      const updatedComponent: { [key: string]: string } = {};
      components.forEach((component) => {
        updatedComponent[component] = data.get(`${component}`) as string;
      });
      console.log(updatedComponent);

      dispatch({
        type: "UPDATE_RESUME",
        field: componentName,
        value: updatedComponent,
      });
    }
  };

  return (
    <SimpleGrid gap={2}>
      <Heading marginBottom={5}>{title}</Heading>
      <ImportComponent componentName={componentName} />
      <Form onSubmit={handleSubmit}>
        {multiple
          ? Array.from(
              { length: componentCount },
              (_, componentNumber) => componentNumber
            ).map((componentNumber) => (
              <Box key={componentNumber}>
                {components.map((component, index) => (
                  <FormControl key={index} isRequired={isRequired[index]}>
                    <FormLabel>
                      {displayName[index]} {componentNumber + 1}
                    </FormLabel>
                    <Input
                      name={`${component}[${componentNumber}]`}
                      placeholder={placeHolderValues[index]}
                      defaultValue={_get(
                        _get(resumeComponent, componentNumber),
                        component
                      )}
                    />
                  </FormControl>
                ))}
                <HStack>
                  <IconButton
                    style={{ marginRight: "auto" }}
                    onClick={() => setComponentCount(componentCount - 1)}
                    colorScheme="red"
                    marginTop={3}
                    icon={<DeleteIcon />}
                    aria-label="remove"
                  />
                  <IconButton
                    style={{ marginLeft: "auto" }}
                    onClick={() => setComponentCount(componentCount + 1)}
                    colorScheme="blue"
                    marginTop={3}
                    icon={<AddIcon />}
                    aria-label="add"
                  />
                </HStack>
              </Box>
            ))
          : components.map((component, index) => (
              <FormControl key={index} isRequired={isRequired[index]}>
                <FormLabel>{displayName[index]}</FormLabel>
                <Input
                  name={component}
                  placeholder={placeHolderValues[index]}
                  defaultValue={_get(resumeComponent, component)}
                />
              </FormControl>
            ))}

        <Button colorScheme="teal" marginTop={3} type="submit">
          Save
        </Button>
      </Form>
    </SimpleGrid>
  );
};

export default GenericPage;
