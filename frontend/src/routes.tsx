import { createBrowserRouter } from "react-router-dom";
import CertificationsPage from "./components/CertificationsPage";
import EducationPage from "./components/EducationPage";
import ErrorPage from "./components/ErrorPage";
import ExperiencePage from "./components/ExperiencePage";
import HeadingPage from "./components/HeadingPage";
import ProjectPage from "./components/ProjectPage";
import ResumeComponentList from "./components/ResumeComponentList";
import ResumeList from "./components/ResumeList";
import SkillsPage from "./components/SkillsPage";
import Layout from "./design/Layout";
import ResumeDetails from "./components/ResumeDetails";
import ResumeName from "./components/ResumeName";
import Home from "./design/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume",
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
