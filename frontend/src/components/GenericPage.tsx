import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import _get from "lodash/get";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import useResume from "../hooks/useResume";
import GenericDescriptionField from "./GenericDescriptionField";
import GenericField from "./GenericField";
import ImportComponent from "./ImportComponent";

interface Props {
  title: string;
  componentName:
    | "name"
    | "heading"
    | "education"
    | "experience"
    | "projects"
    | "skills"
    | "certifications";
  components: string[];
  displayName: string[];
  placeHolderValues: (string | string[])[];
  isRequired: boolean[];
  isDescription: boolean[];
  multiple: boolean;
}

const GenericPage = ({
  title,
  componentName,
  components,
  displayName,
  placeHolderValues,
  isRequired,
  isDescription,
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
      const updatedComponent: { [key: string]: string | string[] }[] = [];
      for (let i = 0; i < componentCount; i++) {
        updatedComponent.push({});
      }
      for (let i = 0; i < componentCount; i++) {
        components.forEach((component) => {
          if (isDescription[components.indexOf(component)]) {
            const descriptions: string[] = [];
            let j = 0;
            while (true) {
              const descriptionValue = data.get(`${component}[${i}][${j}]`);
              if (descriptionValue) {
                descriptions.push(descriptionValue as string);
                j++;
              } else {
                break;
              }
            }
            updatedComponent[i][component] = descriptions;
          } else {
            updatedComponent[i][component] = data.get(
              `${component}[${i}]`
            ) as string;
          }
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
                {components.map((component, index) =>
                  isDescription[index] ? (
                    <GenericDescriptionField
                      key={index}
                      component={component}
                      componentName={componentName}
                      componentNumber={componentNumber}
                      componentCount={componentCount}
                      index={index}
                      name={`${component}[${componentNumber}]`}
                      displayName={displayName[index]}
                      placeHolderValues={placeHolderValues[index]}
                      defaultValue={_get(
                        _get(resumeComponent, componentNumber),
                        component
                      )}
                      isRequired={isRequired[index]}
                    />
                  ) : (
                    <GenericField
                      key={index}
                      component={component}
                      componentNumber={componentNumber}
                      index={index}
                      name={`${component}[${componentNumber}]`}
                      displayName={displayName[index]}
                      placeHolderValues={placeHolderValues[index]}
                      defaultValue={_get(
                        _get(resumeComponent, componentNumber),
                        component
                      )}
                      isRequired={isRequired[index]}
                      multiple={true}
                    />
                  )
                )}
                <HStack>
                  <IconButton
                    style={{ marginRight: "auto" }}
                    onClick={() =>
                      setComponentCount(
                        componentCount > 1 ? componentCount - 1 : 1
                      )
                    }
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
              <GenericField
                key={index}
                component={component}
                componentNumber={0}
                index={index}
                name={component}
                displayName={displayName[index]}
                placeHolderValues={placeHolderValues[index]}
                defaultValue={_get(resumeComponent, component)}
                isRequired={isRequired[index]}
                multiple={false}
              />
            ))}

        <Button colorScheme="teal" marginTop={3} type="submit" width={"100%"}>
          Save
        </Button>
      </Form>
    </SimpleGrid>
  );
};

export default GenericPage;
