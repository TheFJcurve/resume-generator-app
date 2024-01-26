import { SimpleGrid, Text } from "@chakra-ui/react";
import getResumes from "../hooks/getResumes";
import ResumeCard from "./ResumeCard";
import ResumeCardSkeleton from "./ResumeCardSkeleton";
import ResumeContainer from "./ResumeContainer";

const ResumeList = () => {
  const { data, error, isLoading } = getResumes();
  const skeletons = [1, 2];


  if (error) return <Text>{error.message}</Text>;

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
