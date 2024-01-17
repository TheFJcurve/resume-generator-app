import { createBrowserRouter } from "react-router-dom";
import CertificationsPage from "./components/resume_components/CertificationsPage";
import EducationPage from "./components/resume_components/EducationPage";
import ErrorPage from "./components/ErrorPage";
import ExperiencePage from "./components/resume_components/ExperiencePage";
import HeadingPage from "./components/resume_components/HeadingPage";
import ProjectPage from "./components/resume_components/ProjectPage";
import ResumeComponentList from "./components/ResumeComponentList";
import ResumeList from "./components/ResumeList";
import SkillsPage from "./components/resume_components/SkillsPage";
import Layout from "./design/Layout";
import ResumeDetails from "./components/ResumeDetails";

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
