import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  component: string;
  componentNumber: number;
  componentCount: number;
  index: number;
  displayName: string;
  placeHolderValues: string | string[];
  defaultValue: string[];
  isRequired: boolean;
}

const GenericDescriptionField = ({
  component,
  componentNumber,
  index,
  displayName,
  placeHolderValues,
  defaultValue,
  isRequired,
}: Props) => {
  const [descriptionCount, setDescriptionCount] = useState(1);

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
            name={`${component}[${componentNumber}][${descriptionNumber}]`}
            placeholder={placeHolderValues[descriptionNumber]}
            defaultValue={defaultValue[descriptionNumber]}
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
