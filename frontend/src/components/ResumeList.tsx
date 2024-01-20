import { SimpleGrid } from "@chakra-ui/react";
import useResumes from "../hooks/getResumes";
import ResumeCard from "./ResumeCard";
import ResumeContainer from "./ResumeContainer";
import ResumeCardSkeleton from "./ResumeCardSkeleton";

const ResumeList = () => {
  const { data, error, isLoading } = useResumes();
  const skeletons = [1, 2];

  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} margin={6} gap={4}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ResumeContainer key={skeleton}>
            <ResumeCardSkeleton />
          </ResumeContainer>
        ))}
      {data &&
        data.map((resume) => (
          <ResumeContainer key={resume._id}>
            <ResumeCard resume={resume} />
          </ResumeContainer>
        ))}
    </SimpleGrid>
  );
};

export default ResumeList;
