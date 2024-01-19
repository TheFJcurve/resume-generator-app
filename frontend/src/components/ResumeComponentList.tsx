import { Button, SimpleGrid } from "@chakra-ui/react";
import useResume from "../hooks/useResume";
import CertificationsPage from "./resume_components/CertificationsPage";
import EducationPage from "./resume_components/EducationPage";
import ExperiencePage from "./resume_components/ExperiencePage";
import HeadingPage from "./resume_components/HeadingPage";
import ProjectPage from "./resume_components/ProjectPage";
import ResumeName from "./resume_components/ResumeName";
import SkillsPage from "./resume_components/SkillsPage";

const ResumeComponentList = () => {
  const { resume, dispatch } = useResume();

  const postResume = async () => {
    const response = await fetch("/api/resumes", {
      method: "POST",
      body: JSON.stringify(resume),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message);
    } else {
      console.log("Resume created successfully!");
      dispatch({ type: "UPDATE_RESUME", field: "name", value: "" });
      dispatch({ type: "UPDATE_RESUME", field: "heading", value: {} });
      dispatch({ type: "UPDATE_RESUME", field: "education", value: [] });
      dispatch({ type: "UPDATE_RESUME", field: "experience", value: [] });
      dispatch({ type: "UPDATE_RESUME", field: "projects", value: [] });
      dispatch({ type: "UPDATE_RESUME", field: "skills", value: [] });
      dispatch({ type: "UPDATE_RESUME", field: "certifications", value: [] });
    }
    console.log(json);
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
      <Button onClick={postResume} type="submit">
        Make
      </Button>
    </SimpleGrid>
  );
};

export default ResumeComponentList;
