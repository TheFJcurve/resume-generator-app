import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import CertificationsPage from "./resume_components/CertificationsPage";
import EducationPage from "./resume_components/EducationPage";
import ExperiencePage from "./resume_components/ExperiencePage";
import HeadingPage from "./resume_components/HeadingPage";
import ProjectPage from "./resume_components/ProjectPage";
import ResumeName from "./resume_components/ResumeName";
import SkillsPage from "./resume_components/SkillsPage";
import { useResume } from "../context/ResumeContext";

const ResumeComponentList = () => {
  const { resume } = useResume();

  const handleSubmit = () => {
    console.log(resume);
  };

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} margin={3} gap={10}>
      <ResumeName />
      <HeadingPage />
      <EducationPage />
      <ExperiencePage />
      <ProjectPage />
      <SkillsPage />
      <CertificationsPage />
      <Button onClick={handleSubmit} type="submit">
        Make
      </Button>
    </SimpleGrid>
  );
};

export default ResumeComponentList;
