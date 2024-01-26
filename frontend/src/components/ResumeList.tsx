import { SimpleGrid, Text } from "@chakra-ui/react";
import getResumes from "../hooks/getResumes";
import ResumeCard from "./ResumeCard";
import ResumeContainer from "./ResumeContainer";
import ResumeCardSkeleton from "./ResumeCardSkeleton";
import useResume from "../hooks/useResume";
import { Resume } from "../services/resumeService";

const ResumeList = () => {
  const { data, error, isLoading } = getResumes();
  const { dispatch } = useResume();
  const skeletons = [1, 2];
  const fetchAndUse = (resume: Resume) => {
    console.log(resume);
    dispatch({
      type: "SET_RESUME",
      payload: {
        name: resume.name,
        heading: resume.heading
          ? resume.heading
          : { fullName: "", email: "", phone: "" },
        education: resume.education ? resume.education : [],
        experience: resume.experience ? resume.experience : [],
        projects: resume.projects ? resume.projects : [],
        skills: resume.skills ? resume.skills : [],
        certifications: resume.certifications ? resume.certifications : [],
      },
    });
  };
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
            <ResumeCard
              resume={resume}
              fetchAndUse={fetchAndUse}
            />
          </ResumeContainer>
        ))}
    </SimpleGrid>
  );
};

export default ResumeList;
