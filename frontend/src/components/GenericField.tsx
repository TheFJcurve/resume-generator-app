import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  component: string;
  componentNumber: number;
  index: number;
  name: string;
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
  name,
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
        name={name}
        placeholder={placeHolderValues as string}
        defaultValue={defaultValue}
      />
    </FormControl>
  ) : (
    <FormControl key={index} isRequired={isRequired} margin={2}>
      <FormLabel>{displayName}</FormLabel>
      <Input
        name={component}
        placeholder={placeHolderValues as string}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};

export default GenericField;
