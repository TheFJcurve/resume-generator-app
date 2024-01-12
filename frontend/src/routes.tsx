import { createBrowserRouter } from "react-router-dom";
import CertificationsPage from "./components/CertificationsPage";
import EducationPage from "./components/EducationPage";
import ErrorPage from "./components/ErrorPage";
import ExperiencePage from "./components/ExperiencePage";
import HeadingPage from "./components/HeadingPage";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/ProjectPage";
import ResumePage from "./components/ResumePage";
import SkillsPage from "./components/SkillsPage";
import ResumeComponentList from "./components/ResumeComponentList";
import ResumeList from "./components/ResumeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
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
          { path: "resume", element: <ResumePage /> },
        ],
      },
      {
        path: "edit",
        element: <ResumeList />,
      },
    ],
  },
]);

export default router;
