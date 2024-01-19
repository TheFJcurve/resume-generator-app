import { createBrowserRouter } from "react-router-dom";
import CertificationsPage from "./components/resumeComponents/CertificationsPage";
import EducationPage from "./components/resumeComponents/EducationPage";
import ErrorPage from "./components/ErrorPage";
import ExperiencePage from "./components/resumeComponents/ExperiencePage";
import HeadingPage from "./components/resumeComponents/HeadingPage";
import ProjectPage from "./components/resumeComponents/ProjectPage";
import ResumeComponentList from "./components/ResumeComponentList";
import ResumeList from "./components/ResumeList";
import SkillsPage from "./components/resumeComponents/SkillsPage";
import Layout from "./design/Layout";
import ResumeDetails from "./components/ResumeDetails";
import ResumeName from "./components/resumeComponents/ResumeName";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "create",
        element: <ResumeComponentList />,
        children: [
          { path: "", element: <ResumeName /> },
          { path: "name", element: <ResumeName /> },
          { path: "heading", element: <HeadingPage /> },
          { path: "education", element: <EducationPage /> },
          { path: "experience", element: <ExperiencePage /> },
          { path: "project", element: <ProjectPage /> },
          { path: "skills", element: <SkillsPage /> },
          { path: "certifications", element: <CertificationsPage /> },
        ],
      },
      {
        path: "edit",
        children: [
          { path: "", element: <ResumeList /> },
          { path: ":id", element: <ResumeDetails /> },
        ],
      },
    ],
  },
]);

export default router;
