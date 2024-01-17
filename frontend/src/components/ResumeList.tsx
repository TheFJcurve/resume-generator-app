import { SimpleGrid } from "@chakra-ui/react";
import useResumes from "../hooks/useResumes";
import ResumeCard from "./ResumeCard";

const ResumeList = () => {
  const { data, error } = useResumes();

  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} margin={3} gap={3}>
      {data &&
        data.map((resume) => <ResumeCard key={resume._id} resume={resume} />)}
    </SimpleGrid>
  );
};

export default ResumeList;
