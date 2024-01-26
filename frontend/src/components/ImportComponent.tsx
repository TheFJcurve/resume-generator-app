import { Select } from "@chakra-ui/react";
import getResumes from "../hooks/getResumes";
import _ from "lodash";

interface Props {
  componentName: string;
}

const ImportComponent = ({ componentName }: Props) => {
  const { data } = getResumes();
  return (
    <Select placeholder="Import from another Resume">
      {data?.map((resume) =>
        _.get(resume, componentName).length == 0 ? null : (
          <option value={resume._id} key={resume._id}>
            {resume.name}
          </option>
        )
      )}
    </Select>
  );
};

export default ImportComponent;
