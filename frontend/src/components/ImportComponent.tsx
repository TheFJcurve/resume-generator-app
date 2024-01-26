import { Select } from "@chakra-ui/react";
import _ from "lodash";
import getResumes from "../hooks/getResumes";
import useResume from "../hooks/useResume";

interface Props {
  componentName: string;
}

const ImportComponent = ({ componentName }: Props) => {
  const { data } = getResumes();
  const { dispatch } = useResume();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = _.get(data, e.target.value + "." + componentName);
    dispatch({ type: "UPDATE_RESUME", field: componentName, value: value });
  };

  return (
    <Select placeholder="Import from another Resume" onChange={handleSelect}>
      {data?.map((resume, index) =>
        _.get(resume, componentName).length == 0 ? null : (
          <option value={index} key={resume._id}>
            {resume.name}
          </option>
        )
      )}
    </Select>
  );
};

export default ImportComponent;
