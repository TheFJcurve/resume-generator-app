import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useResume from "../../../hooks/useResume";
import _get from "lodash/get";

interface Props {
  component: string;
  componentName: string;
  componentNumber: number;
  componentCount: number;
  index: number;
  name: string;
  displayName: string;
  placeHolderValues: string | string[];
  defaultValue: string[];
  isRequired: boolean;
}

const GenericDescriptionField = ({
  component,
  componentName,
  componentNumber,
  index,
  name,
  displayName,
  placeHolderValues,
  defaultValue,
  isRequired,
}: Props) => {
  const [descriptionCount, setDescriptionCount] = useState(1);
  const { resume } = useResume();
  useEffect(() => {
    if (_get(_get(resume, componentName), componentNumber)) {
      const fetchedResumeComponent = _get(
        _get(_get(resume, componentName), componentNumber),
        component
      );
      let length = fetchedResumeComponent.length;
      {
        length === 0 ? (length = 1) : (length = length);
      }
      setDescriptionCount(length);
    }
  }, [_get(resume, componentName)]);

  return (
    <FormControl
      className="description"
      key={index}
      isRequired={isRequired}
      margin={2}
    >
      <FormLabel>
        {displayName} {componentNumber + 1}
      </FormLabel>
      {Array.from(
        { length: descriptionCount },
        (_, descriptionNumber) => descriptionNumber
      ).map((descriptionNumber) => (
        <HStack key={index + descriptionNumber} marginTop={3}>
          <Input
            name={`${name}[${descriptionNumber}]`}
            placeholder={placeHolderValues[descriptionNumber]}
            defaultValue={defaultValue ? defaultValue[descriptionNumber] : ""}
          />
          <IconButton
            style={{ marginRight: "auto" }}
            onClick={() =>
              setDescriptionCount(
                descriptionCount > 1 ? descriptionCount - 1 : 1
              )
            }
            colorScheme="gray"
            icon={<DeleteIcon />}
            aria-label="remove"
          />
          <IconButton
            style={{ marginLeft: "auto" }}
            onClick={() => setDescriptionCount(descriptionCount + 1)}
            colorScheme="gray"
            icon={<AddIcon />}
            aria-label="add"
          />
        </HStack>
      ))}
    </FormControl>
  );
};

export default GenericDescriptionField;
