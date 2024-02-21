import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  component: string;
  componentNumber: number;
  index: number;
  displayName: string;
  placeHolderValues: string | string[];
  defaultValue: string;
  isRequired: boolean;
  multiple: boolean;
}

const GenericField = ({
  component,
  componentNumber,
  index,
  displayName,
  placeHolderValues,
  defaultValue,
  isRequired,
  multiple,
}: Props) => {
  return multiple ? (
    <FormControl key={index} isRequired={isRequired} margin={2}>
      <FormLabel>
        {displayName} {componentNumber + 1}
      </FormLabel>
      <Input
        name={`${component}[${componentNumber}]`}
        placeholder={
          Array.isArray(placeHolderValues)
            ? placeHolderValues[0]
            : placeHolderValues
        }
        defaultValue={defaultValue}
      />
    </FormControl>
  ) : (
    <FormControl key={index} isRequired={isRequired} margin={2}>
      <FormLabel>{displayName}</FormLabel>
      <Input
        name={component}
        placeholder={
          Array.isArray(placeHolderValues)
            ? placeHolderValues[0]
            : placeHolderValues
        }
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};

export default GenericField;
