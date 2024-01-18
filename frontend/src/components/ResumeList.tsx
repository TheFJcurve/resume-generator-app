import { SimpleGrid } from "@chakra-ui/react";
import useResumes from "../hooks/getResumes";
import ResumeCard from "./ResumeCard";

const ResumeList = () => {
  const { data, error } = useResumes();

  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} margin={6} gap={4}>
      {data &&
        data.map((resume) => <ResumeCard key={resume._id} resume={resume} />)}
    </SimpleGrid>
  );
};

export default ResumeList;
