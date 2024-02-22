import { Select } from "@chakra-ui/react";
import _get from "lodash/get";
import getResumes from "../hooks/getResumes";
import useResume from "../hooks/useResume";

interface Props {
  componentName: string;
}

const ImportComponent = ({ componentName }: Props) => {
  const { data } = getResumes();
  const { dispatch } = useResume();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      const value = _get(data, e.target.value + "." + componentName);
      dispatch({ type: "UPDATE_RESUME", field: componentName, value: value });
      console.log(value);
    }
  };

  return (
    <Select placeholder="Import from another Resume" onChange={handleSelect}>
      {data?.map((resume, index) =>
        _get(resume, componentName)?.length !== 0 ? (
          <option value={index} key={resume._id}>
            {resume.name}
          </option>
        ) : null
      )}
    </Select>
  );
};

export default ImportComponent;
